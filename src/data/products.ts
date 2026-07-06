/** Enum representing a product type. */
export const ProductType = Object.freeze({
  Book: 0,
  Dice: 1,
  Accessory: 2,
});

/** Type representing a product. */
export type Product = {
  id: number;
  name: string;
  type: Object;
  price: number;
};

/** Array of products (EXPORT TO JSON LATER FOR BACK-END) */
export const products: Product[] = [
  {
    id: 1,
    name: "DND : Manuel des joueurs (2024)",
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 2,
    name: "DND : Guide du maître (2024)",
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 3,
    name: "DND : Manuel des monstres (2025)",
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 4,
    name: "Set de dés polyédriques version mage",
    type: ProductType.Dice,
    price: 56.28,
  },
  {
    id: 5,
    name: "Set de dés polyédriques version guerrier",
    type: ProductType.Dice,
    price: 53.26,
  },
  {
    id: 6,
    name: "Set de dés polyédriques version rôdeur",
    type: ProductType.Dice,
    price: 54.72,
  },
];
