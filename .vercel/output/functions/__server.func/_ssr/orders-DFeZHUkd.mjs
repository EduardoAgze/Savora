import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as ClientTabBar } from "./tab-bar-CANWdFdc.mjs";
import { u as useSavora } from "./store-BJzHqiSc.mjs";
import { k as MapPin, f as Clock } from "../_libs/lucide-react.mjs";
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
function OrdersPage() {
  const reservations = useSavora((s) => s.reservations);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Mis Pedidos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        reservations.length,
        " reserva",
        reservations.length === 1 ? "" : "s",
        " activa",
        reservations.length === 1 ? "" : "s"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3 px-4 py-4", children: [
      reservations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed p-8 text-center text-muted-foreground", children: [
        "Aún no tienes reservas.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "font-medium text-primary", children: "Explora packs" }),
        "."
      ] }),
      reservations.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/reservation/$resId", params: {
        resId: r.id
      }, className: "block rounded-2xl border bg-card p-4 transition hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-secondary", children: r.restaurant }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary", children: [
            "#",
            r.code
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: r.packName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            " ",
            r.address
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            " ",
            r.pickupUntil
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm", children: [
          "Pagas",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "bs-tag text-secondary", children: [
            r.pricePaid,
            " Bs"
          ] }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through", children: [
            r.originalPrice,
            " Bs"
          ] })
        ] })
      ] }, r.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientTabBar, {})
  ] });
}
export {
  OrdersPage as component
};
