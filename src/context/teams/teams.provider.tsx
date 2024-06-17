import { useEffect, useState } from "react";
import { Team } from "../../interfaces/team-interface";
import { fetchTeams } from "../../api/fetchTeams";
import { TeamsContext } from "./teams.context";
import { States } from "../../enums/states.enum";

export const TeamsProvider = ({ children }: React.PropsWithChildren) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [activeTeam, setActiveTeam] = useState<Team | undefined>();
  const [teamsState, setTeamsState] = useState<States>(States.LOADING);

  const fetchAndSetTeams = async () => {
    const fetchedTeams = await fetchTeams();
    setTeams(fetchedTeams.teams);
    setTeamsState(fetchedTeams.state);
    setActiveTeam(fetchedTeams.teams.find((team) => !!team.currentTeam));
  };

  useEffect(() => {
    fetchAndSetTeams();
  }, []);

  return (
    <TeamsContext.Provider
      value={{ activeTeam, teams, setActiveTeam, teamsState }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
