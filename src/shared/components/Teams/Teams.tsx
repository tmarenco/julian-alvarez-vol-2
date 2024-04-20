import { useContext } from "react";
import { teams } from "../../../data/teams";
import styles from "./teams.module.css";
import { ActiveTeamContext } from "../../../context/active-team/active-team.context";

interface Props {
  teamColor: string;
  direction: string;
}

export const Teams = ({ teamColor, direction }: Props) => {
  const { activeTeam, setActiveTeam } = useContext(ActiveTeamContext);

  return (
    <>
      <div className={`d-flex flex-${direction}`}>
        {teams.map((team) => (
          <img
            key={team.short}
            className={`${styles.team} 
            ${
              activeTeam === team
                ? styles["selected-team"]
                : styles["non-selected-team"]
            }
            ${
              direction === "column"
                ? styles["team-column"]
                : styles["team-row"]
            }
            
            `}
            src={`/src/assets/images/teams/${team.short}-${teamColor}.svg`}
            onClick={() => setActiveTeam(team)}
          />
        ))}
      </div>
    </>
  );
};
