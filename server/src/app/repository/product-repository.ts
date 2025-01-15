import { Product } from "../entities/products";

export abstract class ProductsRepository {
  abstract findByName(productName: string): Promise<Product>;
  abstract getAllProducts(): Promise<Product[]>;
  abstract create(product: Product): Promise<void>;
  abstract updateProductValue(name: string, value: number): Promise<void>;
}
