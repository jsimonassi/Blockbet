import { Match } from "../api/Match";

export interface Bet {
    matchId: number;
    betOwnerAddress: string;
    betCoverAddress?: string;
    betValue: number;
    betOwnerType: "home" | "away" | "draw";
    betCoverType?: "home" | "away" | "draw";
    result?: "home" | "away" | "draw";
}

export interface OpenedBet {
    match: Match;
    bet: Bet;
}