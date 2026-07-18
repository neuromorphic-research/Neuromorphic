// Local-only dev server that serves /api/roi the way Vercel would in production.
// Run alongside `npm run dev`; Vite proxies /api requests here.
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import handler from "./api/roi.js";

try {
  for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
} catch {
  console.warn("No .env file found; ANTHROPIC_API_KEY must be set in the environment.");
}

const PORT = 8788;

createServer(async (req, res) => {
  let raw = "";
  for await (const chunk of req) raw += chunk;

  const vercelReq = { method: req.method, body: raw };
  const vercelRes = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(obj) {
      res.writeHead(this.statusCode, { "content-type": "application/json" });
      res.end(JSON.stringify(obj));
    },
  };

  try {
    await handler(vercelReq, vercelRes);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Dev API crashed" }));
  }
}).listen(PORT, () => {
  console.log(`Dev API listening on http://localhost:${PORT}`);
});
