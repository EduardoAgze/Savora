import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { UtensilsCrossed, Store } from "lucide-react";
import { SavoraLogo } from "@/components/savora/logo";
import { savoraStore } from "@/lib/savora/store";

export const Route = createFileRoute("/role")({
  head: () => ({
    meta: [
      { title: "Elige tu rol — Savora" },
      { name: "description", content: "Cliente o restaurante: empieza a rescatar comida." },
    ],
  }),
  component: RolePage,
});

function RolePage() {
  const navigate = useNavigate();
  function pick(role: "cliente" | "restaurante") {
    savoraStore.setRole(role);
    navigate({ to: role === "cliente" ? "/explore" : "/restaurant" });
  }
  return (
    <div className="phone-frame flex min-h-screen flex-col items-center px-6 pb-10 pt-10">
      <SavoraLogo size={80} />
      <h1 className="mt-5 text-center text-2xl font-bold">¿Cómo quieres empezar?</h1>
      <p className="mt-1 text-center text-muted-foreground">Elige tu rol para continuar</p>

      <button
        onClick={() => pick("cliente")}
        className="mt-8 w-full rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
            <UtensilsCrossed className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="text-xl font-bold">Soy Cliente</div>
            <p className="mt-1 text-sm text-muted-foreground">
              ¿Tienes hambre y quieres ahorrar rescatando comida deliciosa?
            </p>
            <div className="mt-3 rounded-xl bg-secondary py-2.5 text-center font-semibold text-secondary-foreground">
              Continuar como Cliente
            </div>
          </div>
        </div>
      </button>

      <button
        onClick={() => pick("restaurante")}
        className="mt-4 w-full rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Store className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="text-xl font-bold">Soy Restaurante</div>
            <p className="mt-1 text-sm text-muted-foreground">
              ¿Tienes comida que no vendiste hoy y quieres darle una segunda oportunidad?
            </p>
            <div className="mt-3 rounded-xl bg-primary py-2.5 text-center font-semibold text-primary-foreground">
              Continuar como Restaurante
            </div>
          </div>
        </div>
      </button>

      <p className="mt-auto pt-10 text-center text-[11px] tracking-[0.2em] text-muted-foreground">
        GREAT FOOD DESERVES ANOTHER CHANCE
      </p>
    </div>
  );
}
