import { Product } from '@app/entities/products';
import { Stock } from '@app/entities/Stock';
import { ProductsRepository } from '@app/repository/product-repository';
import { StockRepository } from '@app/repository/stock-repository';
import { GetStockItem } from '../stock/get-stock-item';

interface CreateProductRequest {
  name: string;
  value: number;
  composition: [{ amount: number; ingredient: Stock }];
}

type CreateProductResponse = void;

export class CreateProduct {
  constructor(
    private productRepository: ProductsRepository,
    private stockRepository: StockRepository,
  ) {}
  async execute(request: CreateProductRequest): Promise<CreateProductResponse> {
    const { name, value, composition } = request;

    const existingProduct = await this.productRepository.findByName(name);

    if (existingProduct !== undefined) {
      throw new Error('Esse produto já existe');
    }
    composition.forEach((item) => {
      new GetStockItem(this.stockRepository).execute({
        itemName: item.ingredient.name,
      });
    });

    const product = new Product({
      name,
      value,
      composition,
    });

    await this.productRepository.create(product);
  }
}
