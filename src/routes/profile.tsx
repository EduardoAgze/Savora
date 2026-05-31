import { createFileRoute } from "@tanstack/react-router";
import { Trash2, Leaf, Flame, Globe2, Award } from "lucide-react";
import { ClientTabBar } from "@/components/savora/tab-bar";
import { SavoraWordmark } from "@/components/savora/logo";
import { useSavora } from "@/lib/savora/store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Mi impacto — Savora" },
      {
        name: "description",
        content: "Mira cuánta comida y CO₂ has salvado con Savora.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const reservations = useSavora((s) => s.reservations);
  const packs = reservations.length + 142;
  const ahorrado = reservations.reduce(
    (acc, r) => acc + (r.originalPrice - r.pricePaid),
    850,
  );
  const co2 = reservations.reduce((acc, r) => acc + r.co2Kg, 34);
  const pts = Math.min(1000, 850 + reservations.length * 50);

  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-5 py-4">
        <span className="text-2xl font-bold text-primary">☰</span>
        <SavoraWordmark size={28} />
        <span className="h-8 w-8 rounded-full bg-muted" />
      </header>

      <div className="flex flex-col items-center px-5">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-3xl font-bold text-primary-foreground">
            HS
          </div>
          <span className="absolute -bottom-1 -right-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-secondary-foreground">
            Lvl 5
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-bold">Héroe Savora</h1>
        <p className="text-sm text-muted-foreground">
          Rescatista de alimentos nivel 5
        </p>
      </div>

      <div className="mx-5 mt-5 rounded-2xl border bg-card p-4">
        <div className="text-xs font-bold uppercase tracking-wider text-primary">
          Progreso de impacto
        </div>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Siguiente nivel: Guardián</span>
          <span className="bs-tag font-semibold">{pts} / 1000 pts</span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(pts / 1000) * 100}%` }}
          />
        </div>
      </div>

      <div className="mx-5 mt-3 rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Packs Rescatados</span>
          <Trash2 className="h-4 w-4 text-primary" />
        </div>
        <div className="mt-1 text-4xl font-extrabold bs-tag">{packs}</div>
      </div>

      <div className="mx-5 mt-3 grid grid-cols-2 gap-3">
        <Stat label="Ahorrado" value={`Bs. ${ahorrado}`} />
        <Stat label="CO₂ Evitado" value={`${co2.toFixed(1)} kg`} />
      </div>

      <h2 className="mt-6 px-5 text-lg font-bold">Medallas y Logros</h2>
      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5">
        <Badge icon={<Flame className="h-6 w-6" />} label="Rescatista Novato" tone="secondary" earned />
        <Badge icon={<Globe2 className="h-6 w-6" />} label="Defensor Planeta" tone="primary" earned />
        <Badge icon={<Award className="h-6 w-6" />} label="Racha 7 Días" tone="muted" />
        <Badge icon={<Leaf className="h-6 w-6" />} label="Eco Master" tone="muted" />
      </div>

      <h2 className="mt-6 px-5 text-lg font-bold">Últimos Rescates</h2>
      <ul className="mx-4 mt-3 space-y-2 pb-6">
        {reservations.slice(0, 4).map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between rounded-xl border bg-card px-4 py-3"
          >
            <div>
              <div className="font-medium">{r.packName}</div>
              <div className="text-xs text-muted-foreground">{r.restaurant}</div>
            </div>
            <div className="text-right text-sm font-semibold text-primary">
              -{r.co2Kg} kg CO₂
            </div>
          </li>
        ))}
        {reservations.length === 0 && (
          <>
            <DemoRescue title="Pack Panadería San José" sub="Ayer, 18:30" kg="1.5" />
            <DemoRescue title="Menú del Día - El Huerto" sub="12 Oct, 14:15" kg="0.8" />
          </>
        )}
      </ul>

      <ClientTabBar />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold bs-tag">{value}</div>
    </div>
  );
}

function Badge({
  icon,
  label,
  tone,
  earned,
}: {
  icon: React.ReactNode;
  label: string;
  tone: "primary" | "secondary" | "muted";
  earned?: boolean;
}) {
  const bg =
    tone === "primary"
      ? "bg-primary/15 text-primary"
      : tone === "secondary"
        ? "bg-secondary/20 text-secondary"
        : "bg-muted text-muted-foreground";
  return (
    <div
      className={
        "flex w-28 flex-none flex-col items-center gap-2 rounded-2xl p-3 text-center " +
        (earned ? "" : "opacity-60")
      }
      style={{ backgroundColor: "var(--color-surface-soft)" }}
    >
      <span className={"flex h-12 w-12 items-center justify-center rounded-full " + bg}>
        {icon}
      </span>
      <span className="text-xs font-medium leading-tight">{label}</span>
    </div>
  );
}

function DemoRescue({ title, sub, kg }: { title: string; sub: string; kg: string }) {
  return (
    <li className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
      <div className="text-right text-sm font-semibold text-primary">-{kg} kg CO₂</div>
    </li>
  );
}
