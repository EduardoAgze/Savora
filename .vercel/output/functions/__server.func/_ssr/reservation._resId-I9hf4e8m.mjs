import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useParams, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useSavora } from "./store-BJzHqiSc.mjs";
import { S as SavoraLogo } from "./logo-CbDA9jT-.mjs";
import { h as Leaf, f as Clock, k as MapPin, N as Navigation } from "../_libs/lucide-react.mjs";
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
function ReservationPage() {
  const {
    resId
  } = useParams({
    from: "/reservation/$resId"
  });
  const res = useSavora((s) => s.reservations.find((r) => r.id === resId));
  if (!res) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame p-10 text-center", children: [
      "Reserva no encontrada.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "text-primary", children: "Volver" })
    ] });
  }
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(res.code)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col items-center px-5 pb-8 pt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraLogo, { size: 56 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-9 w-9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-center text-2xl font-bold text-primary", children: "¡Reserva Exitosa!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-muted-foreground", children: "Has salvado una comida de ser desperdiciada." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 w-full overflow-hidden rounded-2xl border bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-secondary", children: res.restaurant }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-bold", children: res.packName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 border-t pt-4 text-center text-sm text-muted-foreground", children: "Muestra este código al recoger tu pack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-accent/40 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qr, alt: "QR", className: "h-40 w-40" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-muted px-4 py-1 bs-tag font-bold tracking-wider text-primary", children: [
          "#",
          res.code
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-start gap-2 rounded-xl bg-secondary/15 p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 h-4 w-4 text-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-secondary-foreground", children: "Instrucciones de Recogida" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
              "Paga ",
              res.pricePaid,
              " Bs en el local y recoge hoy antes de las",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: res.pickupUntil }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 w-full rounded-2xl border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Ubicación" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 flex-none items-center justify-center rounded-full bg-muted text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: res.restaurant }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: res.address })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-32 rounded-xl bg-[radial-gradient(circle_at_50%_50%,oklch(0.92_0.08_140/0.6),oklch(0.96_0.005_120))]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-4 w-4" }),
        " Cómo llegar"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex w-full flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", className: "rounded-xl border-2 border-primary py-3 text-center font-semibold text-primary", children: "Ver mis pedidos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "py-2 text-center text-sm text-muted-foreground", children: "Volver al inicio" })
    ] })
  ] });
}
export {
  ReservationPage as component
};
