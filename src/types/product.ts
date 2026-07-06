/** Enum representing a product type. */
export const ProductType = Object.freeze({
  Book: 0,
  Dice: 1,
  Figurine: 2,
});

export type ProductType = (typeof ProductType)[keyof typeof ProductType];

/** Type representing a product. */
export type Product = {
  id: number;
  name: string;
  img: string;
  type: ProductType;
  price: number;
};
