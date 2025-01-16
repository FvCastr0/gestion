import { makeSupplier } from "@test/factories/supplier-factory";
import { InMemorySupplierRepository } from "@test/repositories/in-memory-supplier-repository";

describe("Add supplier", () => {
  it("should be able add a supplier", async () => {
    const SupplierRepository = new InMemorySupplierRepository();

    await SupplierRepository.createSupplier(makeSupplier({ name: "Example" }));

    expect(SupplierRepository.suppliers).toHaveLength(1);
    expect(SupplierRepository.suppliers[0].name).toEqual(
      makeSupplier({ name: "Example" }).name,
    );
  });
});
