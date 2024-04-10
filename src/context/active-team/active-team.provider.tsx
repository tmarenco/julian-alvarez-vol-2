import { useState } from "react";
import { Team } from "../../interfaces/team-interface";
import { teams } from "../../data/teams";
import { ActiveTeamContext } from "./active-team.context";

export const ActiveTeamProvider = ({ children }: React.PropsWithChildren) => {
  const afa = teams.find((team) => team.short === "city");
  const [activeTeam, setActiveTeam] = useState<Team>(afa as Team);
  return (
    <ActiveTeamContext.Provider value={{ activeTeam, setActiveTeam }}>
      {children}
    </ActiveTeamContext.Provider>
  );
};
