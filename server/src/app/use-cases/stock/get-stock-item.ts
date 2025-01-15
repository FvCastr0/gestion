import { Stock } from '@app/entities/Stock';
import { StockRepository } from '@app/repository/stock-repository';
import { ItemNotFound } from './errors/item-not-found';

interface GetStockItemRequest {
  itemName: string;
}

type GetStockItemResponse = Stock;

export class GetStockItem {
  constructor(private stockRepository: StockRepository) {}
  async execute(request: GetStockItemRequest): Promise<GetStockItemResponse> {
    const { itemName } = request;

    const item = await this.stockRepository.findItemByName(itemName);

    if (!item) {
      throw new ItemNotFound();
    }

    return item;
  }
}
