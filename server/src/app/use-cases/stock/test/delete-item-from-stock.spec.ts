import { makeStock } from "@test/factories/stock-factory";
import { InMemoryStockRepository } from "@test/repositories/in-memory-stock-repository";

describe("Delete item", () => {
  it("should be able to delete an item", async () => {
    const StockRepository = new InMemoryStockRepository();

    await StockRepository.createItemStock(makeStock({ name: "pão de forma" }));

    await StockRepository.deleteItemFromStock(
      makeStock({ name: "pão de forma" }).name,
    );

    expect(StockRepository.stock).toHaveLength(1);
  });
});
