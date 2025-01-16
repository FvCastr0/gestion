import { makeSupplier } from "@test/factories/supplier-factory";
import { Supplier } from "../supplier";

describe("Supplier", () => {
  it("should be able to create a supplier", () => {
    const supplier = new Supplier(makeSupplier());

    expect(supplier).toBeTruthy();
  });
});
