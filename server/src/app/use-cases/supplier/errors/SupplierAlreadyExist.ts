export class SupplierAlreadyExist extends Error {
  constructor() {
    super("Supplier already exist.");
  }
}
