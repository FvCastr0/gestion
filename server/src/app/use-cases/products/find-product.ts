import { Product } from "@app/entities/products";
import { ProductsRepository } from "@app/repository/product-repository";
import { ItemNotFound } from "../stock/errors/item-not-found";

interface FindProductRequest {
  name: string;
}

interface FindProductResponse {
  item: Product;
}

export class FindProduct {
  constructor(private productsRepository: ProductsRepository) {}
  async execute({ name }: FindProductRequest): Promise<FindProductResponse> {
    const item = await this.productsRepository.findByName(name);

    if (!item) throw new ItemNotFound();

    return { item };
  }
}
