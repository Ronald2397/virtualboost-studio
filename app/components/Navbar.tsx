export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-lg z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <h1 className="text-3xl font-black tracking-tight">

          <span className="text-cyan-400">
            Virtual
          </span>

          <span className="text-orange-500">
            Boost
          </span>

        </h1>

        {/* LINKS */}

        <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium">

          <a href="#" className="hover:text-cyan-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Branding
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Portafolio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>

        </div>

        {/* BOTÓN */}

        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-xl font-bold text-black">
          Iniciar Proyecto
        </button>

      </div>

    </nav>
  );
}