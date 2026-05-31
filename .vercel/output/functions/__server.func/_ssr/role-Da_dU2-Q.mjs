import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as SavoraLogo } from "./logo-CbDA9jT-.mjs";
import { s as savoraStore } from "./store-BJzHqiSc.mjs";
import { u as UtensilsCrossed, s as Store } from "../_libs/lucide-react.mjs";
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
function RolePage() {
  const navigate = useNavigate();
  function pick(role) {
    savoraStore.setRole(role);
    navigate({
      to: role === "cliente" ? "/explore" : "/restaurant"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col items-center px-6 pb-10 pt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraLogo, { size: 80 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-center text-2xl font-bold", children: "¿Cómo quieres empezar?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-muted-foreground", children: "Elige tu rol para continuar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => pick("cliente"), className: "mt-8 w-full rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: "Soy Cliente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "¿Tienes hambre y quieres ahorrar rescatando comida deliciosa?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-xl bg-secondary py-2.5 text-center font-semibold text-secondary-foreground", children: "Continuar como Cliente" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => pick("restaurante"), className: "mt-4 w-full rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: "Soy Restaurante" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "¿Tienes comida que no vendiste hoy y quieres darle una segunda oportunidad?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-xl bg-primary py-2.5 text-center font-semibold text-primary-foreground", children: "Continuar como Restaurante" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto pt-10 text-center text-[11px] tracking-[0.2em] text-muted-foreground", children: "GREAT FOOD DESERVES ANOTHER CHANCE" })
  ] });
}
export {
  RolePage as component
};
