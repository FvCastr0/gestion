import { makeProduct } from '@test/factories/product-factory';
import { makeStock } from '@test/factories/stock-factory';
import { InMemoryStockRepository } from '@test/repositories/in-memory-stock-repository';
import { ItemNotFound } from '../errors/item-not-found';
import { GetStockItem } from '../get-stock-item';

describe('Get stock items', () => {
  it('should not be able return an item', async () => {
    const StockRepository = new InMemoryStockRepository();

    const getStockItem = new GetStockItem(StockRepository).execute({
      itemName: makeProduct().name,
    });

    expect(getStockItem).rejects.toThrow(ItemNotFound);
  });

  it('should be able return an item', async () => {
    const StockRepository = new InMemoryStockRepository();

    await StockRepository.createItemStock(
      makeStock({ name: 'Broa sem farinha' }),
    );

    const getStockItem =
      await StockRepository.findItemByName('Broa sem farinha');

    expect(getStockItem).toBeTruthy();
  });
});
