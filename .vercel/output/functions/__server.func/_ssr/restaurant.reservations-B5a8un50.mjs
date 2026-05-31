import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as RestaurantTabBar } from "./tab-bar-CANWdFdc.mjs";
import { u as useSavora } from "./store-BJzHqiSc.mjs";
import { t as User, f as Clock } from "../_libs/lucide-react.mjs";
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
const seed = [{
  name: "Juan P.",
  pack: "Pack Lasaña Vegana",
  time: "14:30 - 15:00",
  code: "SV-2341",
  status: "en camino"
}, {
  name: "María G.",
  pack: "Pack Ensaladas Mixtas (x2)",
  time: "15:15 - 16:00",
  code: "SV-2342",
  status: "confirmado"
}, {
  name: "Carlos D.",
  pack: "Pack Panadería Dulce",
  time: "17:00 - 17:30",
  code: "SV-2343",
  status: "confirmado"
}];
function ReservationsPage() {
  const mine = useSavora((s) => s.reservations);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Reservas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        seed.length + mine.length,
        " pendientes"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex-1 space-y-3 px-4 py-4", children: [...mine.map((r) => ({
      name: "Cliente",
      pack: r.packName,
      time: r.pickupUntil,
      code: r.code,
      status: "confirmado"
    })), ...seed].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-2xl border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.pack })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary", children: [
          "#",
          r.code
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
          " ",
          r.time
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary", children: r.status })
      ] })
    ] }, r.code)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantTabBar, {})
  ] });
}
export {
  ReservationsPage as component
};
