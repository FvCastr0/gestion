import { ProductsRepository } from '@app/repository/product-repository';

export class GetAllProducts {
  constructor(private productsRepository: ProductsRepository) {}
  async execute() {
    const products = await this.productsRepository.getAllProducts();
    return products;
  }
}
