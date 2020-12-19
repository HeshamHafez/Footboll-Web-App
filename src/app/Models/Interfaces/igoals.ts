import { Iplayers } from './iplayers';
import { Imatches } from './imatches';
export interface Igoals {
    "goal_id": number,
    "match_id": number,
    "player_id": number,
    "match":Imatches
    "player":Iplayers
}
