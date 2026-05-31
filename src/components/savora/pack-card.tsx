import { Link } from "@tanstack/react-router";
import { MapPin, Clock } from "lucide-react";
import type { Pack } from "@/lib/savora/data";
import { currentPrice } from "@/lib/savora/data";

export function PackCard({ pack }: { pack: Pack }) {
  const price = currentPrice(pack);
  const urgent = pack.remaining <= 1;
  return (
    <Link
      to="/pack/$packId"
      params={{ packId: pack.id }}
      className="flex gap-3 rounded-2xl border bg-card p-3 transition hover:shadow-md"
    >
      <img
        src={pack.image}
        alt={pack.name}
        className="h-24 w-24 flex-none rounded-xl object-cover"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-foreground">{pack.restaurant}</div>
        <div className="truncate text-sm text-muted-foreground">
          {pack.name}
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="bs-tag text-xl font-bold text-secondary">
            {price} Bs
          </span>
          <span className="text-xs text-muted-foreground line-through">
            {pack.originalPrice} Bs
          </span>
        </div>
        <div className="mt-1 flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" /> {pack.distanceKm} km
          </span>
          <span
            className={
              "flex items-center gap-1 " +
              (urgent ? "text-destructive font-medium" : "text-primary")
            }
          >
            <Clock className="h-3 w-3" /> hasta {pack.pickupUntil}
          </span>
        </div>
      </div>
    </Link>
  );
}
