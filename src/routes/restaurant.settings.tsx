import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LogOut, Bell, HelpCircle, Globe, ChevronRight, Store } from "lucide-react";
import { RestaurantTabBar } from "@/components/savora/tab-bar";
import { savoraStore } from "@/lib/savora/store";

export const Route = createFileRoute("/restaurant/settings")({
  head: () => ({
    meta: [
      { title: "Ajustes — Savora" },
      { name: "description", content: "Ajustes del restaurante." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const navigate = useNavigate();
  return (
    <div className="phone-frame flex min-h-screen flex-col">
      <header className="border-b px-5 py-4">
        <h1 className="text-xl font-bold">Ajustes</h1>
      </header>

      <div className="mx-5 mt-4 flex items-center gap-3 rounded-2xl border bg-card p-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Store className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Perfil del restaurante
          </p>
          <h2 className="text-lg font-bold">NutriDeli</h2>
        </div>
      </div>

      <ul className="mt-4 flex-1 divide-y px-2">
        <Row icon={<Bell className="h-5 w-5 text-primary" />} label="Notificaciones" />
        <Row icon={<Globe className="h-5 w-5 text-primary" />} label="Idioma · Español" />
        <Row icon={<HelpCircle className="h-5 w-5 text-primary" />} label="Centro de ayuda" />
      </ul>

      <div className="p-4">
        <button
          onClick={() => {
            savoraStore.logout();
            navigate({ to: "/" });
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-destructive py-3 font-semibold text-destructive"
        >
          <LogOut className="h-4 w-4" /> Cerrar sesión
        </button>
      </div>

      <RestaurantTabBar />
    </div>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-3 px-3 py-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </span>
      <span className="flex-1 font-medium">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </li>
  );
}
