import { createContext } from "react";
import { Team } from "../../interfaces/team-interface";
import { States } from "../../enums/states.enum";

export interface TeamsContextInterface {
  teams: Team[] | undefined;
  activeTeam: Team | undefined;
  setActiveTeam: React.Dispatch<React.SetStateAction<Team | undefined>>;
  teamsState: States;
}

export const TeamsContext = createContext({} as TeamsContextInterface);
