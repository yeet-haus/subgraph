// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DaoReferral extends ethereum.Event {
  get params(): DaoReferral__Params {
    return new DaoReferral__Params(this);
  }
}

export class DaoReferral__Params {
  _event: DaoReferral;

  constructor(event: DaoReferral) {
    this._event = event;
  }

  get referrer(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get daoAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DeployBaalSafe extends ethereum.Event {
  get params(): DeployBaalSafe__Params {
    return new DeployBaalSafe__Params(this);
  }
}

export class DeployBaalSafe__Params {
  _event: DeployBaalSafe;

  constructor(event: DeployBaalSafe) {
    this._event = event;
  }

  get baalSafe(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get moduleAddr(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DeployBaalTokens extends ethereum.Event {
  get params(): DeployBaalTokens__Params {
    return new DeployBaalTokens__Params(this);
  }
}

export class DeployBaalTokens__Params {
  _event: DeployBaalTokens;

  constructor(event: DeployBaalTokens) {
    this._event = event;
  }

  get lootToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sharesToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetAddrsVersion extends ethereum.Event {
  get params(): SetAddrsVersion__Params {
    return new SetAddrsVersion__Params(this);
  }
}

export class SetAddrsVersion__Params {
  _event: SetAddrsVersion;

  constructor(event: SetAddrsVersion) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SummonBaal extends ethereum.Event {
  get params(): SummonBaal__Params {
    return new SummonBaal__Params(this);
  }
}

export class SummonBaal__Params {
  _event: SummonBaal;

  constructor(event: SummonBaal) {
    this._event = event;
  }

  get baal(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get loot(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shares(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get safe(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get forwarder(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get existingAddrs(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class summoner__deployTokensResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getLootToken(): Address {
    return this.value0;
  }

  getSharesToken(): Address {
    return this.value1;
  }
}

export class summoner extends ethereum.SmartContract {
  static bind(address: Address): summoner {
    return new summoner("summoner", address);
  }

  addrsVersion(): BigInt {
    let result = super.call("addrsVersion", "addrsVersion():(uint256)", []);

    return result[0].toBigInt();
  }

  try_addrsVersion(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("addrsVersion", "addrsVersion():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deployAndSetupSafe(_moduleAddr: Address): Address {
    let result = super.call(
      "deployAndSetupSafe",
      "deployAndSetupSafe(address):(address)",
      [ethereum.Value.fromAddress(_moduleAddr)],
    );

    return result[0].toAddress();
  }

  try_deployAndSetupSafe(_moduleAddr: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployAndSetupSafe",
      "deployAndSetupSafe(address):(address)",
      [ethereum.Value.fromAddress(_moduleAddr)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployTokens(_name: string, _symbol: string): summoner__deployTokensResult {
    let result = super.call(
      "deployTokens",
      "deployTokens(string,string):(address,address)",
      [ethereum.Value.fromString(_name), ethereum.Value.fromString(_symbol)],
    );

    return new summoner__deployTokensResult(
      result[0].toAddress(),
      result[1].toAddress(),
    );
  }

  try_deployTokens(
    _name: string,
    _symbol: string,
  ): ethereum.CallResult<summoner__deployTokensResult> {
    let result = super.tryCall(
      "deployTokens",
      "deployTokens(string,string):(address,address)",
      [ethereum.Value.fromString(_name), ethereum.Value.fromString(_symbol)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new summoner__deployTokensResult(
        value[0].toAddress(),
        value[1].toAddress(),
      ),
    );
  }

  encodeMultisend(_calls: Array<Bytes>, _target: Address): Bytes {
    let result = super.call(
      "encodeMultisend",
      "encodeMultisend(bytes[],address):(bytes)",
      [
        ethereum.Value.fromBytesArray(_calls),
        ethereum.Value.fromAddress(_target),
      ],
    );

    return result[0].toBytes();
  }

  try_encodeMultisend(
    _calls: Array<Bytes>,
    _target: Address,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodeMultisend",
      "encodeMultisend(bytes[],address):(bytes)",
      [
        ethereum.Value.fromBytesArray(_calls),
        ethereum.Value.fromAddress(_target),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  gnosisFallbackLibrary(): Address {
    let result = super.call(
      "gnosisFallbackLibrary",
      "gnosisFallbackLibrary():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_gnosisFallbackLibrary(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gnosisFallbackLibrary",
      "gnosisFallbackLibrary():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gnosisMultisendLibrary(): Address {
    let result = super.call(
      "gnosisMultisendLibrary",
      "gnosisMultisendLibrary():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_gnosisMultisendLibrary(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gnosisMultisendLibrary",
      "gnosisMultisendLibrary():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gnosisSingleton(): Address {
    let result = super.call(
      "gnosisSingleton",
      "gnosisSingleton():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_gnosisSingleton(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gnosisSingleton",
      "gnosisSingleton():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lootSingleton(): Address {
    let result = super.call("lootSingleton", "lootSingleton():(address)", []);

    return result[0].toAddress();
  }

  try_lootSingleton(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lootSingleton",
      "lootSingleton():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  sharesSingleton(): Address {
    let result = super.call(
      "sharesSingleton",
      "sharesSingleton():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_sharesSingleton(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sharesSingleton",
      "sharesSingleton():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  summonBaal(
    initializationParams: Bytes,
    initializationActions: Array<Bytes>,
    _saltNonce: BigInt,
  ): Address {
    let result = super.call(
      "summonBaal",
      "summonBaal(bytes,bytes[],uint256):(address)",
      [
        ethereum.Value.fromBytes(initializationParams),
        ethereum.Value.fromBytesArray(initializationActions),
        ethereum.Value.fromUnsignedBigInt(_saltNonce),
      ],
    );

    return result[0].toAddress();
  }

  try_summonBaal(
    initializationParams: Bytes,
    initializationActions: Array<Bytes>,
    _saltNonce: BigInt,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "summonBaal",
      "summonBaal(bytes,bytes[],uint256):(address)",
      [
        ethereum.Value.fromBytes(initializationParams),
        ethereum.Value.fromBytesArray(initializationActions),
        ethereum.Value.fromUnsignedBigInt(_saltNonce),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  template(): Address {
    let result = super.call("template", "template():(address)", []);

    return result[0].toAddress();
  }

  try_template(): ethereum.CallResult<Address> {
    let result = super.tryCall("template", "template():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeployAndSetupSafeCall extends ethereum.Call {
  get inputs(): DeployAndSetupSafeCall__Inputs {
    return new DeployAndSetupSafeCall__Inputs(this);
  }

  get outputs(): DeployAndSetupSafeCall__Outputs {
    return new DeployAndSetupSafeCall__Outputs(this);
  }
}

export class DeployAndSetupSafeCall__Inputs {
  _call: DeployAndSetupSafeCall;

  constructor(call: DeployAndSetupSafeCall) {
    this._call = call;
  }

  get _moduleAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeployAndSetupSafeCall__Outputs {
  _call: DeployAndSetupSafeCall;

  constructor(call: DeployAndSetupSafeCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployTokensCall extends ethereum.Call {
  get inputs(): DeployTokensCall__Inputs {
    return new DeployTokensCall__Inputs(this);
  }

  get outputs(): DeployTokensCall__Outputs {
    return new DeployTokensCall__Outputs(this);
  }
}

export class DeployTokensCall__Inputs {
  _call: DeployTokensCall;

  constructor(call: DeployTokensCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class DeployTokensCall__Outputs {
  _call: DeployTokensCall;

  constructor(call: DeployTokensCall) {
    this._call = call;
  }

  get lootToken(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get sharesToken(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAddrsCall extends ethereum.Call {
  get inputs(): SetAddrsCall__Inputs {
    return new SetAddrsCall__Inputs(this);
  }

  get outputs(): SetAddrsCall__Outputs {
    return new SetAddrsCall__Outputs(this);
  }
}

export class SetAddrsCall__Inputs {
  _call: SetAddrsCall;

  constructor(call: SetAddrsCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _gnosisSingleton(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _gnosisFallbackLibrary(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _gnosisMultisendLibrary(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _gnosisSafeProxyFactory(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _moduleProxyFactory(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _lootSingleton(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _sharesSingleton(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class SetAddrsCall__Outputs {
  _call: SetAddrsCall;

  constructor(call: SetAddrsCall) {
    this._call = call;
  }
}

export class SummonBaalCall extends ethereum.Call {
  get inputs(): SummonBaalCall__Inputs {
    return new SummonBaalCall__Inputs(this);
  }

  get outputs(): SummonBaalCall__Outputs {
    return new SummonBaalCall__Outputs(this);
  }
}

export class SummonBaalCall__Inputs {
  _call: SummonBaalCall;

  constructor(call: SummonBaalCall) {
    this._call = call;
  }

  get initializationParams(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get initializationActions(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SummonBaalCall__Outputs {
  _call: SummonBaalCall;

  constructor(call: SummonBaalCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SummonBaalFromReferrerCall extends ethereum.Call {
  get inputs(): SummonBaalFromReferrerCall__Inputs {
    return new SummonBaalFromReferrerCall__Inputs(this);
  }

  get outputs(): SummonBaalFromReferrerCall__Outputs {
    return new SummonBaalFromReferrerCall__Outputs(this);
  }
}

export class SummonBaalFromReferrerCall__Inputs {
  _call: SummonBaalFromReferrerCall;

  constructor(call: SummonBaalFromReferrerCall) {
    this._call = call;
  }

  get initializationParams(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get initializationActions(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get referrer(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SummonBaalFromReferrerCall__Outputs {
  _call: SummonBaalFromReferrerCall;

  constructor(call: SummonBaalFromReferrerCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
