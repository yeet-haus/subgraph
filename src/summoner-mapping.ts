import { DaoReferral, SummonBaal } from "../generated/summoner/summoner";
import { BaalTemplate } from "../generated/templates";
import { Dao } from "../generated/schema";

export function handleSummonBaal(event: SummonBaal): void {
  BaalTemplate.create(event.params.baal);

  const daoId = event.params.baal.toHexString();
  const dao = new Dao(daoId);
  if (dao === null) {
    return;
  }

  dao.createdAt = event.block.timestamp;

  dao.save();
}

export function handleDaoReferral(event: DaoReferral): void {
  const daoId = event.params.daoAddress.toHexString();

  let dao = Dao.load(daoId);
  if (dao === null) {
    dao = new Dao(daoId);
  }

  dao.referrer = event.params.referrer.toString();

  dao.save();
}
