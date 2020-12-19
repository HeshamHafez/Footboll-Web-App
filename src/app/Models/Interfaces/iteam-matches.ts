import { ITeams } from './iteams';
import { Imatches } from './imatches';
export interface IteamMatches {
    "match_id": number,
    "team_id": number,
    "home_Away": string,
    "match":Imatches,
    "team":ITeams

}
