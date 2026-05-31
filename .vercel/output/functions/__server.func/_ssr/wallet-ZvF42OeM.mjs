import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ClientTabBar } from "./tab-bar-CANWdFdc.mjs";
import { u as useSavora } from "./store-BJzHqiSc.mjs";
import { W as Wallet } from "../_libs/lucide-react.mjs";
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
function WalletPage() {
  const reservations = useSavora((s) => s.reservations);
  const ahorrado = reservations.reduce((acc, r) => acc + (r.originalPrice - r.pricePaid), 0);
  const pagado = reservations.reduce((acc, r) => acc + r.pricePaid, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Mi Billetera" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }),
          " Total ahorrado"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-5xl font-extrabold bs-tag", children: [
          ahorrado,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "Bs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm opacity-90", children: [
          "En ",
          reservations.length,
          " rescate",
          reservations.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { label: "Total pagado", value: `${pagado} Bs` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { label: "Total rescates", value: `${reservations.length}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-lg font-bold", children: "Historial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2", children: [
        reservations.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.packName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.restaurant })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
              "+",
              r.originalPrice - r.pricePaid,
              " Bs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ahorrado" })
          ] })
        ] }, r.id)),
        reservations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground", children: "Tu historial aparecerá aquí." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientTabBar, {})
  ] });
}
function Card({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-bold bs-tag", children: value })
  ] });
}
export {
  WalletPage as component
};
