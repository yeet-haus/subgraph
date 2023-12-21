import { log } from "@graphprotocol/graph-ts";
import { BaalTemplate, YeeterShamanTemplate } from "../generated/templates";
import { Dao, Yeeter } from "../generated/schema";
import { ShamanSet } from "../generated/templates/BaalTemplate/Baal";
import { constants } from "./util/constants";
import {
  getEndTime,
  getIsShares,
  getGoal,
  getMinTribute,
  getMultiplier,
  getShamanName,
  getStartTime,
} from "./util/general";

// ShamanSet (index_topic_1 address shaman, uint256 permission)
export function handleShamanSet(event: ShamanSet): void {
  log.info("handleShamanSet, {}", [event.address.toHexString()]);

  let dao = Dao.load(event.address.toHexString());
  if (dao === null) {
    dao = new Dao(event.address.toHexString());
    dao.createdAt = event.block.timestamp;
    BaalTemplate.create(event.address);
  }

  const shamanName = getShamanName(event.params.shaman);

  if (!shamanName) {
    log.info("no shaman, {}", [event.params.shaman.toHexString()]);

    return;
  }
  if (shamanName != constants.YEETER_SHAMAN_NAME) {
    log.info("no shaman match shamanName, {}", [
      event.params.shaman.toHexString(),
    ]);

    return;
  }

  const yeeterId = event.params.shaman.toHexString();

  let yeeter = Yeeter.load(yeeterId);
  if (yeeter === null) {
    yeeter = new Yeeter(yeeterId);
    yeeter.createdAt = event.block.timestamp;
    yeeter.dao = event.address.toHexString();
    yeeter.balance = constants.BIGINT_ZERO;
    yeeter.yeetCount = constants.BIGINT_ZERO;
    YeeterShamanTemplate.create(event.params.shaman);
  }

  yeeter.startTime = getStartTime(event.params.shaman);
  yeeter.endTime = getEndTime(event.params.shaman);
  yeeter.isShares = getIsShares(event.params.shaman);
  yeeter.multiplier = getMultiplier(event.params.shaman);
  yeeter.minTribute = getMinTribute(event.params.shaman);
  yeeter.goal = getGoal(event.params.shaman);

  yeeter.save();
}
