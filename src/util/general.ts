import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { YeeterShaman } from "../../generated/templates/YeeterShamanTemplate/YeeterShaman";
import { Erc20 } from "../../generated/templates/Erc20YeeterShamanTemplate/Erc20";
import { Erc20Bytes32 } from "../../generated/templates/Erc20YeeterShamanTemplate/Erc20Bytes32";
import { Erc20YeeterShaman } from "../../generated/templates/Erc20YeeterShamanTemplate/Erc20YeeterShaman";

export function getShamanName(shamanAddress: Address): string | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const name = contract.try_name();
  if (name.reverted) {
    log.info("shaman name reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return name.value;
  }
}

export function getStartTime(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_startTime();
  if (target.reverted) {
    log.info("shaman starttime reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getEndTime(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_endTime();
  if (target.reverted) {
    log.info("shaman endtime reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getIsShares(shamanAddress: Address): boolean {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_isShares();
  if (target.reverted) {
    log.info("shaman isShares reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return false;
  } else {
    return target.value;
  }
}

export function getMultiplier(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_multiplier();
  if (target.reverted) {
    log.info("shaman multiplier reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getMinTribute(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_minTribute();
  if (target.reverted) {
    log.info("shaman minTribute reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getGoal(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_goal();
  if (target.reverted) {
    log.info("shaman goal reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getVault(shamanAddress: Address): Address | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_vault();
  if (target.reverted) {
    log.info("shaman vault reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getToken(shamanAddress: Address): Address | null {
  const contract = Erc20YeeterShaman.bind(shamanAddress);

  const target = contract.try_token();
  if (target.reverted) {
    log.info("shaman token reverted shaman address, {}", [
      shamanAddress.toHexString(),
    ]);
    return null;
  } else {
    return target.value;
  }
}

export function getErc20Symbol(tokenAddress: Address): string | null {
  const contract = Erc20.bind(tokenAddress);

  const symbol = contract.try_symbol();
  if (symbol.reverted) {
    const erc20Bytes32 = Erc20Bytes32.bind(tokenAddress);

    const otherSymbol = erc20Bytes32.try_symbol();
    if (otherSymbol.reverted) {
      log.info("other symbol reverted token, {}", [tokenAddress.toHexString()]);
      return null;
    } else {
      return otherSymbol.value.toString();
    }
  } else {
    return symbol.value;
  }
}

export function getErc20Name(tokenAddress: Address): string | null {
  const contract = Erc20.bind(tokenAddress);

  const name = contract.try_name();
  if (name.reverted) {
    const erc20Bytes32 = Erc20Bytes32.bind(tokenAddress);

    const otherName = erc20Bytes32.try_name();
    if (otherName.reverted) {
      log.info("other symbol reverted token, {}", [tokenAddress.toHexString()]);
      return null;
    } else {
      return otherName.value.toString();
    }
  } else {
    return name.value;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function getErc20Decimals(tokenAddress: Address): BigInt | null {
  const contract = Erc20.bind(tokenAddress);

  const decimals = contract.try_decimals();
  if (decimals.reverted) {
    log.info("decimals reverted token, {}", [tokenAddress.toHexString()]);
    return null;
  } else {
    return BigInt.fromI32(decimals.value);
  }
}
