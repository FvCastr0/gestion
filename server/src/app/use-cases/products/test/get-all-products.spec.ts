import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductRepository } from '@test/repositories/in-memory-product-repository';

describe('Get all products', () => {
  it('should be able to return all products', async () => {
    const ProductsRepository = new InMemoryProductRepository();
    await ProductsRepository.create(makeProduct());
    const products = await ProductsRepository.getAllProducts();

    expect(products).toHaveLength(1);
  });
});
