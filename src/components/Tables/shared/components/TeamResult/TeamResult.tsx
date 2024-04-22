import styles from "./team-result.module.css";
import { useContext } from "react";
import { ActiveTeamContext } from "../../../../../context/active-team/active-team.context";

export const TeamResult = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const colorStyle = {
    color: `var(--color-primary-${activeTeam.short})`,
  };

  return (
    <>
      <div className={styles["team-result-container"]}>
        <img
          src={`/src/assets/images/teams/${activeTeam.short}-color.svg`}
          alt={`${activeTeam.short}.svg`}
        />
        <div className={styles["result-container"]}>
          <div className={styles["result-content"]}>
            <p className={styles["team"]} style={colorStyle}>
              Manchester City
            </p>
            <p className={styles["score"]} style={colorStyle}>
              1
            </p>
          </div>
          <div className={styles["result-content"]}>
            <p className={styles["team"]}>Manchester United</p>
            <p className={styles["score"]}>1</p>
          </div>
        </div>
      </div>
    </>
  );
};
