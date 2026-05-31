import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SavoraWordmark } from "./logo-CbDA9jT-.mjs";
import { R as RestaurantTabBar } from "./tab-bar-DGW1_xeU.mjs";
import { u as useSavora, s as savoraStore } from "./store-BUSeIRgl.mjs";
import { j as Menu, W as Wallet, P as Plus, I as Info, m as ShoppingBag, L as Leaf, c as ChevronRight } from "../_libs/lucide-react.mjs";
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
const fakeReservations = [{
  name: "Juan P.",
  initial: "J",
  pack: "Pack Lasaña Vegana",
  time: "14:30 - 15:00",
  status: "en camino"
}, {
  name: "María G.",
  initial: "M",
  pack: "Pack Ensaladas Mixtas (x2)",
  time: "15:15 - 16:00",
  status: "confirmado"
}, {
  name: "Carlos D.",
  initial: "C",
  pack: "Pack Panadería Dulce",
  time: "17:00 - 17:30",
  status: "confirmado"
}];
function RestaurantDashboard() {
  const wallet = useSavora((s) => s.walletBs);
  const open = useSavora((s) => s.restaurantOpen);
  const offers = useSavora((s) => s.offers);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraWordmark, { size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => savoraStore.toggleOpen(), className: "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold " + (open ? "border-primary text-primary" : "border-border text-muted-foreground"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full " + (open ? "bg-primary" : "bg-muted-foreground") }),
        open ? "Abierto" : "Cerrado"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Hola, Green Bistro 👋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Resumen de actividad para hoy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-4 overflow-hidden rounded-2xl border bg-gradient-to-br from-card to-secondary/10 p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4 text-secondary" }),
        " Saldo actual"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-4xl font-extrabold bs-tag", children: [
        wallet,
        " Bs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/restaurant/wallet", className: "mt-3 flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-secondary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Recargar Crédito"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-3 flex items-start gap-2 rounded-xl bg-accent/60 px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-4 w-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
        "Tus ofertas están visibles hoy. Se han descontado",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "5 Bs" }),
        " de tu saldo operativo."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-3 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5 text-primary" }), value: `${offers.length + 11}`, label: "Packs Hoy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-primary" }), value: "3.2 kg", label: "Salvados" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/restaurant/new-offer", className: "mx-5 mt-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/50 py-3 font-semibold text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Nueva oferta con IA"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mt-5 overflow-hidden rounded-2xl border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: "Reservas para recoger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground", children: "3 pendientes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y", children: fakeReservations.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 font-bold text-primary", children: r.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.pack })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 font-medium " + (r.status === "en camino" ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"), children: r.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-muted-foreground", children: r.time })
        ] })
      ] }, r.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex w-full items-center justify-center gap-1 border-t px-4 py-3 text-sm font-semibold text-primary", children: [
        "Ver todas las reservas ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantTabBar, {})
  ] });
}
function Metric({
  icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-extrabold bs-tag", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
  ] });
}
export {
  RestaurantDashboard as component
};
