import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { s as savoraStore } from "./store-BUSeIRgl.mjs";
import { A as ArrowLeft, C as Camera, o as Sparkles, b as Check, P as Plus, U as Upload } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./data-CKnSk_v2.mjs";
const CATS = ["Vegetariano", "Vegano", "Sin TACC", "Postre", "Cena", "Panadería"];
function NewOfferPage() {
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [qty, setQty] = reactExports.useState(0);
  const [price, setPrice] = reactExports.useState(0);
  const [ai, setAi] = reactExports.useState(true);
  const [cats, setCats] = reactExports.useState(["Vegano"]);
  const curve = reactExports.useMemo(() => {
    if (!price || price < 5) return {
      high: 0,
      mid: 0,
      low: 0
    };
    return {
      high: Math.round(price * 0.55),
      mid: Math.round(price * 0.4),
      low: Math.round(price * 0.28)
    };
  }, [price]);
  function publish(e) {
    e.preventDefault();
    if (!name || qty < 1 || price < 1) return;
    savoraStore.addOffer({
      name,
      quantity: qty,
      originalPrice: price,
      aiEnabled: ai,
      startPrice: curve.high,
      endPrice: curve.low,
      categories: cats
    });
    navigate({
      to: "/restaurant"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: publish, className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-4 border-b px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => history.back(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Nueva Oferta" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 px-5 py-5 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed bg-muted/60 p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: "Subir Foto del Pack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Formato JPG o PNG, máx 5MB" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre del Pack", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Ej. Pack Almuerzo Vegetariano", className: "w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary", required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cantidad Disponible", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 0, value: qty, onChange: (e) => setQty(parseInt(e.target.value) || 0), className: "w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Precio Original (Bs)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 0, step: "0.01", value: price, onChange: (e) => setPrice(parseFloat(e.target.value) || 0), className: "w-full rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border-2 transition " + (ai ? "border-primary/50 bg-card" : "border-border bg-card"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 bg-muted/40 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold leading-tight", children: "Precio Dinámico con IA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Optimiza ventas, minimiza desperdicio." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setAi((v) => !v), className: "relative h-7 w-12 rounded-full transition " + (ai ? "bg-primary" : "bg-muted-foreground/40"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-card transition " + (ai ? "left-[22px] text-primary" : "left-0.5 text-transparent"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }) })
        ] }),
        ai && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nuestra IA ajustará el precio automáticamente a lo largo del día para asegurar que nada se desperdicie antes del cierre." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-muted/60 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 300 80", className: "absolute inset-0 h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 20 Q 150 20 280 65", stroke: "oklch(0.55 0.15 150)", strokeWidth: "2.5", strokeDasharray: "6 4", fill: "none" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { x: "20", y: "20", color: "primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { x: "150", y: "40", color: "secondary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { x: "280", y: "65", color: "destructive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 text-center text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PricePoint, { price: curve.high, time: "12:00 PM", color: "text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PricePoint, { price: curve.mid, time: "16:00 PM", color: "text-secondary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PricePoint, { price: curve.low, time: "20:00 PM", color: "text-destructive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-lg bg-accent/60 p-2 text-xs text-muted-foreground", children: "La IA analiza la demanda histórica y el clima actual para definir la curva de descuento óptima." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Categorías del Pack", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        CATS.map((c) => {
          const on = cats.includes(c);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setCats((cur) => cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]), className: "rounded-full border px-3 py-1.5 text-sm transition " + (on ? "border-primary bg-primary/15 text-primary" : "border-border bg-card text-foreground"), children: [
            on && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1 inline h-3 w-3" }),
            c
          ] }, c);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 border-t bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
      " Publicar Oferta"
    ] }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 block text-sm font-semibold", children: label }),
    children
  ] });
}
function Dot({
  x,
  y,
  color
}) {
  const c = color === "primary" ? "bg-primary" : color === "secondary" ? "bg-secondary" : "bg-destructive";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card ${c}`, style: {
    left: `${parseInt(x) / 300 * 100}%`,
    top: `${parseInt(y) / 80 * 100}%`
  } });
}
function PricePoint({
  price,
  time,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bs-tag font-bold ${color}`, children: [
      price,
      " Bs"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: time })
  ] });
}
export {
  NewOfferPage as component
};
