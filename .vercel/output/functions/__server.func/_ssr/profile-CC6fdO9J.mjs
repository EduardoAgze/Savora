import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ClientTabBar } from "./tab-bar-CANWdFdc.mjs";
import { a as SavoraWordmark } from "./logo-CbDA9jT-.mjs";
import { u as useSavora } from "./store-BJzHqiSc.mjs";
import { T as Trash2, F as Flame, E as Earth, a as Award, h as Leaf } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./data-DuG_PCPS.mjs";
function ProfilePage() {
  const reservations = useSavora((s) => s.reservations);
  const packs = reservations.length + 142;
  const ahorrado = reservations.reduce((acc, r) => acc + (r.originalPrice - r.pricePaid), 850);
  const co2 = reservations.reduce((acc, r) => acc + r.co2Kg, 34);
  const pts = Math.min(1e3, 850 + reservations.length * 50);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary", children: "☰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraWordmark, { size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-muted" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-3xl font-bold text-primary-foreground", children: "HS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 -right-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-secondary-foreground", children: "Lvl 5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-2xl font-bold", children: "Héroe Savora" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Rescatista de alimentos nivel 5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-5 rounded-2xl border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Progreso de impacto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Siguiente nivel: Guardián" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bs-tag font-semibold", children: [
          pts,
          " / 1000 pts"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-primary transition-all", style: {
        width: `${pts / 1e3 * 100}%`
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-3 rounded-2xl border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Packs Rescatados" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-extrabold bs-tag", children: packs })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-3 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Ahorrado", value: `Bs. ${ahorrado}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "CO₂ Evitado", value: `${co2.toFixed(1)} kg` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 px-5 text-lg font-bold", children: "Medallas y Logros" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-6 w-6" }), label: "Rescatista Novato", tone: "secondary", earned: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-6 w-6" }), label: "Defensor Planeta", tone: "primary", earned: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6" }), label: "Racha 7 Días", tone: "muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-6 w-6" }), label: "Eco Master", tone: "muted" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 px-5 text-lg font-bold", children: "Últimos Rescates" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mx-4 mt-3 space-y-2 pb-6", children: [
      reservations.slice(0, 4).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl border bg-card px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.packName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.restaurant })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm font-semibold text-primary", children: [
          "-",
          r.co2Kg,
          " kg CO₂"
        ] })
      ] }, r.id)),
      reservations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoRescue, { title: "Pack Panadería San José", sub: "Ayer, 18:30", kg: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoRescue, { title: "Menú del Día - El Huerto", sub: "12 Oct, 14:15", kg: "0.8" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientTabBar, {})
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-bold bs-tag", children: value })
  ] });
}
function Badge({
  icon,
  label,
  tone,
  earned
}) {
  const bg = tone === "primary" ? "bg-primary/15 text-primary" : tone === "secondary" ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-28 flex-none flex-col items-center gap-2 rounded-2xl p-3 text-center " + (earned ? "" : "opacity-60"), style: {
    backgroundColor: "var(--color-surface-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full " + bg, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium leading-tight", children: label })
  ] });
}
function DemoRescue({
  title,
  sub,
  kg
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl border bg-card px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: sub })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm font-semibold text-primary", children: [
      "-",
      kg,
      " kg CO₂"
    ] })
  ] });
}
export {
  ProfilePage as component
};
