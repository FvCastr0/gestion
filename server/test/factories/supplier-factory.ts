import { Supplier, SupplierProps } from "@app/entities/supplier";

type Overide = Partial<SupplierProps>;

export function makeSupplier(overide: Overide = {}) {
  return new Supplier({
    name: "Farinha",
    ...overide,
  });
}
