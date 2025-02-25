import { makeStock } from "@test/factories/stock-factory";
import { InMemoryStockRepository } from "@test/repositories/in-memory-stock-repository";
import { InMemorySupplierRepository } from "@test/repositories/in-memory-supplier-repository";
import { AddItemToStock } from "../add-item-to-stock";

describe("Add item to stock", () => {
  it("should be able add an item to stock", async () => {
    const StockRepository = new InMemoryStockRepository();
    const SupplierRepository = new InMemorySupplierRepository();

    await new AddItemToStock(StockRepository, SupplierRepository).execute(
      makeStock({ name: "Farinha de rosca" }),
    );

    expect(StockRepository.stock).toHaveLength(2);
    expect(StockRepository.stock[1].name).toEqual(
      makeStock({ name: "Farinha de rosca" }).name,
    );
  });
});
