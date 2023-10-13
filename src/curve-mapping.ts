import { log, BigInt } from "@graphprotocol/graph-ts";
import { Create, Redeem, Trade } from "../generated/curve/curve";
import { Crop, Balance, Redemption } from "../generated/schema";

export function handleCreate(event: Create): void {
  let cropId = event.params.subject.toHexString();
  let crop = Crop.load(cropId);

  if (crop == null) {
    crop = new Crop(cropId);
    crop.createdAt = event.block.timestamp;
  }

  crop.maxSupply = event.params.maxSupply;
  crop.redemptionEnd = event.params.redemptionEnd;
  crop.supply = BigInt.fromI32(0);
  crop.redeemedTotal = BigInt.fromI32(0);

  crop.save();
}

export function handleTrade(event: Trade): void {
  let cropId = event.params.subject.toHexString();
  let balanceId = cropId.concat("-").concat(event.params.trader.toHexString());

  let balance = Balance.load(balanceId);

  if (balance == null) {
    balance = new Balance(balanceId);
    balance.createdAt = event.block.timestamp;
    balance.balance = BigInt.fromI32(0);
  }

  balance.crop = event.params.subject.toHexString();
  balance.account = event.params.trader;
  balance.balance = event.params.isBuy
    ? balance.balance.plus(event.params.cropAmount)
    : balance.balance.minus(event.params.cropAmount);

  let crop = Crop.load(cropId);

  if (crop == null) {
    log.error("missing crop on trade, cropid: {}", [cropId]);
    return;
  }

  crop.supply = event.params.supply;

  crop.save();
  balance.save();
}

export function handleRedeem(event: Redeem): void {
  let cropId = event.params.subject.toHexString();
  let redemptionId = cropId
    .concat("-")
    .concat(event.params.trader.toHexString())
    .concat("-")
    .concat(event.block.timestamp.toString());
  const redemption = new Redemption(redemptionId);

  redemption.createdAt = event.block.timestamp;
  redemption.amount = event.params.cropAmount;
  redemption.crop = cropId;

  let crop = Crop.load(cropId);

  if (crop == null) {
    log.error("missing crop on redemption, cropid: {}", [cropId]);
    return;
  }

  crop.redeemedTotal = crop.redeemedTotal.plus(event.params.cropAmount);

  let traderBalanceId = cropId
    .concat("-")
    .concat(event.params.trader.toHexString());
  let traderBalance = Balance.load(traderBalanceId);

  if (traderBalance == null) {
    log.error("missing balance on redemption, traderBalanceId: {}", [
      traderBalanceId,
    ]);
    return;
  }

  traderBalance.balance = traderBalance.balance.minus(event.params.cropAmount);

  let subjectBalanceId = cropId
    .concat("-")
    .concat(event.params.subject.toHexString());
  let subjectBalance = Balance.load(subjectBalanceId);

  if (subjectBalance == null) {
    log.error("missing balance on redemption, subjectBalanceId: {}", [
      subjectBalanceId,
    ]);
    return;
  }

  subjectBalance.balance = subjectBalance.balance.plus(event.params.cropAmount);

  traderBalance.save();
  subjectBalance.save();
  crop.save();
  redemption.save;
}

// - Create(address,uint256,uint256)
// - Redeem(address,address,uint256)
// - Trade(address,address,bool,uint256,uint256,uint256,uint256,uint256)
