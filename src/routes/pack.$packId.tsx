import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Share2, MapPin, Clock, Recycle, Sparkles, Zap, ShoppingBag, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { currentPrice, findPack, nextDropSeconds } from "@/lib/savora/data";
import { savoraStore } from "@/lib/savora/store";

export const Route = createFileRoute("/pack/$packId")({
  head: ({ params }) => ({
    meta: [
      { title: `Pack ${params.packId} — Savora` },
      { name: "description", content: "Detalle del pack de comida rescatada." },
    ],
  }),
  notFoundComponent: () => (
    <div className="phone-frame p-10 text-center">Pack no encontrado.</div>
  ),
  component: PackDetailPage,
});

function PackDetailPage() {
  const { packId } = useParams({ from: "/pack/$packId" });
  const pack = findPack(packId);
  const navigate = useNavigate();
  const [, force] = useState(0);
  useEffect(() => {
    const i = setInterval(() => force((x) => x + 1), 1000);
    return () => clearInterval(i);
  }, []);

  if (!pack) {
    return (
      <div className="phone-frame p-10 text-center">
        Pack no encontrado.{" "}
        <Link to="/explore" className="text-primary">
          Volver
        </Link>
      </div>
    );
  }

  const price = currentPrice(pack);
  const discount = Math.round(((pack.originalPrice - price) / pack.originalPrice) * 100);
  const drop = nextDropSeconds();
  const mm = String(Math.floor(drop / 60)).padStart(2, "0");
  const ss = String(drop % 60).padStart(2, "0");

  function reserve() {
    const res = savoraStore.reservePack(pack!);
    navigate({ to: "/reservation/$resId", params: { resId: res.id } });
  }

  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-4 py-3">
        <button onClick={() => history.back()} aria-label="Atrás">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className="font-semibold">Detalle del Pack</span>
        <button aria-label="Compartir">
          <Share2 className="h-5 w-5" />
        </button>
      </header>

      <div className="relative">
        <img src={pack.image} alt={pack.name} className="h-64 w-full object-cover" />
        <div className="absolute left-4 top-4 flex gap-2">
          {pack.tags.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 rounded-full bg-card/95 px-3 py-1 text-xs font-medium text-primary shadow"
            >
              <Leaf className="h-3 w-3" /> {t}
            </span>
          ))}
          <span className="rounded-full bg-card/95 px-3 py-1 text-xs font-medium shadow">
            Quedan {pack.remaining}
          </span>
        </div>
      </div>

      <div className="flex-1 rounded-t-3xl bg-background -mt-4 relative px-5 pb-32 pt-6">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-2xl font-bold">{pack.name}</h1>
          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-secondary-foreground">
            <Zap className="h-3 w-3" /> -{discount}%
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1 text-muted-foreground">
          <ShoppingBag className="h-4 w-4" /> {pack.restaurant}
        </p>

        <div className="mt-4 flex items-center justify-between border-y py-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <div className="text-sm font-medium">{pack.address}</div>
              <div className="text-xs text-muted-foreground">
                A {pack.distanceKm} km de ti
              </div>
            </div>
          </div>
          <button className="text-sm font-semibold text-primary">Ver mapa</button>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-2xl border bg-card p-4">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/30" />
          <div className="relative">
            <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-secondary" /> Precio dinámico con IA
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="bs-tag text-4xl font-extrabold text-secondary">
                {price} Bs
              </span>
              <span className="text-muted-foreground line-through">
                {pack.originalPrice} Bs
              </span>
            </div>
            <p className="mt-2 flex items-center gap-1 rounded-lg bg-destructive/10 px-3 py-1.5 text-sm text-destructive">
              <Clock className="h-4 w-4" /> El precio bajará de nuevo en{" "}
              <strong className="ml-1 bs-tag">
                {mm}:{ss}
              </strong>
            </p>
          </div>
        </div>

        <h2 className="mt-6 text-lg font-bold">¿Qué incluye?</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">{pack.description}</p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-accent/60 p-4">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Recycle className="h-6 w-6" />
          </span>
          <div>
            <div className="font-semibold text-primary">Impacto Positivo</div>
            <div className="text-sm text-muted-foreground">
              Al salvar este pack, evitas {pack.co2Kg} kg de CO₂eq.
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 border-t bg-card p-4">
        <button
          onClick={reserve}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground shadow-md transition hover:brightness-105"
        >
          <ShoppingBag className="h-4 w-4" /> Reservar Ahora · {price} Bs
        </button>
      </div>
    </div>
  );
}
