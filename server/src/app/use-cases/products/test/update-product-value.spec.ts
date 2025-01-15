import { makeProduct } from '@test/factories/product-factory';
import { InMemoryProductRepository } from '@test/repositories/in-memory-product-repository';

describe('Update product value', () => {
  it('should be able to update a product value', async () => {
    const ProductRepository = new InMemoryProductRepository();
    const product = makeProduct({ name: 'Pão doce' });

    await ProductRepository.create(product);
    await ProductRepository.findByName(product.name);

    await ProductRepository.updateProductValue(product.name, 5.4);
    expect(ProductRepository.products[0].value).toBe(5.4);
  });
});
