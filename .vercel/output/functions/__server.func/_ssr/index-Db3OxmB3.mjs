import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useSavora, s as savoraStore } from "./store-BJzHqiSc.mjs";
import { S as SavoraLogo } from "./logo-CbDA9jT-.mjs";
import { M as Mail, i as Lock } from "../_libs/lucide-react.mjs";
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
function WelcomePage() {
  const navigate = useNavigate();
  const role = useSavora((s) => s.role);
  const [email, setEmail] = reactExports.useState("");
  const [pwd, setPwd] = reactExports.useState("");
  function login(e) {
    e.preventDefault();
    savoraStore.login();
    navigate({
      to: role ? destFor(role) : "/role"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame flex min-h-screen flex-col px-6 pb-10 pt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraLogo, { size: 96 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-center text-3xl font-bold tracking-tight text-primary", children: "Rescate de Alimentos IA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground", children: "Salva comida, ahorra dinero y protege el planeta." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: login, className: "mt-8 rounded-2xl border bg-card p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold", children: "Correo electrónico" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: email, onChange: (e) => setEmail(e.target.value), type: "email", placeholder: "tu@correo.com", className: "w-full bg-transparent outline-none", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mt-4 block text-sm font-semibold", children: "Contraseña" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pwd, onChange: (e) => setPwd(e.target.value), type: "password", placeholder: "••••••••", className: "w-full bg-transparent outline-none", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right text-sm font-medium text-primary", children: "¿Olvidaste tu contraseña?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-4 w-full rounded-xl bg-secondary py-3 font-semibold text-secondary-foreground shadow-sm transition hover:brightness-105", children: "Iniciar Sesión" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/role", onClick: () => savoraStore.login(), className: "mt-2 block rounded-xl border-2 border-primary py-3 text-center font-semibold text-primary", children: "Registrarse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
      "o",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        savoraStore.login();
        navigate({
          to: "/role"
        });
      }, className: "flex w-full items-center justify-center gap-2 rounded-xl border bg-card py-3 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🟢" }),
        " Continuar con Google"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        savoraStore.login();
        navigate({
          to: "/role"
        });
      }, className: "flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3 font-medium text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base" }),
        " Continuar con Apple"
      ] })
    ] })
  ] });
}
function destFor(role) {
  return role === "cliente" ? "/explore" : "/restaurant";
}
export {
  WelcomePage as component
};
