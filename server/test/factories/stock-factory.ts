import { Stock, StockProps } from '@app/entities/Stock';

type Overide = Partial<StockProps>;

export function makeStock(overide: Overide = {}) {
  return new Stock({
    name: 'Farinha',
    value: 10,
    stock: 10000,
    minStock: 1000,
    supplier: 'Example',
    ...overide,
  });
}
