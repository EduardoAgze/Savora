import { createFileRoute } from "@tanstack/react-router";
import { Clock, User } from "lucide-react";
import { RestaurantTabBar } from "@/components/savora/tab-bar";
import { useSavora } from "@/lib/savora/store";

export const Route = createFileRoute("/restaurant/reservations")({
  head: () => ({
    meta: [
      { title: "Reservas — Savora" },
      { name: "description", content: "Reservas activas de tu restaurante." },
    ],
  }),
  component: ReservationsPage,
});

const seed = [
  { name: "Juan P.", pack: "Pack Lasaña Vegana", time: "14:30 - 15:00", code: "SV-2341", status: "en camino" },
  { name: "María G.", pack: "Pack Ensaladas Mixtas (x2)", time: "15:15 - 16:00", code: "SV-2342", status: "confirmado" },
  { name: "Carlos D.", pack: "Pack Panadería Dulce", time: "17:00 - 17:30", code: "SV-2343", status: "confirmado" },
];

function ReservationsPage() {
  const mine = useSavora((s) => s.reservations);
  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="border-b px-5 py-4">
        <h1 className="text-xl font-bold">Reservas</h1>
        <p className="text-sm text-muted-foreground">{seed.length + mine.length} pendientes</p>
      </header>
      <ul className="flex-1 space-y-3 px-4 py-4">
        {[...mine.map((r) => ({ name: "Cliente", pack: r.packName, time: r.pickupUntil, code: r.code, status: "confirmado" as const })), ...seed].map((r) => (
          <li key={r.code} className="rounded-2xl border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <User className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.pack}</div>
              </div>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                #{r.code}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {r.time}
              </span>
              <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary">
                {r.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <RestaurantTabBar />
    </div>
  );
}
