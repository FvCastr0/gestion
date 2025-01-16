import { Product, ProductProps } from "@app/entities/products";
import { makeStock } from "./stock-factory";

type Overide = Partial<ProductProps>;

export function makeProduct(overide: Overide = {}) {
  return new Product({
    name: "Pão de sal",
    value: 5,
    composition: [
      { amount: 1000, ingredient: makeStock({ name: "Rosca doce" }) },
    ],
    ...overide,
  });
}
