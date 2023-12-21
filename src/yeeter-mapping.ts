import { log } from "@graphprotocol/graph-ts";
import { Yeet, Yeeter } from "../generated/schema";
import { OnReceived } from "../generated/templates/YeeterShamanTemplate/YeeterShaman";
import { constants } from "./util/constants";

export function handleOnReceived(event: OnReceived): void {
  const yeeter = Yeeter.load(event.address.toHexString());

  if (yeeter === null) {
    log.info("yeeter not found, {}", [event.address.toHexString()]);
    return;
  }

  const yeetId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.contributorAddress.toHexString())
    .concat("-")
    .concat(event.block.timestamp.toString());

  let yeet = new Yeet(yeetId);

  yeet.createdAt = event.block.timestamp;
  yeet.contributor = event.params.contributorAddress;
  yeet.dao = event.params.baal.toHexString();
  yeet.amount = event.params.amount;
  yeet.yeeter = event.address.toHexString();
  yeet.message = event.params.message;
  yeet.shares = event.params.shares;

  yeeter.balance = yeeter.balance.plus(event.params.amount);
  yeeter.yeetCount = yeeter.yeetCount.plus(constants.BIGINT_ONE);

  yeeter.save();

  yeet.save();
}
