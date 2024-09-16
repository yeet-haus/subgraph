import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  Claimed,
  Created,
  TokenURISet,
  TransferBatch,
  TransferSingle,
} from "../generated/pod/pod";
import { Account, Balance, Claim, PODToken } from "../generated/schema";

import { constants } from "./util/constants";

function fetchAccount(address: Bytes): Account {
  let account = Account.load(address.toHexString());
  if (account == null) {
    account = new Account(address.toHexString());
    account.address = address;
  }
  account.save();
  return account as Account;
}

function fetchBalance(address: Bytes, id: BigInt): Balance {
  const balanceId = address.toHexString().concat("-").concat(id.toString());
  let balance = Balance.load(balanceId);
  if (balance == null) {
    balance = new Balance(balanceId);
    balance.account = address.toHexString();
    balance.token = id.toString();
    balance.value = constants.BIGINT_ZERO;
  }
  return balance as Balance;
}

// event Created(uint256 indexed id, bytes32 root, string uri);
export function handleCreated(event: Created): void {
  const tokenId = event.params.id;
  const token = new PODToken(tokenId.toString());
  token.createdAt = event.block.timestamp;
  token.tokenId = tokenId;
  token.uri = event.params.uri;
  token.totalClaims = constants.BIGINT_ZERO;

  token.save();
}

// event Claimed(address indexed account, uint256 indexed id, string claimCode);
export function handleClaimed(event: Claimed): void {
  const tokenId = event.params.id;
  const token = PODToken.load(tokenId.toString());
  if (token == null) {
    return;
  }

  token.totalClaims = token.totalClaims.plus(constants.BIGINT_ONE);

  const claimId = event.params.id
    .toString()
    .concat("-")
    .concat(event.params.claimCode);
  const claim = new Claim(claimId);
  claim.token = tokenId.toString();
  claim.code = event.params.claimCode;

  token.save();
  claim.save();
}

// event TokenURISet(uint256 indexed id, string uri);
export function handleTokenURISet(event: TokenURISet): void {
  const tokenId = event.params.id;
  const token = PODToken.load(tokenId.toString());

  if (token == null) {
    return;
  }
  token.uri = event.params.uri;

  token.save();
}

// event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
export function handleTransferSingle(event: TransferSingle): void {
  if (event.params.to != constants.ADDRESS_ZERO) {
    fetchAccount(event.params.to);
    const toBalance = fetchBalance(event.params.to, event.params.id);

    toBalance.value = toBalance.value.plus(event.params.value);

    toBalance.save();
  }

  if (event.params.from != constants.ADDRESS_ZERO) {
    fetchAccount(event.params.from);
    const fromBalance = fetchBalance(event.params.from, event.params.id);

    fromBalance.value = fromBalance.value.minus(event.params.value);

    fromBalance.save();
  }
}

// event TransferBatch(
//   address indexed operator,
//   address indexed from,
//   address indexed to,
//   uint256[] ids,
//   uint256[] values
// );
export function handleTransferBatch(event: TransferBatch): void {
  let ids = event.params.ids;
  let values = event.params.values;
  if (event.params.to != constants.ADDRESS_ZERO) {
    fetchAccount(event.params.to);

    for (let i = 0; i < ids.length; ++i) {
      const toBalance = fetchBalance(event.params.to, ids[i]);
      toBalance.value = toBalance.value.plus(values[i]);
      toBalance.save();
    }
  }

  if (event.params.from != constants.ADDRESS_ZERO) {
    fetchAccount(event.params.from);

    for (let i = 0; i < ids.length; ++i) {
      const fromBalance = fetchBalance(event.params.from, ids[i]);
      fromBalance.value = fromBalance.value.minus(values[i]);
      fromBalance.save();
    }
  }
}
