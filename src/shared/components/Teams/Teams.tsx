import { useContext } from "react";
import styles from "./teams.module.css";
import { TeamsContext } from "../../../context/teams/teams.context";

interface Props {
  teamColor: string;
  direction: string;
}

export const Teams = ({ teamColor, direction }: Props) => {
  const { activeTeam, setActiveTeam, teams } = useContext(TeamsContext);

  return (
    <>
      <div className={`d-flex flex-${direction}`}>
        {teams!.map((team) => (
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
