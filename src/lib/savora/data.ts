export type Category = "Todos" | "Vegano" | "Vegetariano" | "Postres" | "Cena" | "Panadería" | "Sin TACC";

export interface Pack {
  id: string;
  name: string;
  restaurant: string;
  restaurantId: string;
  address: string;
  distanceKm: number;
  remaining: number;
  originalPrice: number;
  startPrice: number;
  endPrice: number;
  pickupUntil: string; // HH:MM
  category: Category[];
  description: string;
  co2Kg: number;
  image: string;
  tags: string[];
}

// Curve config: prices interpolate from startPrice -> endPrice across the day.
// To make the demo feel alive, currentPrice is computed from the current minute
// of the hour, so it visibly drops over time.
export function currentPrice(p: Pack): number {
  const now = new Date();
  const t = (now.getMinutes() * 60 + now.getSeconds()) / 3600; // 0..1 over an hour
  const price = p.startPrice + (p.endPrice - p.startPrice) * t;
  return Math.round(price);
}

export function nextDropSeconds(): number {
  const now = new Date();
  // drops every 5 minutes for dramatic effect
  const period = 5 * 60;
  const sec = now.getMinutes() * 60 + now.getSeconds();
  return period - (sec % period);
}

export const PACKS: Pack[] = [
  {
    id: "p1",
    name: "Pack Sorpresa Vegetariano",
    restaurant: "Green Bistro",
    restaurantId: "r1",
    address: "Av. Las Condes 1234",
    distanceKm: 0.5,
    remaining: 2,
    originalPrice: 40,
    startPrice: 20,
    endPrice: 12,
    pickupUntil: "22:00",
    category: ["Vegetariano", "Cena"],
    description:
      "Selección de ensaladas frescas y platos del día preparados hoy. Menú vegetariano de temporada, ideal para un almuerzo nutritivo y sostenible.",
    co2Kg: 2.5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
    tags: ["Vegetariano"],
  },
  {
    id: "p2",
    name: "Surtido de Fin de Día",
    restaurant: "La Panadería",
    restaurantId: "r2",
    address: "Calle Bolívar 587",
    distanceKm: 1.2,
    remaining: 4,
    originalPrice: 35,
    startPrice: 15,
    endPrice: 8,
    pickupUntil: "20:30",
    category: ["Panadería"],
    description:
      "Selección sorpresa de panes artesanales, bollería y empanadas horneadas hoy. Lo que no se venda esta noche, lo salvas tú.",
    co2Kg: 1.8,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&auto=format&fit=crop",
    tags: ["Panadería"],
  },
  {
    id: "p3",
    name: "Bandeja Mix 12 piezas",
    restaurant: "Sushi Zen",
    restaurantId: "r3",
    address: "Av. Arce 2233",
    distanceKm: 2.5,
    remaining: 1,
    originalPrice: 70,
    startPrice: 35,
    endPrice: 22,
    pickupUntil: "23:00",
    category: ["Cena"],
    description:
      "Bandeja mixta de sushi preparada hoy con pescado fresco. Combinación de nigiri, maki y uramaki seleccionados por el chef.",
    co2Kg: 3.1,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80&auto=format&fit=crop",
    tags: ["Cena"],
  },
  {
    id: "p4",
    name: "Pack Postres del Día",
    restaurant: "Dulce Hogar",
    restaurantId: "r4",
    address: "Calle 21 #455",
    distanceKm: 0.8,
    remaining: 3,
    originalPrice: 28,
    startPrice: 14,
    endPrice: 9,
    pickupUntil: "21:00",
    category: ["Postres"],
    description:
      "Selección de tartas, brownies y galletas recién horneadas hoy. Sabor pastelería, precio rescate.",
    co2Kg: 1.4,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop",
    tags: ["Postres"],
  },
  {
    id: "p5",
    name: "Bowl Vegano del Día",
    restaurant: "Raíz Verde",
    restaurantId: "r5",
    address: "Av. Camacho 90",
    distanceKm: 1.7,
    remaining: 2,
    originalPrice: 32,
    startPrice: 16,
    endPrice: 10,
    pickupUntil: "21:30",
    category: ["Vegano", "Sin TACC"],
    description:
      "Bowl 100% vegetal con quinoa, vegetales asados y hummus. Apto celíaco. Preparado hoy.",
    co2Kg: 2.0,
    image:
      "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=800&q=80&auto=format&fit=crop",
    tags: ["Vegano", "Sin TACC"],
  },
];

export function findPack(id: string): Pack | undefined {
  return PACKS.find((p) => p.id === id);
}
