import { makeSupplier } from "@test/factories/supplier-factory";
import { InMemorySupplierRepository } from "@test/repositories/in-memory-supplier-repository";

describe("Get all suppliers", () => {
  it("should return all suppliers", async () => {
    const SupplierRepository = new InMemorySupplierRepository();
    await SupplierRepository.createSupplier(makeSupplier());

    const suppliers = await SupplierRepository.getAllSupliers();

    expect(suppliers).toHaveLength(1);
  });
});
