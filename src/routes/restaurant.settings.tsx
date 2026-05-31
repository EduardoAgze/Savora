import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LogOut, Bell, HelpCircle, Globe, ChevronRight } from "lucide-react";
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

      <ul className="flex-1 divide-y px-2">
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
