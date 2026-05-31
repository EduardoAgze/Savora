import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useSavora, s as savoraStore } from "./store-BUSeIRgl.mjs";
import { R as RestaurantTabBar } from "./tab-bar-DGW1_xeU.mjs";
import { A as ArrowLeft, W as Wallet, Q as QrCode, b as Check } from "../_libs/lucide-react.mjs";
import "./data-CKnSk_v2.mjs";
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
const PKGS = [{
  id: "b",
  label: "Paquete Básico",
  desc: "Aproximadamente 5 ofertas",
  price: 25
}, {
  id: "s",
  label: "Paquete Estándar",
  desc: "Aproximadamente 10 ofertas",
  price: 50,
  recommended: true
}, {
  id: "e",
  label: "Paquete Empresa",
  desc: "Aproximadamente 25 ofertas",
  price: 100
}];
function RestaurantWalletPage() {
  const balance = useSavora((s) => s.walletBs);
  const [sel, setSel] = reactExports.useState("s");
  const [done, setDone] = reactExports.useState(false);
  function recharge() {
    const pkg = PKGS.find((p) => p.id === sel);
    if (!pkg) return;
    savoraStore.rechargeWallet(pkg.price);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-4 border-b px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => history.back(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold text-primary", children: "Mi Billetera" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/60 p-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Saldo Actual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-4xl font-extrabold bs-tag text-primary", children: [
          balance,
          " Bs"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5" }),
          " Billetera Activa"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-xl font-bold", children: "Paquetes de Recarga" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: PKGS.map((p) => {
        const on = sel === p.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSel(p.id), className: "relative flex w-full items-center justify-between rounded-2xl border bg-card p-4 text-left transition " + (on ? "border-secondary ring-2 ring-secondary/40" : "border-border"), children: [
          p.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 right-4 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground", children: "Recomendado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: p.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bs-tag text-2xl font-bold " + (on ? "text-secondary" : "text-primary"), children: [
            p.price,
            " Bs"
          ] })
        ] }, p.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-muted/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Método de Pago" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-44 w-44 items-center justify-center rounded-xl bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-32 w-32 text-foreground" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "mt-0.5 h-4 w-4 text-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Escanea el QR para completar tu recarga instantáneamente con tu aplicación bancaria." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-16 mx-5 mt-auto rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: recharge, className: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground shadow-md", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
      " Recarga aplicada"
    ] }) : "Generar Comprobante" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantTabBar, {})
  ] });
}
export {
  RestaurantWalletPage as component
};
