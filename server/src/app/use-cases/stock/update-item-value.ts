import { StockRepository } from '@app/repository/stock-repository';
import { ItemNotFound } from './errors/item-not-found';

interface UpdateItemValueRequest {
  name: string;
  value: number;
}

type UpdateItemValueResponse = void;

export class UpdateItemValue {
  constructor(private stockRepository: StockRepository) {}
  async execute({
    name,
    value,
  }: UpdateItemValueRequest): Promise<UpdateItemValueResponse> {
    const item = await this.stockRepository.findItemByName(name);

    if (!item) throw new ItemNotFound();

    await this.stockRepository.updateItemValue(name, value);
  }
}
