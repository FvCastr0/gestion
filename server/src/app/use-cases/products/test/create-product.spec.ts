import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductRepository } from '@test/repositories/in-memory-product-repository';
import { InMemoryStockRepository } from '@test/repositories/in-memory-stock-repository';
import { CreateProduct } from '../create-product';

describe('Create Product', () => {
  it('should be able to create a product', async () => {
    const ProductsRepoitory = new InMemoryProductRepository();
    const StockRepository = new InMemoryStockRepository();
    const createProduct = new CreateProduct(ProductsRepoitory, StockRepository);

    await createProduct.execute(makeProduct({ name: 'Pão de forma' }));
    await createProduct.execute(makeProduct());
    const verifyIfExistAnotherProductWithSameName =
      await ProductsRepoitory.findByName(
        makeProduct({ name: 'Pão de forma' }).name,
      );

    expect(ProductsRepoitory.products).toHaveLength(2);
    expect(verifyIfExistAnotherProductWithSameName).toBeTruthy();
  });

  it('should not be able to create a product', async () => {
    const ProductsRepoitory = new InMemoryProductRepository();
    const StockRepository = new InMemoryStockRepository();
    const createProduct = new CreateProduct(ProductsRepoitory, StockRepository);
    const verifyIfExistAnotherProductWithSameName =
      await ProductsRepoitory.findByName(makeProduct().name);

    try {
      await createProduct.execute(makeProduct());
    } catch (error) {
      expect(error).toBe('Esse produto já existe');
    }

    expect(verifyIfExistAnotherProductWithSameName).toBeFalsy();
  });
});
