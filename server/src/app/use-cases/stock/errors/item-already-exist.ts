export class ItemAlreadyExist extends Error {
  constructor() {
    super('Item already exist.');
  }
}
