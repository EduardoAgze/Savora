import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, Menu, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { SavoraWordmark } from "@/components/savora/logo";
import { PackCard } from "@/components/savora/pack-card";
import { ClientTabBar } from "@/components/savora/tab-bar";
import { PACKS } from "@/lib/savora/data";
import type { Category } from "@/lib/savora/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explorar packs — Savora" },
      {
        name: "description",
        content: "Descubre packs de comida cercanos con precios dinámicos por IA.",
      },
    ],
  }),
  component: ExplorePage,
});

const CATS: Category[] = [
  "Todos",
  "Vegano",
  "Vegetariano",
  "Postres",
  "Cena",
  "Panadería",
  "Sin TACC",
];

function ExplorePage() {
  const [cat, setCat] = useState<Category>("Todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      PACKS.filter(
        (p) =>
          (cat === "Todos" || p.category.includes(cat)) &&
          (q === "" ||
            p.name.toLowerCase().includes(q.toLowerCase()) ||
            p.restaurant.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-4 py-3">
        <Menu className="h-5 w-5" />
        <SavoraWordmark size={32} />
        <SlidersHorizontal className="h-5 w-5" />
      </header>

      {/* Map hero */}
      <div className="relative mx-4 overflow-hidden rounded-2xl bg-accent/60">
        <div
          className="relative h-56 w-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, oklch(0.93 0.07 140 / 0.4), oklch(0.93 0.07 140 / 0)), url('https://api.maptiler.com/maps/streets-v2/static/-68.13,-16.5,13/600x300.png?key=demo')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* faux map fallback */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,oklch(0.92_0.08_140/0.5),transparent_60%),radial-gradient(circle_at_70%_30%,oklch(0.85_0.12_55/0.3),transparent_60%)]" />

          <div className="absolute left-4 right-4 top-4">
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-3 shadow-md">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar comida cerca..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* price pins */}
          <Pin x="20%" y="45%" label={`${PACKS[1].endPrice + 3} Bs`} />
          <Pin x="55%" y="32%" label={`${PACKS[2].endPrice + 2} Bs`} />
          <span
            className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
            style={{ left: "68%", top: "60%" }}
          >
            <MapPin className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-4">
        {CATS.map((c) => {
          const active = c === cat;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                "flex-none rounded-full border px-4 py-1.5 text-sm transition " +
                (active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground")
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      <h2 className="mt-5 px-4 text-xl font-bold">Packs Disponibles</h2>
      <div className="mt-3 flex flex-col gap-3 px-4 pb-6">
        {filtered.map((p) => (
          <PackCard key={p.id} pack={p} />
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No hay packs con esos filtros.
          </p>
        )}
      </div>

      <div className="mt-auto">
        <ClientTabBar />
      </div>
    </div>
  );
}

function Pin({ x, y, label }: { x: string; y: string; label: string }) {
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-secondary bg-card px-3 py-1 text-xs font-bold text-secondary shadow"
      style={{ left: x, top: y }}
    >
      {label}
    </span>
  );
}
