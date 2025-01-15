import { StockRepository } from '@app/repository/stock-repository';
import { ItemNotFound } from './errors/item-not-found';

interface DeleteItemFromStockRequest {
  name: string;
}

type DeleteItemFromStockResponse = void;

export class DeleteItemFromStock {
  constructor(private stockRepository: StockRepository) {}
  async execute({
    name,
  }: DeleteItemFromStockRequest): Promise<DeleteItemFromStockResponse> {
    const stockItem = await this.stockRepository.findItemByName(name);

    if (!stockItem) throw new ItemNotFound();

    await this.stockRepository.deleteItemFromStock(name);
    return;
  }
}
