import { GoalInterface } from "../../../../interfaces/goal-interface";
import { TeamResult } from "../shared/components/TeamResult/TeamResult";
import { WatchButton } from "../shared/components/WatchButton/WatchButton";
import styles from "./tables.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  goals: GoalInterface[];
  favoriteGoals: GoalInterface[];
  handleFavorite: (goal: GoalInterface) => void;
}

export const TableDesktop = ({
  goals,
  favoriteGoals,
  handleFavorite,
}: Props) => {
  return (
    <>
      <div className={styles["table-container"]}>
        {goals.map((goal, index) => (
          <div key={index} className={styles["table-item"]}>
            <div className={styles["table-item-desktop-content"]}>
              <div className={styles["table-desktop-icon-container"]}>
                <FavoriteIcon
                  style={{
                    opacity: favoriteGoals.find(
                      (fav) => fav.order === goal.order
                    )
                      ? "100%"
                      : "10%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleFavorite(goal)}
                />
              </div>
              <div className={styles["table-desktop-items-container"]}>
                <div className={styles["table-desktop-competition-container"]}>
                  <div
                    className={styles["table-desktop-competition-border"]}
                  ></div>
                  <div className={styles["table-desktop-competition-content"]}>
                    <p className={styles["table-competition"]}>
                      {goal.competition}
                    </p>
                    <p className={styles["table-match-detail"]}>
                      {goal.matchDetail}
                    </p>
                  </div>
                </div>
                <TeamResult
                  result={{
                    team: goal.team,
                    rival: goal.rival,
                    julianGoal: goal.julianGoal,
                    rivalGoal: goal.rivalGoal,
                  }}
                />
                <WatchButton goal={goal} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
