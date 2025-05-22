import { DaoReferral, SummonBaal } from "../generated/summoner/summoner";
import { CreateUnsetEthYeeter } from "../generated/yeeterFactory/yeeterFactory";
import { BaalTemplate, YeeterShamanTemplate } from "../generated/templates";
import { Dao, Yeeter } from "../generated/schema";
import { getErc20Symbol, getShamanName } from "./util/general";
import { log } from "@graphprotocol/graph-ts";
import { constants, VALID_SHAMANS } from "./util/constants";

export function handleSummonBaal(event: SummonBaal): void {
  BaalTemplate.create(event.params.baal);

  log.info("handleSummonBaal, {}", [event.address.toHexString()]);

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

export function handleCreateUnsetEthYeeter(event: CreateUnsetEthYeeter): void {
  log.info("handleCreateUnsetEthYeeter baal, {}", [
    event.params.baal.toHexString(),
  ]);
  const shamanName = getShamanName(event.params.yeeter);

  if (shamanName == null) {
    log.info("handleCreateUnsetEthYeeter no shaman, {}", [
      event.params.yeeter.toHexString(),
    ]);

    return;
  }

  const validShaman = shamanName !== null && VALID_SHAMANS.includes(shamanName);
  if (!validShaman) {
    log.info("handleCreateUnsetEthYeeter no shaman match shamanName, {}", [
      event.params.yeeter.toHexString(),
    ]);

    return;
  }

  const yeeterType = constants.YEETER_SHAMAN_NAME
    ? constants.ERC20_YEETER_SHAMAN_TYPE
    : constants.ERC20_YEETER_SHAMAN_TYPE;
  const yeeterId = event.params.yeeter.toHexString();

  let yeeter = Yeeter.load(yeeterId);
  if (yeeter === null) {
    yeeter = new Yeeter(yeeterId);
    yeeter.createdAt = event.block.timestamp;
    yeeter.txHash = event.transaction.hash;
    yeeter.dao = event.params.baal.toHexString();
    yeeter.balance = constants.BIGINT_ZERO;
    yeeter.yeetCount = constants.BIGINT_ZERO;
    yeeter.yeeterType = yeeterType;
    yeeter.isSet = false;
    YeeterShamanTemplate.create(event.params.yeeter);
  }

  yeeter.save();
}
