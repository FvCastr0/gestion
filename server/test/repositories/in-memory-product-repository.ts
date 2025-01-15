import { Product } from "@app/entities/products";
import { ProductsRepository } from "@app/repository/product-repository";
import { ProductNotFound } from "@app/use-cases/products/errors/product-not-found";

export class InMemoryProductRepository implements ProductsRepository {
  products: Product[] = [];
  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }
  async findByName(productName: string): Promise<Product> {
    const product = this.products.find(
      (product) => productName === product.name,
    );

    return Promise.resolve(product);
  }
  async create(product: Product): Promise<void> {
    this.products.push(product);
  }
  async updateProductValue(name: string, value: number): Promise<void> {
    const productIndex = this.products.findIndex(
      (product) => product.name === name,
    );
    this.products[productIndex].value = value;
    if (productIndex !== -1) {
    } else throw new ProductNotFound();
  }
}
