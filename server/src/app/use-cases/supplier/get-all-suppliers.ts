import { Supplier } from "@app/entities/supplier";
import { SupplierRepository } from "@app/repository/supplier-repository";
import { SupplierNotFound } from "./errors/SupplierNotFound";

interface GetAllSuppliersReponse {
  suppliers: Supplier[];
}

export class GetAllSuppliers {
  constructor(private supplierRepository: SupplierRepository) {}
  async execute(): Promise<GetAllSuppliersReponse> {
    const suppliers = await this.supplierRepository.getAllSupliers();

    if (suppliers.length === 0) throw new SupplierNotFound();

    return { suppliers };
  }
}
