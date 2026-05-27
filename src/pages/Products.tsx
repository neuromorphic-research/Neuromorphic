import { Navbar } from "../components/Navbar";

export function Products() {
  return (
    <div className="min-h-screen bg-neu-900 text-neu-100">
      <Navbar variant="solid" />
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6">
        <h1 className="font-hero text-4xl font-black uppercase tracking-[-0.035em] text-neu-50 md:text-6xl">
          Coming Soon
        </h1>
      </main>
    </div>
  );
}
