export interface Product {
  model: string;
  brand: string;
  order: number;
  serial: string;
}

export const mockProducts: Product[] = [
  {
    model: "Sandman S",
    brand: "DA",
    order: 32768,
    serial: "DA5"
  },
  {
    model: "Trash Panda",
    brand: "Q",
    order: 16384,
    serial: "QPT123"
  },
  {
    model: "Obsidian 45",
    brand: "Rugged",
    order: 8192,
    serial: "OBS45-12345"
  }
];
