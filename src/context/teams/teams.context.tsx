import { createContext } from "react";
import { Team } from "../../interfaces/team-interface";

export interface TeamsContextInterface {
  teams: Team[] | undefined;
  activeTeam: Team | undefined;
  setActiveTeam: React.Dispatch<React.SetStateAction<Team | undefined>>;
  isLoading: boolean;
}

export const TeamsContext = createContext({} as TeamsContextInterface);
