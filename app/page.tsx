import Services from "./sections/Services";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">

          <span className="text-cyan-400">
            Virtual
          </span>

          <span className="text-orange-500">
            Boost
          </span>

        </h1>

        <p className="mt-6 text-zinc-400 text-xl max-w-2xl leading-relaxed">
          Plataforma futurista especializada en branding,
          identidad visual y creación de marcas.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">

          <button className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-cyan-500/20">
            Explorar Servicios
          </button>

          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-bold">
            Crear Mi Marca
          </button>

        </div>

      </section>

      {/* SERVICES */}
      <Services />

    </main>
  );
}