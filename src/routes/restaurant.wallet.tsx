import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, QrCode, Wallet, Check } from "lucide-react";
import { useState } from "react";
import { useSavora, savoraStore } from "@/lib/savora/store";
import { RestaurantTabBar } from "@/components/savora/tab-bar";

export const Route = createFileRoute("/restaurant/wallet")({
  head: () => ({
    meta: [
      { title: "Billetera del restaurante — Savora" },
      { name: "description", content: "Recarga tu saldo prepago de Savora." },
    ],
  }),
  component: RestaurantWalletPage,
});

const PKGS = [
  { id: "b", label: "Paquete Básico", desc: "Aproximadamente 5 ofertas", price: 25 },
  { id: "s", label: "Paquete Estándar", desc: "Aproximadamente 10 ofertas", price: 50, recommended: true },
  { id: "e", label: "Paquete Empresa", desc: "Aproximadamente 25 ofertas", price: 100 },
];

function RestaurantWalletPage() {
  const balance = useSavora((s) => s.walletBs);
  const [sel, setSel] = useState("s");
  const [done, setDone] = useState(false);

  function recharge() {
    const pkg = PKGS.find((p) => p.id === sel);
    if (!pkg) return;
    savoraStore.rechargeWallet(pkg.price);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  }

  return (
    <div className="phone-frame flex min-h-screen flex-col pb-24">
      <header className="flex items-center gap-4 border-b px-5 py-4">
        <button onClick={() => history.back()}>
          <ArrowLeft className="h-5 w-5 text-primary" />
        </button>
        <h1 className="text-lg font-bold text-primary">Mi Billetera</h1>
      </header>

      <div className="px-5 py-5">
        <div className="rounded-2xl bg-muted/60 p-5 text-center">
          <div className="text-sm text-muted-foreground">Saldo Actual</div>
          <div className="mt-1 text-4xl font-extrabold bs-tag text-primary">
            {balance} Bs
          </div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
            <Wallet className="h-3.5 w-3.5" /> Billetera Activa
          </div>
        </div>

        <h2 className="mt-6 text-xl font-bold">Paquetes de Recarga</h2>
        <div className="mt-3 space-y-2">
          {PKGS.map((p) => {
            const on = sel === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSel(p.id)}
                className={
                  "relative flex w-full items-center justify-between rounded-2xl border bg-card p-4 text-left transition " +
                  (on ? "border-secondary ring-2 ring-secondary/40" : "border-border")
                }
              >
                {p.recommended && (
                  <span className="absolute -top-2 right-4 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
                    Recomendado
                  </span>
                )}
                <div>
                  <div className="font-semibold">{p.label}</div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </div>
                <div className={"bs-tag text-2xl font-bold " + (on ? "text-secondary" : "text-primary")}>
                  {p.price} Bs
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-muted/60 p-5">
          <h3 className="text-lg font-bold">Método de Pago</h3>
          <div className="mt-3 flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-xl bg-card">
              <QrCode className="h-32 w-32 text-foreground" />
            </div>
          </div>
          <div className="mt-3 flex items-start gap-2 text-sm">
            <QrCode className="mt-0.5 h-4 w-4 text-secondary" />
            <p className="text-muted-foreground">
              Escanea el QR para completar tu recarga instantáneamente con tu
              aplicación bancaria.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky bottom-16 mx-5 mt-auto rounded-xl">
        <button
          onClick={recharge}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground shadow-md"
        >
          {done ? (
            <>
              <Check className="h-4 w-4" /> Recarga aplicada
            </>
          ) : (
            "Generar Comprobante"
          )}
        </button>
      </div>

      <RestaurantTabBar />
    </div>
  );
}
