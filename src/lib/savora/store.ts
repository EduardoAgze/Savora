import { useSyncExternalStore } from "react";
import type { Pack } from "./data";
import { currentPrice, PACKS } from "./data";

export interface Reservation {
  id: string;
  code: string;
  packId: string;
  packName: string;
  restaurant: string;
  address: string;
  pricePaid: number;
  originalPrice: number;
  co2Kg: number;
  pickupUntil: string;
  createdAt: number;
  status: "pendiente" | "recogido";
}

export interface Offer {
  id: string;
  name: string;
  quantity: number;
  originalPrice: number;
  aiEnabled: boolean;
  startPrice: number;
  endPrice: number;
  categories: string[];
  image?: string;
  createdAt: number;
}

interface State {
  role: "cliente" | "restaurante" | null;
  authed: boolean;
  reservations: Reservation[];
  walletBs: number; // restaurant wallet
  offers: Offer[];
  restaurantOpen: boolean;
}

const KEY = "savora-state-v1";

function load(): State {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

function defaultState(): State {
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
        createdAt: Date.now() - 3600_000,
      },
    ],
    restaurantOpen: true,
  };
}

let state: State = load();
const listeners = new Set<() => void>();

function persist() {
  if (typeof window !== "undefined") {
    const persistedState: State = {
      ...state,
      offers: state.offers.map((offer) => ({
        id: offer.id,
        name: offer.name,
        quantity: offer.quantity,
        originalPrice: offer.originalPrice,
        aiEnabled: offer.aiEnabled,
        startPrice: offer.startPrice,
        endPrice: offer.endPrice,
        categories: offer.categories,
        createdAt: offer.createdAt,
      })),
    };
    localStorage.setItem(KEY, JSON.stringify(persistedState));
  }
  listeners.forEach((l) => l());
}

function setState(patch: Partial<State> | ((s: State) => Partial<State>)) {
  const p = typeof patch === "function" ? patch(state) : patch;
  state = { ...state, ...p };
  persist();
}

export const savoraStore = {
  get: () => state,
  subscribe: (cb: () => void) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  setRole: (role: State["role"]) => setState({ role }),
  login: () => setState({ authed: true }),
  logout: () => setState({ authed: false, role: null }),
  toggleOpen: () => setState((s) => ({ restaurantOpen: !s.restaurantOpen })),
  rechargeWallet: (amount: number) => setState((s) => ({ walletBs: s.walletBs + amount })),
  addOffer: (o: Omit<Offer, "id" | "createdAt">) =>
    setState((s) => ({
      offers: [{ ...o, id: "o" + (s.offers.length + 1), createdAt: Date.now() }, ...s.offers],
    })),
  reservePack: (pack: Pack): Reservation => {
    const price = currentPrice(pack);
    const code = "SV-" + Math.floor(1000 + Math.random() * 9000).toString();
    const res: Reservation = {
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
      status: "pendiente",
    };
    setState((s) => ({ reservations: [res, ...s.reservations] }));
    return res;
  },
};

export function useSavora<T>(selector: (s: State) => T): T {
  return useSyncExternalStore(
    savoraStore.subscribe,
    () => selector(savoraStore.get()),
    () => selector(defaultState()),
  );
}

// Seed packs export so components can pull
export { PACKS };
