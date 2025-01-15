import { makeStock } from "@test/factories/stock-factory";
import { InMemoryStockRepository } from "@test/repositories/in-memory-stock-repository";

describe("Update item", () => {
  it("should be able to update an item", async () => {
    const StockRepository = new InMemoryStockRepository();
    const value = 5.53;
    const itemWillBeUpdate = makeStock({ name: "Pão francês" });

    await StockRepository.createItemStock(itemWillBeUpdate);
    await StockRepository.updateItemValue(itemWillBeUpdate.name, value);
    const updatedItem = await StockRepository.findItemByName(
      itemWillBeUpdate.name,
    );
    expect(updatedItem.value).toEqual(value);
  });
});
