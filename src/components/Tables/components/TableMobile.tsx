import styles from "./tables.module.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TeamResult } from "../shared/components/TeamResult/TeamResult";
import { WatchButton } from "../shared/components/WatchButton/WatchButton";
import { GoalInterface } from "../../../interfaces/goal-interface";

interface Props {
  goals: GoalInterface[];
}

export const TableMobile = ({ goals }: Props) => {
  return (
    <>
      <div className={styles["table-container"]}>
        {goals.map((goal, index) => (
          <div key={index} className={styles["table-item"]}>
            <div className={styles["table-mobile-row"]}>
              <p>
                <span className={styles["table-competition"]}>
                  {goal.competition} |
                </span>
                <span className={styles["table-match-detail"]}>
                  {" "}
                  {goal.matchDetail}
                </span>
              </p>
              <div>
                <ShareIcon style={{ cursor: "pointer" }} />
                <FavoriteIcon style={{ opacity: "10%", cursor: "pointer" }} />
              </div>
            </div>
            <div className={`${styles["table-mobile-row"]} mt-2`}>
              <TeamResult
                result={{
                  team: goal.team,
                  rival: goal.rival,
                  julianGoal: goal.julianGoal,
                  rivalGoal: goal.rivalGoal,
                }}
              />
              <WatchButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
