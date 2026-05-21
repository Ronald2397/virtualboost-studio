"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Usuario registrado correctamente 🔥");

    console.log(data);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h1 className="text-4xl font-black text-center mb-8">

          <span className="text-cyan-400">
            Virtual
          </span>

          <span className="text-orange-500">
            Boost
          </span>

        </h1>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Crear Cuenta
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-bold text-lg mt-4"
          >
            Registrarse
          </button>

        </div>

      </div>

    </main>
  );
}
