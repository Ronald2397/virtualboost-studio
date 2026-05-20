export default function Services() {
  return (
    <section className="py-32 px-6 bg-zinc-950 text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Branding
            </h3>

            <p className="text-zinc-400">
              Creamos identidades visuales modernas y memorables para marcas.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Diseño Web
            </h3>

            <p className="text-zinc-400">
              Landing pages futuristas optimizadas para conversión.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Marketing Digital
            </h3>

            <p className="text-zinc-400">
              Estrategias visuales y contenido para redes sociales.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}