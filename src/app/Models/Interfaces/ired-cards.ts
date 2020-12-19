import { Imatches } from "./imatches";
import { Iplayers } from "./iplayers";
import { ITeams } from "./iteams";

export interface IredCards {
  "red_card_id": number,
    "match_id": number,
    "player_id": number,
    "team_id": number,
    "match":Imatches,
    "player": Iplayers,
    "team":ITeams
}
