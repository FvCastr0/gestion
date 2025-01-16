import { randomUUID } from "node:crypto";
import { Supplier } from "./supplier";

export interface StockProps {
  name: string;
  value: number;
  stock: number;
  minStock: number;
  supplier: Supplier;
  createdAt?: Date;
  id?: string;
}

export class Stock {
  private _id: string;
  private _name: string;
  private _value: number;
  private _stock: number;
  private _minStock: number;
  private _supplier: Supplier;
  private _createdAt: Date;

  constructor({ name, value, minStock, supplier, stock }: StockProps) {
    this._id = randomUUID();
    this._name = name;
    this._value = value;
    this._stock = stock;
    this._supplier = supplier;
    this._minStock = minStock;
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

  public get value() {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  public get stock() {
    return this._stock;
  }
  public set stock(stock: number) {
    this._stock = stock;
  }

  public get minStock() {
    return this._minStock;
  }
  public set minStock(minStock: number) {
    this._minStock = minStock;
  }

  public get supplier() {
    return this._supplier;
  }
  public set supplier(supplier: Supplier) {
    this._supplier = supplier;
  }
}
