import { Stock } from "@app/entities/Stock";
import { randomUUID } from "node:crypto";

export interface ProductProps {
  name: string;
  value: number;
  composition: [{ amount: number; ingredient: Stock }];
  createdAt?: Date;
}

export class Product {
  private _id?: string;
  private _name: string;
  private _value: number;
  private _composition: [{ amount: number; ingredient: Stock }];
  private _createdAt: Date;

  constructor({ name, value, composition }: ProductProps) {
    this._id = randomUUID();
    this._name = name;
    this._value = value;
    this._composition = composition;
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

  public get composition() {
    return this._composition;
  }

  public set composition(composition) {
    this._composition = composition;
  }
}
