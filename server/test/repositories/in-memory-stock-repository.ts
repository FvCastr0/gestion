import { Stock, StockProps } from "@app/entities/Stock";
import { StockRepository } from "@app/repository/stock-repository";
import { ItemAlreadyExist } from "@app/use-cases/stock/errors/item-already-exist";
import { ItemNotFound } from "@app/use-cases/stock/errors/item-not-found";
import { makeStock } from "@test/factories/stock-factory";

export class InMemoryStockRepository implements StockRepository {
  stock: Stock[] = [makeStock({ name: "Rosca doce" })];

  async getAllItemsFromStock(): Promise<Stock[]> {
    return this.stock;
  }

  async findItemByName(itemName: string): Promise<Stock> {
    const findItem = this.stock.find(
      (stockItem) => stockItem.name === itemName,
    );
    return findItem;
  }

  async createItemStock(stockItem: StockProps): Promise<void> {
    if (await this.findItemByName(stockItem.name)) throw new ItemAlreadyExist();
    this.stock.push(
      makeStock({
        name: stockItem.name,
        value: stockItem.value,
        minStock: stockItem.minStock,
        supplier: stockItem.supplier,
      }),
    );

    return;
  }

  async updateItemValue(name: string, value: number): Promise<void> {
    const itemIndex = this.stock.findIndex(
      (stockItem) => stockItem.name === name,
    );
    this.stock[itemIndex].value = value;
    if (itemIndex !== -1) {
    } else throw new ItemNotFound();
  }

  async deleteItemFromStock(name: string): Promise<void> {
    const itemIndex = this.stock.findIndex(
      (stockItem) => stockItem.name === name,
    );

    this.stock.splice(itemIndex, 1);
  }
}
