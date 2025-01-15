import { makeProduct } from "@test/factories/product-factory";
import { InMemoryProductRepository } from "@test/repositories/in-memory-product-repository";

describe("Find a product", () => {
  it("should be able to return a product", async () => {
    const ProductsRepository = new InMemoryProductRepository();
    await ProductsRepository.create(makeProduct());
    const product = await ProductsRepository.findByName(makeProduct().name);

    expect(product).toBeTruthy();
    expect(product.name).toEqual(makeProduct().name);
  });
});
