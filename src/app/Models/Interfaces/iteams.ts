import { Ileagues } from './ileagues';
export interface ITeams {
  "team_id": number,
  "name": string,
  "coach": string,
  "goals_for": number,
  "goals_against": number,
  "points": number,
  "wins": number,
  "draws": number,
  "loss": number,
  "league_id": number,
  "league": Ileagues
}
