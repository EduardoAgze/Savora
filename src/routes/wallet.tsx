import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { ClientTabBar } from "@/components/savora/tab-bar";
import { useSavora } from "@/lib/savora/store";

export const Route = createFileRoute("/wallet")({
  head: () => ({
    meta: [
      { title: "Billetera — Savora" },
      { name: "description", content: "Tu ahorro acumulado en Savora." },
    ],
  }),
  component: WalletPage,
});

function WalletPage() {
  const reservations = useSavora((s) => s.reservations);
  const ahorrado = reservations.reduce(
    (acc, r) => acc + (r.originalPrice - r.pricePaid),
    0,
  );
  const pagado = reservations.reduce((acc, r) => acc + r.pricePaid, 0);

  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="border-b px-5 py-4">
        <h1 className="text-xl font-bold">Mi Billetera</h1>
      </header>

      <div className="px-5 py-6">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground shadow-lg">
          <div className="flex items-center gap-2 text-sm opacity-90">
            <Wallet className="h-4 w-4" /> Total ahorrado
          </div>
          <div className="mt-2 text-5xl font-extrabold bs-tag">
            {ahorrado} <span className="text-2xl">Bs</span>
          </div>
          <div className="mt-1 text-sm opacity-90">
            En {reservations.length} rescate{reservations.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Card label="Total pagado" value={`${pagado} Bs`} />
          <Card label="Total rescates" value={`${reservations.length}`} />
        </div>

        <h2 className="mt-6 text-lg font-bold">Historial</h2>
        <ul className="mt-3 space-y-2">
          {reservations.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm"
            >
              <div>
                <div className="font-medium">{r.packName}</div>
                <div className="text-xs text-muted-foreground">{r.restaurant}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary">
                  +{r.originalPrice - r.pricePaid} Bs
                </div>
                <div className="text-xs text-muted-foreground">ahorrado</div>
              </div>
            </li>
          ))}
          {reservations.length === 0 && (
            <li className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
              Tu historial aparecerá aquí.
            </li>
          )}
        </ul>
      </div>

      <ClientTabBar />
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-xl font-bold bs-tag">{value}</div>
    </div>
  );
}
