import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useParams, d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as findPack, c as currentPrice, n as nextDropSeconds } from "./data-CKnSk_v2.mjs";
import { s as savoraStore } from "./store-BUSeIRgl.mjs";
import { A as ArrowLeft, l as Share2, L as Leaf, Z as Zap, m as ShoppingBag, i as MapPin, o as Sparkles, e as Clock, k as Recycle } from "../_libs/lucide-react.mjs";
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
function PackDetailPage() {
  const {
    packId
  } = useParams({
    from: "/pack/$packId"
  });
  const pack = findPack(packId);
  const navigate = useNavigate();
  const [, force] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const i = setInterval(() => force((x) => x + 1), 1e3);
    return () => clearInterval(i);
  }, []);
  if (!pack) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame p-10 text-center", children: [
      "Pack no encontrado.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "text-primary", children: "Volver" })
    ] });
  }
  const price = currentPrice(pack);
  const discount = Math.round((pack.originalPrice - price) / pack.originalPrice * 100);
  const drop = nextDropSeconds();
  const mm = String(Math.floor(drop / 60)).padStart(2, "0");
  const ss = String(drop % 60).padStart(2, "0");
  function reserve() {
    const res = savoraStore.reservePack(pack);
    navigate({
      to: "/reservation/$resId",
      params: {
        resId: res.id
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => history.back(), "aria-label": "Atrás", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Detalle del Pack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Compartir", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-5 w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pack.image, alt: pack.name, className: "h-64 w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 flex gap-2", children: [
        pack.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-card/95 px-3 py-1 text-xs font-medium text-primary shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-3 w-3" }),
          " ",
          t
        ] }, t)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-card/95 px-3 py-1 text-xs font-medium shadow", children: [
          "Quedan ",
          pack.remaining
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 rounded-t-3xl bg-background -mt-4 relative px-5 pb-32 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: pack.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-secondary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
          " -",
          discount,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
        " ",
        pack.restaurant
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between border-y py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: pack.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "A ",
              pack.distanceKm,
              " km de ti"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm font-semibold text-primary", children: "Ver mapa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 overflow-hidden rounded-2xl border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-secondary" }),
            " Precio dinámico con IA"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bs-tag text-4xl font-extrabold text-secondary", children: [
              price,
              " Bs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through", children: [
              pack.originalPrice,
              " Bs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-1 rounded-lg bg-destructive/10 px-3 py-1.5 text-sm text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            " El precio bajará de nuevo en",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "ml-1 bs-tag", children: [
              mm,
              ":",
              ss
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-lg font-bold", children: "¿Qué incluye?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 leading-relaxed text-muted-foreground", children: pack.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 rounded-2xl bg-accent/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Recycle, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-primary", children: "Impacto Positivo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "Al salvar este pack, evitas ",
            pack.co2Kg,
            " kg de CO₂eq."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 border-t bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reserve, className: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground shadow-md transition hover:brightness-105", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
      " Reservar Ahora · ",
      price,
      " Bs"
    ] }) })
  ] });
}
export {
  PackDetailPage as component
};
