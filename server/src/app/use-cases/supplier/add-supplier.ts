import { SupplierRepository } from "@app/repository/supplier-repository";
import { makeSupplier } from "@test/factories/supplier-factory";
import { SupplierAlreadyExist } from "./errors/SupplierAlreadyExist";

interface AddSupplierRequest {
  name: string;
}

type AddSupplierResponse = void;

export class AddSupplier {
  constructor(private supplier: SupplierRepository) {}
  async execute(request: AddSupplierRequest): Promise<AddSupplierResponse> {
    const { name } = request;

    const supplier = await this.supplier.findSupplier(name);

    if (supplier) throw new SupplierAlreadyExist();

    await this.supplier.createSupplier(makeSupplier({ name }));
  }
}
