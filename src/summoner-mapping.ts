import { SummonBaal } from "../generated/summoner/summoner";
import { BaalTemplate } from "../generated/templates";
import { Dao } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleSummonBaal(event: SummonBaal): void {
  BaalTemplate.create(event.params.baal);

  log.info("handleSummonBaal, {}", [event.address.toHexString()]);

  const daoId = event.params.baal.toHexString();
  const dao = new Dao(daoId);
  if (dao === null) {
    return;
  }

  dao.createdAt = event.block.timestamp;

  dao.save();
}
