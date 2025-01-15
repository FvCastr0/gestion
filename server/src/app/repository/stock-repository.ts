import { Stock, StockProps } from "@app/entities/Stock";

export abstract class StockRepository {
  abstract findItemByName(itemName: string): Promise<Stock>;
  abstract getAllItemsFromStock(): Promise<Stock[]>;
  abstract createItemStock(stockItem: StockProps): Promise<void>;
  abstract deleteItemFromStock(name: string): Promise<void>;
  abstract updateItemValue(id: string, value: number): Promise<void>;
}
