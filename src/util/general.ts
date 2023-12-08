import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { YeeterShaman } from "../../generated/templates/YeeterShamanTemplate/YeeterShaman";

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

export function getMaxTarget(shamanAddress: Address): BigInt | null {
  const contract = YeeterShaman.bind(shamanAddress);

  const target = contract.try_maxTarget();
  if (target.reverted) {
    log.info("shaman maxTarget reverted shaman address, {}", [
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
