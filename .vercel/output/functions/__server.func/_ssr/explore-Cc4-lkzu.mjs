import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SavoraWordmark } from "./logo-CbDA9jT-.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PACKS, c as currentPrice } from "./data-CKnSk_v2.mjs";
import { C as ClientTabBar } from "./tab-bar-DGW1_xeU.mjs";
import { j as Menu, n as SlidersHorizontal, S as Search, i as MapPin, e as Clock } from "../_libs/lucide-react.mjs";
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
function PackCard({ pack }) {
  const price = currentPrice(pack);
  const urgent = pack.remaining <= 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/pack/$packId",
      params: { packId: pack.id },
      className: "flex gap-3 rounded-2xl border bg-card p-3 transition hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: pack.image,
            alt: pack.name,
            className: "h-24 w-24 flex-none rounded-xl object-cover",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: pack.restaurant }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm text-muted-foreground", children: pack.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bs-tag text-xl font-bold text-secondary", children: [
              price,
              " Bs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground line-through", children: [
              pack.originalPrice,
              " Bs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              " ",
              pack.distanceKm,
              " km"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "flex items-center gap-1 " + (urgent ? "text-destructive font-medium" : "text-primary"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                  " hasta ",
                  pack.pickupUntil
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CATS = ["Todos", "Vegano", "Vegetariano", "Postres", "Cena", "Panadería", "Sin TACC"];
function ExplorePage() {
  const [cat, setCat] = reactExports.useState("Todos");
  const [q, setQ] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => PACKS.filter((p) => (cat === "Todos" || p.category.includes(cat)) && (q === "" || p.name.toLowerCase().includes(q.toLowerCase()) || p.restaurant.toLowerCase().includes(q.toLowerCase()))), [cat, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraWordmark, { size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-5 w-5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-4 overflow-hidden rounded-2xl bg-accent/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 w-full", style: {
      backgroundImage: "linear-gradient(180deg, oklch(0.93 0.07 140 / 0.4), oklch(0.93 0.07 140 / 0)), url('https://api.maptiler.com/maps/streets-v2/static/-68.13,-16.5,13/600x300.png?key=demo')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,oklch(0.92_0.08_140/0.5),transparent_60%),radial-gradient(circle_at_70%_30%,oklch(0.85_0.12_55/0.3),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 right-4 top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-card px-4 py-3 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar comida cerca...", className: "w-full bg-transparent text-sm outline-none" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { x: "20%", y: "45%", label: `${PACKS[1].endPrice + 3} Bs` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { x: "55%", y: "32%", label: `${PACKS[2].endPrice + 2} Bs` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg", style: {
        left: "68%",
        top: "60%"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-4 flex gap-2 overflow-x-auto px-4", children: CATS.map((c) => {
      const active = c === cat;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: "flex-none rounded-full border px-4 py-1.5 text-sm transition " + (active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"), children: c }, c);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 px-4 text-xl font-bold", children: "Packs Disponibles" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-col gap-3 px-4 pb-6", children: [
      filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PackCard, { pack: p }, p.id)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-10 text-center text-sm text-muted-foreground", children: "No hay packs con esos filtros." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientTabBar, {}) })
  ] });
}
function Pin({
  x,
  y,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-secondary bg-card px-3 py-1 text-xs font-bold text-secondary shadow", style: {
    left: x,
    top: y
  }, children: label });
}
export {
  ExplorePage as component
};
