import { InMemoryStockRepository } from "@test/repositories/in-memory-stock-repository";

describe("Get all items from stock", () => {
  it("should return all items there is on stock", async () => {
    const StockRepository = new InMemoryStockRepository();

    const items = await StockRepository.getAllItemsFromStock();

    expect(items).toHaveLength(1);
  });
});
