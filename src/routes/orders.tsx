import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import { ClientTabBar } from "@/components/savora/tab-bar";
import { useSavora } from "@/lib/savora/store";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Mis pedidos — Savora" },
      { name: "description", content: "Tus reservas activas en Savora." },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  const reservations = useSavora((s) => s.reservations);
  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="border-b px-5 py-4">
        <h1 className="text-xl font-bold">Mis Pedidos</h1>
        <p className="text-sm text-muted-foreground">
          {reservations.length} reserva{reservations.length === 1 ? "" : "s"} activa
          {reservations.length === 1 ? "" : "s"}
        </p>
      </header>

      <div className="flex-1 space-y-3 px-4 py-4">
        {reservations.length === 0 && (
          <div className="rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
            Aún no tienes reservas.{" "}
            <Link to="/explore" className="font-medium text-primary">
              Explora packs
            </Link>
            .
          </div>
        )}
        {reservations.map((r) => (
          <Link
            key={r.id}
            to="/reservation/$resId"
            params={{ resId: r.id }}
            className="block rounded-2xl border bg-card p-4 transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary">
                {r.restaurant}
              </div>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                #{r.code}
              </span>
            </div>
            <div className="mt-1 font-semibold">{r.packName}</div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {r.address}
              </span>
              <span className="flex items-center gap-1 text-primary">
                <Clock className="h-3.5 w-3.5" /> {r.pickupUntil}
              </span>
            </div>
            <div className="mt-2 text-sm">
              Pagas{" "}
              <strong className="bs-tag text-secondary">{r.pricePaid} Bs</strong>{" "}
              <span className="text-muted-foreground line-through">
                {r.originalPrice} Bs
              </span>
            </div>
          </Link>
        ))}
      </div>

      <ClientTabBar />
    </div>
  );
}
