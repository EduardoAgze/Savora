import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { savoraStore, useSavora } from "@/lib/savora/store";
import { SavoraLogo } from "@/components/savora/logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savora — Salva comida, ahorra dinero, protege el planeta" },
      {
        name: "description",
        content:
          "Savora conecta restaurantes con personas para rescatar excedentes con precios dinámicos por IA.",
      },
      { property: "og:title", content: "Savora" },
      {
        property: "og:description",
        content: "Great food deserves another chance.",
      },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  const navigate = useNavigate();
  const role = useSavora((s) => s.role);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function login(e: React.FormEvent) {
    e.preventDefault();
    savoraStore.login();
    navigate({ to: role ? destFor(role) : "/role" });
  }

  return (
    <div className="phone-frame flex min-h-screen flex-col px-6 pb-10 pt-12">
      <div className="flex flex-col items-center">
        <SavoraLogo size={96} />
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
          Rescate de Alimentos IA
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          Salva comida, ahorra dinero y protege el planeta.
        </p>
      </div>

      <form
        onSubmit={login}
        className="mt-8 rounded-2xl border bg-card p-5 shadow-sm"
      >
        <label className="text-sm font-semibold">Correo electrónico</label>
        <div className="mt-1 flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="tu@correo.com"
            className="w-full bg-transparent outline-none"
            required
          />
        </div>
        <label className="mt-4 block text-sm font-semibold">Contraseña</label>
        <div className="mt-1 flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5">
          <Lock className="h-4 w-4 text-muted-foreground" />
          <input
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent outline-none"
            required
          />
        </div>
        <div className="mt-2 text-right text-sm font-medium text-primary">
          ¿Olvidaste tu contraseña?
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-secondary py-3 font-semibold text-secondary-foreground shadow-sm transition hover:brightness-105"
        >
          Iniciar Sesión
        </button>
        <Link
          to="/role"
          onClick={() => savoraStore.login()}
          className="mt-2 block rounded-xl border-2 border-primary py-3 text-center font-semibold text-primary"
        >
          Registrarse
        </Link>
      </form>

      <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="h-px flex-1 bg-border" />o<div className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={() => {
            savoraStore.login();
            navigate({ to: "/role" });
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border bg-card py-3 font-medium"
        >
          <span className="text-base">🟢</span> Continuar con Google
        </button>
        <button
          onClick={() => {
            savoraStore.login();
            navigate({ to: "/role" });
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3 font-medium text-background"
        >
          <span className="text-base"></span> Continuar con Apple
        </button>
      </div>
    </div>
  );
}

function destFor(role: "cliente" | "restaurante") {
  return role === "cliente" ? "/explore" : "/restaurant";
}
