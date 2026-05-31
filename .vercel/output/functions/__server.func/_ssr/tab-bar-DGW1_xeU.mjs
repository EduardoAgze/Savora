import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as Compass, R as Receipt, W as Wallet, q as User } from "../_libs/lucide-react.mjs";
const tabs = [
  { to: "/explore", label: "Explorar", icon: Compass },
  { to: "/orders", label: "Pedidos", icon: Receipt },
  { to: "/wallet", label: "Billetera", icon: Wallet },
  { to: "/profile", label: "Impacto", icon: User }
];
function ClientTabBar() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky bottom-0 left-0 right-0 z-20 border-t bg-card/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-4", children: tabs.map(({ to, label, icon: Icon }) => {
    const active = pathname === to || pathname.startsWith(to + "/");
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        className: "flex flex-col items-center gap-1 py-3 text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "flex h-9 w-12 items-center justify-center rounded-full transition " + (active ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: active ? "font-semibold text-foreground" : "text-muted-foreground",
              children: label
            }
          )
        ]
      }
    ) }, to);
  }) }) });
}
const rTabs = [
  { to: "/restaurant", label: "Dashboard" },
  { to: "/restaurant/reservations", label: "Reservas" },
  { to: "/restaurant/wallet", label: "Billetera" },
  { to: "/restaurant/settings", label: "Ajustes" }
];
function RestaurantTabBar() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky bottom-0 left-0 right-0 z-20 border-t bg-card/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-4 text-xs", children: rTabs.map(({ to, label }) => {
    const active = to === "/restaurant" ? pathname === "/restaurant" : pathname.startsWith(to);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        className: "flex flex-col items-center gap-1 py-3 " + (active ? "font-semibold text-primary" : "text-muted-foreground"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "h-1.5 w-8 rounded-full " + (active ? "bg-primary" : "bg-transparent")
            }
          ),
          label
        ]
      }
    ) }, to);
  }) }) });
}
export {
  ClientTabBar as C,
  RestaurantTabBar as R
};
