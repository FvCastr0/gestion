import { makeStock } from "@test/factories/stock-factory";
import { Product } from "../products";

describe("Product", () => {
  it("should be able to create a product", () => {
    const product = new Product({
      name: "Farinha",
      composition: [{ amount: 1000, ingredient: makeStock() }],
      value: 10,
    });

    expect(product).toBeTruthy();
  });
});
