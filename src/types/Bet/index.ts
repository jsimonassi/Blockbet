import { Match } from "../api/Match";

export interface Bet {
    matchId: number;
    betOwnerAddress: string;
    betCoverAddress?: string;
    betValue: number;
    betOwnerType: CoverType;
    betCoverType?: CoverType;
    result?: CoverType;
    uuid?: string;
}

export type CoverType = "home" | "away" | "draw"

export interface OpenedBet {
    match: Match;
    bet: Bet;
}