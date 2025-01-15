import { ProductsRepository } from '@app/repository/product-repository';
import { ProductNotFound } from './errors/product-not-found';

interface UpdateProductValueRequest {
  name: string;
  value: number;
}

type UpdateProductValueResponse = void;

export class UpdateProductValue {
  constructor(private productsRepository: ProductsRepository) {}
  async execute({
    name,
    value,
  }: UpdateProductValueRequest): Promise<UpdateProductValueResponse> {
    const product = this.productsRepository.findByName(name);

    if (!product) throw new ProductNotFound();

    await this.productsRepository.updateProductValue(name, value);
  }
}
