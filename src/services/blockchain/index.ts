import { getBalance } from "./getBalance";
import { createBet } from "./createBet";
import { getAllBets } from "./getAllBets";
import { coverBet } from "./coverBet";

export const BlockchainService = {
  createBet,
  getBalance,
  getAllBets,
  coverBet
};
