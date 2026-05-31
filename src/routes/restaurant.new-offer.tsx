import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Camera, Sparkles, Plus, Upload, Check, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { savoraStore } from "@/lib/savora/store";

export const Route = createFileRoute("/restaurant/new-offer")({
  head: () => ({
    meta: [
      { title: "Nueva oferta — Savora" },
      { name: "description", content: "Publica un pack de excedentes con precio dinámico por IA." },
    ],
  }),
  component: NewOfferPage,
});

const CATS = ["Vegetariano", "Vegano", "Sin TACC", "Postre", "Cena", "Panadería"];
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

function NewOfferPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [ai, setAi] = useState(true);
  const [cats, setCats] = useState<string[]>(["Vegano"]);
  const [imagePreview, setImagePreview] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState("");

  const curve = useMemo(() => {
    if (!price || price < 5) return { high: 0, mid: 0, low: 0 };
    return {
      high: Math.round(price * 0.55),
      mid: Math.round(price * 0.4),
      low: Math.round(price * 0.28),
    };
  }, [price]);

  function resetImage() {
    setImagePreview("");
    setImageName("");
    setImageError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleImageFile(file?: File) {
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      setImageError("La imagen debe ser JPG o PNG.");
      setImagePreview("");
      setImageName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_BYTES) {
      setImageError("La imagen no puede superar los 5MB.");
      setImagePreview("");
      setImageName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImagePreview(reader.result);
        setImageName(file.name);
        setImageError("");
      }
    };
    reader.onerror = () => {
      setImageError("No se pudo cargar la imagen. Intenta con otra foto.");
      setImagePreview("");
      setImageName("");
    };
    reader.readAsDataURL(file);
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleImageFile(e.target.files?.[0]);
  }

  function publish(e: React.FormEvent) {
    e.preventDefault();
    if (!name || qty < 1 || price < 1) return;
    savoraStore.addOffer({
      name,
      quantity: qty,
      originalPrice: price,
      aiEnabled: ai,
      startPrice: curve.high,
      endPrice: curve.low,
      categories: cats,
      image: imagePreview || undefined,
    });
    toast.success("Comida publicada correctamente", {
      description: `${name} ya está visible como oferta.`,
    });
    navigate({ to: "/restaurant" });
  }

  return (
    <form onSubmit={publish} className="phone-frame flex min-h-screen flex-col">
      <header className="flex items-center gap-4 border-b px-5 py-4">
        <button type="button" onClick={() => history.back()}>
          <ArrowLeft className="h-5 w-5 text-primary" />
        </button>
        <h1 className="text-lg font-bold">Nueva Oferta</h1>
      </header>

      <div className="space-y-5 px-5 py-5 pb-32">
        <div className="space-y-2">
          <label className="group relative block cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed bg-muted/60 text-center transition hover:border-primary/60 hover:bg-accent/40">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleImageChange}
              className="sr-only"
            />
            {imagePreview ? (
              <>
                <img
                  src={imagePreview}
                  alt="Vista previa del pack"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-xl bg-card/95 px-3 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
                  <Camera className="h-4 w-4" />
                  Cambiar foto
                </span>
              </>
            ) : (
              <div className="p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Camera className="h-6 w-6" />
                </div>
                <div className="mt-3 font-semibold">Subir Foto del Pack</div>
                <div className="text-xs text-muted-foreground">Formato JPG o PNG, máx 5MB</div>
              </div>
            )}
          </label>
          {imageName && (
            <div className="flex items-center justify-between gap-3 rounded-xl bg-accent/50 px-3 py-2 text-xs">
              <span className="truncate text-muted-foreground">
                Imagen seleccionada: {imageName}
              </span>
              <button
                type="button"
                onClick={resetImage}
                className="flex flex-none items-center gap-1 font-semibold text-destructive"
              >
                <X className="h-3.5 w-3.5" /> Quitar
              </button>
            </div>
          )}
          {imageError && (
            <p role="alert" className="text-xs font-medium text-destructive">
              {imageError}
            </p>
          )}
        </div>

        <Field label="Nombre del Pack">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Pack Almuerzo Vegetariano"
            className="w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Cantidad Disponible">
            <input
              type="number"
              min={0}
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value) || 0)}
              className="w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
            />
          </Field>
          <Field label="Precio Original (Bs)">
            <input
              type="number"
              min={0}
              step="0.01"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
            />
          </Field>
        </div>

        <div
          className={
            "overflow-hidden rounded-2xl border-2 transition " +
            (ai ? "border-primary/50 bg-card" : "border-border bg-card")
          }
        >
          <div className="flex items-start justify-between gap-3 bg-muted/40 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-lg font-bold leading-tight">Precio Dinámico con IA</div>
                <div className="text-xs text-muted-foreground">
                  Optimiza ventas, minimiza desperdicio.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAi((v) => !v)}
              className={
                "relative h-7 w-12 rounded-full transition " +
                (ai ? "bg-primary" : "bg-muted-foreground/40")
              }
            >
              <span
                className={
                  "absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-card transition " +
                  (ai ? "left-[22px] text-primary" : "left-0.5 text-transparent")
                }
              >
                <Check className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
          {ai && (
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Nuestra IA ajustará el precio automáticamente a lo largo del día para asegurar que
                nada se desperdicie antes del cierre.
              </p>
              <div className="mt-4 rounded-xl bg-muted/60 p-4">
                <div className="relative h-20">
                  <svg viewBox="0 0 300 80" className="absolute inset-0 h-full w-full">
                    <path
                      d="M20 20 Q 150 20 280 65"
                      stroke="oklch(0.55 0.15 150)"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      fill="none"
                    />
                  </svg>
                  <Dot x="20" y="20" color="primary" />
                  <Dot x="150" y="40" color="secondary" />
                  <Dot x="280" y="65" color="destructive" />
                </div>
                <div className="mt-2 grid grid-cols-3 text-center text-sm">
                  <PricePoint price={curve.high} time="12:00 PM" color="text-primary" />
                  <PricePoint price={curve.mid} time="16:00 PM" color="text-secondary" />
                  <PricePoint price={curve.low} time="20:00 PM" color="text-destructive" />
                </div>
                <p className="mt-3 rounded-lg bg-accent/60 p-2 text-xs text-muted-foreground">
                  La IA analiza la demanda histórica y el clima actual para definir la curva de
                  descuento óptima.
                </p>
              </div>
            </div>
          )}
        </div>

        <Field label="Categorías del Pack">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => {
              const on = cats.includes(c);
              return (
                <button
                  type="button"
                  key={c}
                  onClick={() =>
                    setCats((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]))
                  }
                  className={
                    "rounded-full border px-3 py-1.5 text-sm transition " +
                    (on
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-card text-foreground")
                  }
                >
                  {on && <Check className="mr-1 inline h-3 w-3" />}
                  {c}
                </button>
              );
            })}
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </Field>
      </div>

      <div className="sticky bottom-0 border-t bg-card p-4">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground"
        >
          <Upload className="h-4 w-4" /> Publicar Oferta
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

function Dot({
  x,
  y,
  color,
}: {
  x: string;
  y: string;
  color: "primary" | "secondary" | "destructive";
}) {
  const c =
    color === "primary" ? "bg-primary" : color === "secondary" ? "bg-secondary" : "bg-destructive";
  return (
    <span
      className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card ${c}`}
      style={{ left: `${(parseInt(x) / 300) * 100}%`, top: `${(parseInt(y) / 80) * 100}%` }}
    />
  );
}

function PricePoint({ price, time, color }: { price: number; time: string; color: string }) {
  return (
    <div>
      <div className={`bs-tag font-bold ${color}`}>{price} Bs</div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
  );
}
