import { makeStock } from '@test/factories/stock-factory';
import { Stock } from '../Stock';

describe('Stock', () => {
  it('should be able to create a stock', () => {
    const stock = new Stock(makeStock());

    expect(stock).toBeTruthy();
  });
});
