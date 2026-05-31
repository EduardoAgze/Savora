import { Link, useLocation } from "@tanstack/react-router";
import { Compass, Receipt, Wallet, User, LayoutDashboard, CalendarCheck, Settings } from "lucide-react";

const tabs = [
  { to: "/explore", label: "Explorar", icon: Compass },
  { to: "/orders", label: "Pedidos", icon: Receipt },
  { to: "/wallet", label: "Billetera", icon: Wallet },
  { to: "/profile", label: "Impacto", icon: User },
] as const;

export function ClientTabBar() {
  const { pathname } = useLocation();
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-20 border-t bg-card/95 backdrop-blur">
      <ul className="grid grid-cols-4">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || pathname.startsWith(to + "/");
          return (
            <li key={to}>
              <Link
                to={to}
                className="flex flex-col items-center gap-1 py-3 text-xs"
              >
                <span
                  className={
                    "flex h-9 w-12 items-center justify-center rounded-full transition " +
                    (active
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground")
                  }
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={
                    active ? "font-semibold text-foreground" : "text-muted-foreground"
                  }
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const rTabs = [
  { to: "/restaurant", label: "Dashboard", icon: LayoutDashboard },
  { to: "/restaurant/reservations", label: "Reservas", icon: CalendarCheck },
  { to: "/restaurant/wallet", label: "Billetera", icon: Wallet },
  { to: "/restaurant/settings", label: "Ajustes", icon: Settings },
] as const;

export function RestaurantTabBar() {
  const { pathname } = useLocation();
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-20 border-t bg-card/95 backdrop-blur">
      <ul className="grid grid-cols-4">
        {rTabs.map(({ to, label, icon: Icon }) => {
          const active =
            to === "/restaurant"
              ? pathname === "/restaurant"
              : pathname.startsWith(to);
          return (
            <li key={to}>
              <Link
                to={to}
                className="flex flex-col items-center gap-1 py-3 text-xs"
              >
                <span
                  className={
                    "flex h-9 w-12 items-center justify-center rounded-full transition " +
                    (active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground")
                  }
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={
                    active ? "font-semibold text-foreground" : "text-muted-foreground"
                  }
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

