import { DaoReferral, SummonBaal } from "../generated/summoner/summoner";
import { BaalTemplate } from "../generated/templates";
import { Dao } from "../generated/schema";
import { getErc20Symbol } from "./util/general";

export function handleSummonBaal(event: SummonBaal): void {
  BaalTemplate.create(event.params.baal);

  const daoId = event.params.baal.toHexString();
  const dao = new Dao(daoId);

  dao.createdAt = event.block.timestamp;
  dao.lootAddress = event.params.loot;
  dao.sharesAddress = event.params.shares;

  dao.lootTokenSymbol = getErc20Symbol(event.params.loot);
  dao.shareTokenSymbol = getErc20Symbol(event.params.shares);

  dao.save();
}

export function handleDaoReferral(event: DaoReferral): void {
  const daoId = event.params.daoAddress.toHexString();

  let dao = Dao.load(daoId);
  if (dao === null) {
    return;
  }

  dao.referrer = event.params.referrer.toString();

  dao.save();
}
