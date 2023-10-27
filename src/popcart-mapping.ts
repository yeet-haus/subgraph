import { log, BigInt } from "@graphprotocol/graph-ts";
import { Create, Redeem, Trade } from "../generated/popcart/popcart";
import {
  PopSubject,
  Balance,
  Redemption,
  Trade as TradeEntity,
} from "../generated/schema";

export function handleCreate(event: Create): void {
  let popId = event.params.subject.toHexString();
  let pop = PopSubject.load(popId);

  if (pop == null) {
    pop = new PopSubject(popId);
    pop.createdAt = event.block.timestamp;
  }

  pop.maxSupply = event.params.maxSupply;
  pop.redemptionEnd = event.params.redemptionEnd;
  pop.floorPrice = event.params.floorPrice;
  pop.supply = BigInt.fromI32(0);
  pop.redeemedTotal = BigInt.fromI32(0);

  pop.save();
}

export function handleTrade(event: Trade): void {
  let popId = event.params.subject.toHexString();
  let balanceId = popId.concat("-").concat(event.params.trader.toHexString());

  let balance = Balance.load(balanceId);

  if (balance == null) {
    balance = new Balance(balanceId);
    balance.createdAt = event.block.timestamp;
    balance.balance = BigInt.fromI32(0);
  }

  balance.popSubject = event.params.subject.toHexString();
  balance.account = event.params.trader;
  balance.balance = event.params.isBuy
    ? balance.balance.plus(event.params.popAmount)
    : balance.balance.minus(event.params.popAmount);

  let pop = PopSubject.load(popId);

  if (pop == null) {
    log.error("missing pop on trade, popid: {}", [popId]);
    return;
  }

  pop.supply = event.params.supply;

  let tradeId = popId.concat("-").concat(event.block.timestamp.toString());
  let trade = new TradeEntity(tradeId);

  trade.createdAt = event.block.timestamp;
  trade.account = event.params.trader;
  trade.popSubject = popId;
  trade.isBuy = event.params.isBuy;
  trade.ethAmount = event.params.ethAmount;
  trade.popAmount = event.params.popAmount;
  trade.protocolEthAmount = event.params.protocolEthAmount;
  trade.subjectEthAmount = event.params.subjectEthAmount;
  trade.supply = event.params.supply;

  trade.save();
  pop.save();
  balance.save();
}

export function handleRedeem(event: Redeem): void {
  let popId = event.params.subject.toHexString();
  let redemptionId = popId
    .concat("-")
    .concat(event.params.trader.toHexString())
    .concat("-")
    .concat(event.block.timestamp.toString());
  const redemption = new Redemption(redemptionId);

  redemption.createdAt = event.block.timestamp;
  redemption.amount = event.params.popAmount;
  redemption.popSubject = popId;

  let pop = PopSubject.load(popId);

  if (pop == null) {
    log.error("missing pop on redemption, popid: {}", [popId]);
    return;
  }

  pop.redeemedTotal = pop.redeemedTotal.plus(event.params.popAmount);

  let traderBalanceId = popId
    .concat("-")
    .concat(event.params.trader.toHexString());
  let traderBalance = Balance.load(traderBalanceId);

  if (traderBalance == null) {
    log.error("missing balance on redemption, traderBalanceId: {}", [
      traderBalanceId,
    ]);
    return;
  }

  traderBalance.balance = traderBalance.balance.minus(event.params.popAmount);

  let subjectBalanceId = popId
    .concat("-")
    .concat(event.params.subject.toHexString());
  let subjectBalance = Balance.load(subjectBalanceId);

  if (subjectBalance == null) {
    log.error("missing balance on redemption, subjectBalanceId: {}", [
      subjectBalanceId,
    ]);
    return;
  }

  subjectBalance.balance = subjectBalance.balance.plus(event.params.popAmount);

  traderBalance.save();
  subjectBalance.save();
  pop.save();
  redemption.save;
}

// - Create(address,uint256,uint256,uint256)
// - Redeem(address,address,uint256)
// - Trade(address,address,bool,uint256,uint256,uint256,uint256,uint256)
