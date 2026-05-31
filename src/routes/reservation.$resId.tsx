import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Leaf, MapPin, Clock, Navigation } from "lucide-react";
import { useSavora } from "@/lib/savora/store";
import { SavoraLogo } from "@/components/savora/logo";

export const Route = createFileRoute("/reservation/$resId")({
  head: () => ({
    meta: [
      { title: "Reserva confirmada — Savora" },
      { name: "description", content: "Tu pack está reservado. Recógelo a tiempo." },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const { resId } = useParams({ from: "/reservation/$resId" });
  const res = useSavora((s) => s.reservations.find((r) => r.id === resId));

  if (!res) {
    return (
      <div className="phone-frame p-10 text-center">
        Reserva no encontrada.{" "}
        <Link to="/explore" className="text-primary">
          Volver
        </Link>
      </div>
    );
  }

  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    res.code,
  )}`;

  return (
    <div className="phone-frame flex min-h-screen flex-col items-center px-5 pb-8 pt-8">
      <SavoraLogo size={56} />
      <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
        <Leaf className="h-9 w-9" />
      </div>
      <h1 className="mt-4 text-center text-2xl font-bold text-primary">
        ¡Reserva Exitosa!
      </h1>
      <p className="mt-1 text-center text-muted-foreground">
        Has salvado una comida de ser desperdiciada.
      </p>

      <div className="mt-6 w-full overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="h-1.5 w-full bg-primary" />
        <div className="p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-secondary">
            {res.restaurant}
          </div>
          <div className="mt-1 text-lg font-bold">{res.packName}</div>
          <div className="mt-4 border-t pt-4 text-center text-sm text-muted-foreground">
            Muestra este código al recoger tu pack
          </div>
          <div className="mt-3 flex justify-center">
            <div className="rounded-xl bg-accent/40 p-3">
              <img src={qr} alt="QR" className="h-40 w-40" />
            </div>
          </div>
          <div className="mt-3 flex justify-center">
            <span className="rounded-full bg-muted px-4 py-1 bs-tag font-bold tracking-wider text-primary">
              #{res.code}
            </span>
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-secondary/15 p-3 text-sm">
            <Clock className="mt-0.5 h-4 w-4 text-secondary" />
            <div>
              <div className="font-semibold text-secondary-foreground">
                Instrucciones de Recogida
              </div>
              <div className="text-muted-foreground">
                Paga {res.pricePaid} Bs en el local y recoge hoy antes de las{" "}
                <strong>{res.pickupUntil}</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 w-full rounded-2xl border bg-card p-5">
        <h3 className="text-lg font-bold">Ubicación</h3>
        <div className="mt-3 flex items-start gap-3">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-muted text-primary">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <div className="font-semibold">{res.restaurant}</div>
            <div className="text-sm text-muted-foreground">{res.address}</div>
          </div>
        </div>
        <div
          className="mt-3 h-32 rounded-xl bg-[radial-gradient(circle_at_50%_50%,oklch(0.92_0.08_140/0.6),oklch(0.96_0.005_120))]"
          aria-hidden
        />
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground">
          <Navigation className="h-4 w-4" /> Cómo llegar
        </button>
      </div>

      <div className="mt-4 flex w-full flex-col gap-2">
        <Link
          to="/orders"
          className="rounded-xl border-2 border-primary py-3 text-center font-semibold text-primary"
        >
          Ver mis pedidos
        </Link>
        <Link
          to="/explore"
          className="py-2 text-center text-sm text-muted-foreground"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
