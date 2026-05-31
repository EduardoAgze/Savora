import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { R as RestaurantTabBar } from "./tab-bar-DGW1_xeU.mjs";
import { s as savoraStore } from "./store-BUSeIRgl.mjs";
import { B as Bell, G as Globe, d as CircleQuestionMark, h as LogOut, c as ChevronRight } from "../_libs/lucide-react.mjs";
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
function SettingsPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Ajustes" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex-1 divide-y px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-primary" }), label: "Notificaciones" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-primary" }), label: "Idioma · Español" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5 text-primary" }), label: "Centro de ayuda" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      savoraStore.logout();
      navigate({
        to: "/"
      });
    }, className: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-destructive py-3 font-semibold text-destructive", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
      " Cerrar sesión"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantTabBar, {})
  ] });
}
function Row({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 px-3 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
  ] });
}
export {
  SettingsPage as component
};
