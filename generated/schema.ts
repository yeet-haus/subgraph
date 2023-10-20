// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PopSubject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PopSubject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PopSubject must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PopSubject", id.toString(), this);
    }
  }

  static load(id: string): PopSubject | null {
    return changetype<PopSubject | null>(store.get("PopSubject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get maxSupply(): BigInt {
    let value = this.get("maxSupply");
    return value!.toBigInt();
  }

  set maxSupply(value: BigInt) {
    this.set("maxSupply", Value.fromBigInt(value));
  }

  get redemptionEnd(): BigInt {
    let value = this.get("redemptionEnd");
    return value!.toBigInt();
  }

  set redemptionEnd(value: BigInt) {
    this.set("redemptionEnd", Value.fromBigInt(value));
  }

  get floorPrice(): BigInt {
    let value = this.get("floorPrice");
    return value!.toBigInt();
  }

  set floorPrice(value: BigInt) {
    this.set("floorPrice", Value.fromBigInt(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value!.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get redeemedTotal(): BigInt {
    let value = this.get("redeemedTotal");
    return value!.toBigInt();
  }

  set redeemedTotal(value: BigInt) {
    this.set("redeemedTotal", Value.fromBigInt(value));
  }

  get balances(): Array<string> | null {
    let value = this.get("balances");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set balances(value: Array<string> | null) {
    if (!value) {
      this.unset("balances");
    } else {
      this.set("balances", Value.fromStringArray(<Array<string>>value));
    }
  }

  get redemptions(): Array<string> | null {
    let value = this.get("redemptions");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set redemptions(value: Array<string> | null) {
    if (!value) {
      this.unset("redemptions");
    } else {
      this.set("redemptions", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Balance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Balance", id.toString(), this);
    }
  }

  static load(id: string): Balance | null {
    return changetype<Balance | null>(store.get("Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get popSubject(): string {
    let value = this.get("popSubject");
    return value!.toString();
  }

  set popSubject(value: string) {
    this.set("popSubject", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Redemption entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Redemption must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Redemption", id.toString(), this);
    }
  }

  static load(id: string): Redemption | null {
    return changetype<Redemption | null>(store.get("Redemption", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get popSubject(): string {
    let value = this.get("popSubject");
    return value!.toString();
  }

  set popSubject(value: string) {
    this.set("popSubject", Value.fromString(value));
  }
}
