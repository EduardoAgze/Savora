import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, f as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-Bmi5mjrC.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Savora — Rescate de Alimentos IA" },
      {
        name: "description",
        content: "Salva comida, ahorra dinero y protege el planeta. Conectamos restaurantes con personas usando precios dinámicos por IA."
      },
      { name: "author", content: "Savora" },
      { property: "og:title", content: "Savora — Rescate de Alimentos IA" },
      {
        property: "og:description",
        content: "Great food deserves another chance."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Savora — Rescate de Alimentos IA" },
      { name: "description", content: "Zip Reality Maker creates a functional web application from a provided ZIP file." },
      { property: "og:description", content: "Zip Reality Maker creates a functional web application from a provided ZIP file." },
      { name: "twitter:description", content: "Zip Reality Maker creates a functional web application from a provided ZIP file." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ea276f13-d3ed-4613-8fd9-9b6d6a5747b9/id-preview-b10c6f9c--cce8ef87-1a21-438e-b03b-41e753e24797.lovable.app-1780206570645.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ea276f13-d3ed-4613-8fd9-9b6d6a5747b9/id-preview-b10c6f9c--cce8ef87-1a21-438e-b03b-41e753e24797.lovable.app-1780206570645.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./wallet-ZvF42OeM.mjs");
const Route$d = createFileRoute("/wallet")({
  head: () => ({
    meta: [{
      title: "Billetera — Savora"
    }, {
      name: "description",
      content: "Tu ahorro acumulado en Savora."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const BASE_URL = "";
const Route$c = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/role", priority: "0.8" },
          { path: "/explore", priority: "0.9" },
          { path: "/orders", priority: "0.6" },
          { path: "/wallet", priority: "0.6" },
          { path: "/profile", priority: "0.6" },
          { path: "/restaurant", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$b = () => import("./role-Da_dU2-Q.mjs");
const Route$b = createFileRoute("/role")({
  head: () => ({
    meta: [{
      title: "Elige tu rol — Savora"
    }, {
      name: "description",
      content: "Cliente o restaurante: empieza a rescatar comida."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./profile-CC6fdO9J.mjs");
const Route$a = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Mi impacto — Savora"
    }, {
      name: "description",
      content: "Mira cuánta comida y CO₂ has salvado con Savora."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./orders-DFeZHUkd.mjs");
const Route$9 = createFileRoute("/orders")({
  head: () => ({
    meta: [{
      title: "Mis pedidos — Savora"
    }, {
      name: "description",
      content: "Tus reservas activas en Savora."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./explore-mFVt3M7h.mjs");
const Route$8 = createFileRoute("/explore")({
  head: () => ({
    meta: [{
      title: "Explorar packs — Savora"
    }, {
      name: "description",
      content: "Descubre packs de comida cercanos con precios dinámicos por IA."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-Db3OxmB3.mjs");
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Savora — Salva comida, ahorra dinero, protege el planeta"
    }, {
      name: "description",
      content: "Savora conecta restaurantes con personas para rescatar excedentes con precios dinámicos por IA."
    }, {
      property: "og:title",
      content: "Savora"
    }, {
      property: "og:description",
      content: "Great food deserves another chance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./restaurant.index-82Surgz-.mjs");
const Route$6 = createFileRoute("/restaurant/")({
  head: () => ({
    meta: [{
      title: "Dashboard restaurante — Savora"
    }, {
      name: "description",
      content: "Gestiona tus excedentes y reservas con Savora."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./restaurant.wallet-DxfxXAju.mjs");
const Route$5 = createFileRoute("/restaurant/wallet")({
  head: () => ({
    meta: [{
      title: "Billetera del restaurante — Savora"
    }, {
      name: "description",
      content: "Recarga tu saldo prepago de Savora."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./restaurant.settings-B6ZwP1M-.mjs");
const Route$4 = createFileRoute("/restaurant/settings")({
  head: () => ({
    meta: [{
      title: "Ajustes — Savora"
    }, {
      name: "description",
      content: "Ajustes del restaurante."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./restaurant.reservations-B5a8un50.mjs");
const Route$3 = createFileRoute("/restaurant/reservations")({
  head: () => ({
    meta: [{
      title: "Reservas — Savora"
    }, {
      name: "description",
      content: "Reservas activas de tu restaurante."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./restaurant.new-offer-DT9Nz3v8.mjs");
const Route$2 = createFileRoute("/restaurant/new-offer")({
  head: () => ({
    meta: [{
      title: "Nueva oferta — Savora"
    }, {
      name: "description",
      content: "Publica un pack de excedentes con precio dinámico por IA."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./reservation._resId-I9hf4e8m.mjs");
const Route$1 = createFileRoute("/reservation/$resId")({
  head: () => ({
    meta: [{
      title: "Reserva confirmada — Savora"
    }, {
      name: "description",
      content: "Tu pack está reservado. Recógelo a tiempo."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./pack._packId-D13UZhcD.mjs");
const $$splitNotFoundComponentImporter = () => import("./pack._packId-CIGTo-XM.mjs");
const Route = createFileRoute("/pack/$packId")({
  head: ({
    params
  }) => ({
    meta: [{
      title: `Pack ${params.packId} — Savora`
    }, {
      name: "description",
      content: "Detalle del pack de comida rescatada."
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WalletRoute = Route$d.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => Route$e
});
const SitemapDotxmlRoute = Route$c.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$e
});
const RoleRoute = Route$b.update({
  id: "/role",
  path: "/role",
  getParentRoute: () => Route$e
});
const ProfileRoute = Route$a.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$e
});
const OrdersRoute = Route$9.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => Route$e
});
const ExploreRoute = Route$8.update({
  id: "/explore",
  path: "/explore",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const RestaurantIndexRoute = Route$6.update({
  id: "/restaurant/",
  path: "/restaurant/",
  getParentRoute: () => Route$e
});
const RestaurantWalletRoute = Route$5.update({
  id: "/restaurant/wallet",
  path: "/restaurant/wallet",
  getParentRoute: () => Route$e
});
const RestaurantSettingsRoute = Route$4.update({
  id: "/restaurant/settings",
  path: "/restaurant/settings",
  getParentRoute: () => Route$e
});
const RestaurantReservationsRoute = Route$3.update({
  id: "/restaurant/reservations",
  path: "/restaurant/reservations",
  getParentRoute: () => Route$e
});
const RestaurantNewOfferRoute = Route$2.update({
  id: "/restaurant/new-offer",
  path: "/restaurant/new-offer",
  getParentRoute: () => Route$e
});
const ReservationResIdRoute = Route$1.update({
  id: "/reservation/$resId",
  path: "/reservation/$resId",
  getParentRoute: () => Route$e
});
const PackPackIdRoute = Route.update({
  id: "/pack/$packId",
  path: "/pack/$packId",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  ExploreRoute,
  OrdersRoute,
  ProfileRoute,
  RoleRoute,
  SitemapDotxmlRoute,
  WalletRoute,
  PackPackIdRoute,
  ReservationResIdRoute,
  RestaurantNewOfferRoute,
  RestaurantReservationsRoute,
  RestaurantSettingsRoute,
  RestaurantWalletRoute,
  RestaurantIndexRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
