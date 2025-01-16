import { Supplier } from "@app/entities/supplier";
import { SupplierRepository } from "@app/repository/supplier-repository";
import { SupplierAlreadyExist } from "@app/use-cases/supplier/errors/SupplierAlreadyExist";
import { makeSupplier } from "@test/factories/supplier-factory";

export class InMemorySupplierRepository implements SupplierRepository {
  suppliers: Supplier[] = [];

  async getAllSupliers(): Promise<Supplier[]> {
    return this.suppliers;
  }

  async findSupplier(name: string): Promise<Supplier> {
    const supplier = this.suppliers.find((supplier) => supplier.name === name);
    return supplier;
  }

  async createSupplier(supplier: Supplier): Promise<void> {
    if (await this.findSupplier(supplier.name))
      throw new SupplierAlreadyExist();
    this.suppliers.push(
      makeSupplier({
        name: supplier.name,
      }),
    );
    return;
  }

  async deleteSupplier(id: string): Promise<void> {
    const supplierIndex = this.suppliers.findIndex(
      (supplier) => supplier.id === id,
    );

    this.suppliers.splice(supplierIndex, 1);
  }
}
