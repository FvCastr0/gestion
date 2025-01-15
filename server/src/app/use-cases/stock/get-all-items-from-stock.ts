import { Stock } from "@app/entities/Stock";
import { StockRepository } from "@app/repository/stock-repository";
import { ItemNotFound } from "./errors/item-not-found";

interface GetAllItemsFromStockReponse {
  items: Stock[];
}

export class GetAllItemsFromStock {
  constructor(private stockRepository: StockRepository) {}
  async execute(): Promise<GetAllItemsFromStockReponse> {
    const items = await this.stockRepository.getAllItemsFromStock();

    if (items.length === 0) throw new ItemNotFound();

    return { items };
  }
}
