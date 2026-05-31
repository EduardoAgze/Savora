import { r as reactExports } from "../_libs/react.mjs";
import { c as currentPrice } from "./data-CKnSk_v2.mjs";
const KEY = "savora-state-v1";
function load() {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}
function defaultState() {
  return {
    role: null,
    authed: false,
    reservations: [],
    walletBs: 50,
    offers: [
      {
        id: "o1",
        name: "Pack Lasaña Vegana",
        quantity: 5,
        originalPrice: 38,
        aiEnabled: true,
        startPrice: 20,
        endPrice: 12,
        categories: ["Vegano"],
        createdAt: Date.now() - 36e5
      }
    ],
    restaurantOpen: true
  };
}
let state = load();
const listeners = /* @__PURE__ */ new Set();
function persist() {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  listeners.forEach((l) => l());
}
function setState(patch) {
  const p = typeof patch === "function" ? patch(state) : patch;
  state = { ...state, ...p };
  persist();
}
const savoraStore = {
  get: () => state,
  subscribe: (cb) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  setRole: (role) => setState({ role }),
  login: () => setState({ authed: true }),
  logout: () => setState({ authed: false, role: null }),
  toggleOpen: () => setState((s) => ({ restaurantOpen: !s.restaurantOpen })),
  rechargeWallet: (amount) => setState((s) => ({ walletBs: s.walletBs + amount })),
  addOffer: (o) => setState((s) => ({
    offers: [
      { ...o, id: "o" + (s.offers.length + 1), createdAt: Date.now() },
      ...s.offers
    ]
  })),
  reservePack: (pack) => {
    const price = currentPrice(pack);
    const code = "SV-" + Math.floor(1e3 + Math.random() * 9e3).toString();
    const res = {
      id: "res-" + Date.now(),
      code,
      packId: pack.id,
      packName: pack.name,
      restaurant: pack.restaurant,
      address: pack.address,
      pricePaid: price,
      originalPrice: pack.originalPrice,
      co2Kg: pack.co2Kg,
      pickupUntil: pack.pickupUntil,
      createdAt: Date.now(),
      status: "pendiente"
    };
    setState((s) => ({ reservations: [res, ...s.reservations] }));
    return res;
  }
};
function useSavora(selector) {
  return reactExports.useSyncExternalStore(
    savoraStore.subscribe,
    () => selector(savoraStore.get()),
    () => selector(defaultState())
  );
}
export {
  savoraStore as s,
  useSavora as u
};
