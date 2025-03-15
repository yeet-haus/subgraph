import { log } from "@graphprotocol/graph-ts";
import { BaalTemplate, YeeterShamanTemplate } from "../generated/templates";
import { Dao, Yeeter } from "../generated/schema";
import { ShamanSet } from "../generated/templates/BaalTemplate/Baal";
import { VALID_SHAMANS, constants } from "./util/constants";
import {
  getEndTime,
  getIsShares,
  getGoal,
  getMinTribute,
  getMultiplier,
  getShamanName,
  getStartTime,
  getToken,
  getErc20Decimals,
  getErc20Symbol,
  getErc20Name,
  getVault,
} from "./util/general";

// ShamanSet (index_topic_1 address shaman, uint256 permission)
export function handleShamanSet(event: ShamanSet): void {
  log.info("handleShamanSet, {}", [event.address.toHexString()]);

  let dao = Dao.load(event.address.toHexString());
  if (dao === null) {
    log.info("no dao, {}", [event.address.toHexString()]);

    // does this ever happen? probably should return here
    // dao = new Dao(event.address.toHexString());
    // dao.createdAt = event.block.timestamp;
    // BaalTemplate.create(event.address);
    return;
  }

  const shamanName = getShamanName(event.params.shaman);

  if (shamanName == null) {
    log.info("no shaman, {}", [event.params.shaman.toHexString()]);

    return;
  }

  const validShaman = shamanName !== null && VALID_SHAMANS.includes(shamanName);
  if (!validShaman) {
    log.info("no shaman match shamanName, {}", [
      event.params.shaman.toHexString(),
    ]);

    return;
  }

  const yeeterId = event.params.shaman.toHexString();

  const yeeterType = constants.YEETER_SHAMAN_NAME
    ? constants.ERC20_YEETER_SHAMAN_TYPE
    : constants.ERC20_YEETER_SHAMAN_TYPE;

  let yeeter = Yeeter.load(yeeterId);
  if (yeeter === null) {
    yeeter = new Yeeter(yeeterId);
    yeeter.createdAt = event.block.timestamp;
    yeeter.dao = event.address.toHexString();
    yeeter.balance = constants.BIGINT_ZERO;
    yeeter.yeetCount = constants.BIGINT_ZERO;
    yeeter.yeeterType = yeeterType;
    yeeter.isSet = true;
    YeeterShamanTemplate.create(event.params.shaman);
  }

  yeeter.startTime = getStartTime(event.params.shaman);
  yeeter.endTime = getEndTime(event.params.shaman);
  yeeter.isShares = getIsShares(event.params.shaman);
  yeeter.multiplier = getMultiplier(event.params.shaman);
  yeeter.minTribute = getMinTribute(event.params.shaman);
  yeeter.goal = getGoal(event.params.shaman);
  yeeter.vault = getVault(event.params.shaman);

  if (yeeterType == constants.ERC20_YEETER_SHAMAN_TYPE) {
    const tokenAddress = getToken(event.params.shaman);
    if (tokenAddress) {
      yeeter.tokenAddress = tokenAddress;
      yeeter.tokenDecimals = getErc20Decimals(tokenAddress);
      yeeter.tokenSymbol = getErc20Symbol(tokenAddress);
      yeeter.tokenName = getErc20Name(tokenAddress);
    }
  }

  yeeter.save();
}
