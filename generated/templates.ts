// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext,
} from "@graphprotocol/graph-ts";

export class BaalTemplate extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("BaalTemplate", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "BaalTemplate",
      [address.toHex()],
      context,
    );
  }
}

export class YeeterShamanTemplate extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("YeeterShamanTemplate", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "YeeterShamanTemplate",
      [address.toHex()],
      context,
    );
  }
}