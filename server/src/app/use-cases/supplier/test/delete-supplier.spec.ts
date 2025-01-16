import { makeSupplier } from "@test/factories/supplier-factory";
import { InMemorySupplierRepository } from "@test/repositories/in-memory-supplier-repository";

describe("Delete supplier", () => {
  it("should be able to delete an supplier", async () => {
    const SupplierRepository = new InMemorySupplierRepository();

    await SupplierRepository.createSupplier(makeSupplier({ name: "example" }));

    await SupplierRepository.deleteSupplier(
      makeSupplier({ name: "example" }).name,
    );

    expect(SupplierRepository.suppliers).toHaveLength(0);
  });
});
