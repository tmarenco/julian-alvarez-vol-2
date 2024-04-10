import { createContext } from "react";
import { Team } from "../../interfaces/team-interface";

export interface ActiveTeamContextInterface {
  activeTeam: Team;
  setActiveTeam: React.Dispatch<React.SetStateAction<Team>>;
}

export const ActiveTeamContext = createContext(
  {} as ActiveTeamContextInterface
);
