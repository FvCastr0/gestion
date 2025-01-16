import { StockRepository } from "@app/repository/stock-repository";
import { ItemAlreadyExist } from "./errors/item-already-exist";

interface AddItemToStockRequest {
  name: string;
  value: number;
  stock: number;
  minStock: number;
  supplier: string;
}

type AddItemToStockResponse = void;

export class AddItemToStock {
  constructor(private stockRepository: StockRepository) {}
  async execute(
    request: AddItemToStockRequest,
  ): Promise<AddItemToStockResponse> {
    const { name, value, stock, minStock, supplier } = request;

    const item = await this.stockRepository.findItemByName(name);

    if (item) throw new ItemAlreadyExist();

    await this.stockRepository.createItemStock({
      name,
      value,
      stock,
      minStock,
      supplier,
    });
  }
}
