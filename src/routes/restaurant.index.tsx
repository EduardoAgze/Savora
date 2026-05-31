import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, Plus, ShoppingBag, Leaf, Wallet, Info, ChevronRight } from "lucide-react";
import { SavoraWordmark } from "@/components/savora/logo";
import { RestaurantTabBar } from "@/components/savora/tab-bar";
import { useSavora, savoraStore } from "@/lib/savora/store";

export const Route = createFileRoute("/restaurant/")({
  head: () => ({
    meta: [
      { title: "Dashboard restaurante — Savora" },
      { name: "description", content: "Gestiona tus excedentes y reservas con Savora." },
    ],
  }),
  component: RestaurantDashboard,
});

const fakeReservations = [
  { name: "Juan P.", initial: "J", pack: "Pack Lasaña Vegana", time: "14:30 - 15:00", status: "en camino" },
  { name: "María G.", initial: "M", pack: "Pack Ensaladas Mixtas (x2)", time: "15:15 - 16:00", status: "confirmado" },
  { name: "Carlos D.", initial: "C", pack: "Pack Panadería Dulce", time: "17:00 - 17:30", status: "confirmado" },
];

function RestaurantDashboard() {
  const wallet = useSavora((s) => s.walletBs);
  const open = useSavora((s) => s.restaurantOpen);
  const offers = useSavora((s) => s.offers);

  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-5 py-4">
        <Menu className="h-5 w-5" />
        <SavoraWordmark size={28} />
        <button
          onClick={() => savoraStore.toggleOpen()}
          className={
            "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold " +
            (open ? "border-primary text-primary" : "border-border text-muted-foreground")
          }
        >
          <span
            className={
              "h-2.5 w-2.5 rounded-full " + (open ? "bg-primary" : "bg-muted-foreground")
            }
          />
          {open ? "Abierto" : "Cerrado"}
        </button>
      </header>

      <div className="px-5">
        <h1 className="text-2xl font-bold">Hola, Green Bistro 👋</h1>
        <p className="text-sm text-muted-foreground">Resumen de actividad para hoy.</p>
      </div>

      <div className="mx-5 mt-4 overflow-hidden rounded-2xl border bg-gradient-to-br from-card to-secondary/10 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Wallet className="h-4 w-4 text-secondary" /> Saldo actual
        </div>
        <div className="mt-1 text-4xl font-extrabold bs-tag">{wallet} Bs</div>
        <Link
          to="/restaurant/wallet"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-secondary-foreground"
        >
          <Plus className="h-4 w-4" /> Recargar Crédito
        </Link>
      </div>

      <div className="mx-5 mt-3 flex items-start gap-2 rounded-xl bg-accent/60 px-4 py-3 text-sm">
        <Info className="mt-0.5 h-4 w-4 text-primary" />
        <p className="text-muted-foreground">
          Tus ofertas están visibles hoy. Se han descontado{" "}
          <strong className="text-foreground">5 Bs</strong> de tu saldo operativo.
        </p>
      </div>

      <div className="mx-5 mt-3 grid grid-cols-2 gap-3">
        <Metric icon={<ShoppingBag className="h-5 w-5 text-primary" />} value={`${offers.length + 11}`} label="Packs Hoy" />
        <Metric icon={<Leaf className="h-5 w-5 text-primary" />} value="3.2 kg" label="Salvados" />
      </div>

      <Link
        to="/restaurant/new-offer"
        className="mx-5 mt-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/50 py-3 font-semibold text-primary"
      >
        <Plus className="h-4 w-4" /> Nueva oferta con IA
      </Link>

      <div className="mx-5 mt-5 overflow-hidden rounded-2xl border bg-card">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="font-bold">Reservas para recoger</h2>
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            3 pendientes
          </span>
        </div>
        <ul className="divide-y">
          {fakeReservations.map((r) => (
            <li key={r.name} className="flex items-center gap-3 px-4 py-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                {r.initial}
              </span>
              <div className="flex-1">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.pack}</div>
              </div>
              <div className="text-right text-xs">
                <span
                  className={
                    "rounded-full px-2 py-0.5 font-medium " +
                    (r.status === "en camino"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-muted text-muted-foreground")
                  }
                >
                  {r.status}
                </span>
                <div className="mt-1 text-muted-foreground">{r.time}</div>
              </div>
            </li>
          ))}
        </ul>
        <button className="flex w-full items-center justify-center gap-1 border-t px-4 py-3 text-sm font-semibold text-primary">
          Ver todas las reservas <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="h-6" />
      <RestaurantTabBar />
    </div>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <div>{icon}</div>
      <div className="mt-1 text-2xl font-extrabold bs-tag">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
