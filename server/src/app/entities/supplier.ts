import { randomUUID } from "node:crypto";

export interface SupplierProps {
  id?: string;
  name: string;
  createdAt?: Date;
}

export class Supplier {
  private _id: string;
  private _name: string;
  private _createdAt: Date;

  constructor({ name }: SupplierProps) {
    this._id = randomUUID();
    this._name = name;
    this._createdAt = new Date();
  }

  public get id() {
    return this._id;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get name() {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
}
