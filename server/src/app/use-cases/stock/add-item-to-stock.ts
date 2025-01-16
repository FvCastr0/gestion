import { Supplier } from "@app/entities/supplier";
import { StockRepository } from "@app/repository/stock-repository";
import { SupplierRepository } from "@app/repository/supplier-repository";
import { ItemAlreadyExist } from "./errors/item-already-exist";

interface AddItemToStockRequest {
  name: string;
  value: number;
  stock: number;
  minStock: number;
  supplier: Supplier;
}

type AddItemToStockResponse = void;

export class AddItemToStock {
  constructor(
    private stockRepository: StockRepository,
    private supplierRepository: SupplierRepository,
  ) {}
  async execute(
    request: AddItemToStockRequest,
  ): Promise<AddItemToStockResponse> {
    const { name, value, stock, minStock, supplier } = request;

    const item = await this.stockRepository.findItemByName(name);

    if (item) throw new ItemAlreadyExist();
    await this.supplierRepository.findSupplier(supplier.name);

    await this.stockRepository.createItemStock({
      name,
      value,
      stock,
      minStock,
      supplier,
    });
  }
}
