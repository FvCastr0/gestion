import { Supplier } from "@app/entities/supplier";

export abstract class SupplierRepository {
  abstract getAllSupliers(): Promise<Supplier[]>;
  abstract findSupplier(name: string): Promise<Supplier>;
  abstract createSupplier(name: Supplier): Promise<void>;
  abstract deleteSupplier(id: string): Promise<void>;
}
