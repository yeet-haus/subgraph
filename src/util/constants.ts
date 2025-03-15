import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace constants {
  export const BIGINT_ONE_HUNDRED = BigInt.fromI32(100);
  export const BIGINT_ZERO = BigInt.fromI32(0);
  export const BIGINT_ONE = BigInt.fromI32(1);
  export const BIGINT_TWO = BigInt.fromI32(2);
  export const BIGINT_THREE = BigInt.fromI32(3);
  export const FUTURE_TIMESTAMP = BigInt.fromI64(9999999999);
  export const BIGDECIMAL_ZERO = new BigDecimal(constants.BIGINT_ZERO);
  export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
  export const BYTES32_ZERO =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  export const YEETER_SHAMAN_NAME = "EthYeeter:0.0.2";
  export const ERC20_YEETER_SHAMAN_NAME = "ERC20Yeeter:0.0.1";
  export const YEETER_SHAMAN_TYPE = "ethYeeter";
  export const ERC20_YEETER_SHAMAN_TYPE = "erc20Yeeter";
}

export const VALID_SHAMANS = [
  constants.YEETER_SHAMAN_NAME,
  constants.ERC20_YEETER_SHAMAN_NAME,
];
