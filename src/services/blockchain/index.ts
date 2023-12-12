import { getBalance } from "./getBalance";
import { createBet } from "./createBet";
import { getAllBets } from "./getAllBets";

export const BlockchainService = {
  createBet,
  getBalance,
  getAllBalances: getAllBets
};
