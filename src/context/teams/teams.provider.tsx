import { useEffect, useState } from "react";
import { Team } from "../../interfaces/team-interface";
import { fetchTeams } from "../../utils/fetchTeams";
import { TeamsContext } from "./teams.context";

export const TeamsProvider = ({ children }: React.PropsWithChildren) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [activeTeam, setActiveTeam] = useState<Team | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAndSetTeams = async () => {
    try {
      const fetchedTeams = await fetchTeams();
      setTeams(fetchedTeams);
      setActiveTeam(fetchedTeams.find((team) => !!team.currentTeam));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetTeams();
  }, []);

  return (
    <TeamsContext.Provider
      value={{ activeTeam, teams, setActiveTeam, isLoading }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
