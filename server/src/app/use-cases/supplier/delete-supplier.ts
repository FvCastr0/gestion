import { SupplierRepository } from "@app/repository/supplier-repository";
import { SupplierNotFound } from "./errors/SupplierNotFound";

interface DeleteSupplierRequest {
  name: string;
}

type DeleteSupplierResponse = void;

export class DeleteSupplier {
  constructor(private supplierRepository: SupplierRepository) {}
  async execute({
    name,
  }: DeleteSupplierRequest): Promise<DeleteSupplierResponse> {
    const supplier = await this.supplierRepository.findSupplier(name);

    if (!supplier) throw new SupplierNotFound();

    await this.supplierRepository.deleteSupplier(name);
    return;
  }
}
