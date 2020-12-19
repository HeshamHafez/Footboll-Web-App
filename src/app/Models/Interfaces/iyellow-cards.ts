import { Iplayers } from './iplayers';
import { Imatches } from './imatches';
import { ITeams } from './iteams';
export interface IyellowCards {
    "yellow_card_id": number,
    "match_id": number,
    "player_id": number,
    "team_id": number,
    "match":Imatches,
    "player": Iplayers,
    "team":ITeams
}
