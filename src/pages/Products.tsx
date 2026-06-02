import { CornerBrackets } from "../components/CornerBrackets";
import { Navbar } from "../components/Navbar";
import { Waves } from "../components/Waves";

export function Products() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0e0a] text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, #211a13 0%, #14110d 55%, #07080a 100%)",
        }}
      />
      <Waves strokeColor="rgba(220,180,130,0.16)" spacing={16} />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/55"
      />
      <CornerBrackets />

      <div className="relative z-10">
        <Navbar variant="solid" />
        <main className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-white/55">
            Products · v0
          </p>
          <h1 className="font-hero text-4xl font-black uppercase tracking-[-0.035em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] md:text-6xl">
            Coming Soon
          </h1>
        </main>
      </div>
    </div>
  );
}
