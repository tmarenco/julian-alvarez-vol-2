import styles from "./team-result.module.css";
import { useContext } from "react";
import { GoalInterface } from "../../../../../interfaces/goal-interface";
import { TeamsContext } from "../../../../../context/teams/teams.context";

interface Props {
  result: Partial<GoalInterface>;
}

export const TeamResult = ({ result }: Props) => {
  const { activeTeam } = useContext(TeamsContext);

  const colorStyle = {
    color: `var(--color-primary-${activeTeam!.short})`,
  };

  return (
    <>
      <div className={styles["team-result-container"]}>
        <img
          src={`/src/assets/images/teams/${activeTeam!.short}-color.svg`}
          alt={`${activeTeam!.short}.svg`}
        />
        <div className={styles["result-container"]}>
          <div
            className={styles["result-content"]}
            style={{
              color:
                result && result.julianGoal! > result.rivalGoal!
                  ? colorStyle.color
                  : "var(--primary-background)",
            }}
          >
            <p className={styles["team"]}>{result?.team}</p>
            <p className={styles["score"]}>{result?.julianGoal}</p>
          </div>
          <div className={styles["result-content"]}>
            <p className={styles["team"]}>{result?.rival}</p>
            <p className={styles["score"]}>{result?.rivalGoal}</p>
          </div>
        </div>
      </div>
    </>
  );
};
