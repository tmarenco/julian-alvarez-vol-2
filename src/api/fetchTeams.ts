import { States } from "../enums/states.enum";
import { Team } from "../interfaces/team-interface";

export interface TeamResponse {
  teams: Team[],
  state: States
}

export const fetchTeams = async (): Promise<TeamResponse> => {
    try {
      const csv = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXCh_h2NnNHsxOAFMKI4k7BpJ7ORMSIInmEL8ka3s2JLVfmLHq60i3IwxpPeE9mx25N2BL2VKm1yYg/pub?output=csv"
      ).then((res) => res.text());

      const teams: Team[] = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [team, short, matches, goals, assists, titles, number, debut, currentTeam] =
            row.split(",");

          return {
            team,
            short,
            matches: Number(matches),
            goals: Number(goals),
            assists: Number(assists),
            titles: Number(titles),
            number: Number(number),
            debut,
            currentTeam: JSON.parse(currentTeam)
          };
        });

        return {
          teams: teams,
          state: teams.length ? States.COMPLETED : States.EMPTY 
        }
    } catch (error) {
      return {
        teams: [],
        state: States.ERROR
      }
    }
  };
