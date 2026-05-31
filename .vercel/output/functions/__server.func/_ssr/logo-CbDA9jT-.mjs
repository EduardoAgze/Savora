import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const logo = "/assets/savora-logo-NF7J7qyC.jpg";
function SavoraLogo({ size = 40, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: logo,
      alt: "Savora Logo",
      width: size,
      height: size,
      className: `select-none rounded-full object-cover flex-none ${className}`,
      style: { width: size, height: size }
    }
  );
}
function SavoraWordmark({ size = 40, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavoraLogo, { size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "font-bold tracking-tight text-primary",
        style: { fontSize: size * 0.6 },
        children: "Savora"
      }
    )
  ] });
}
export {
  SavoraLogo as S,
  SavoraWordmark as a
};
