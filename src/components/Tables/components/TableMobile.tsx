import styles from "./tables.module.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TeamResult } from "../shared/components/TeamResult/TeamResult";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const TableMobile = () => {
  return (
    <>
      <div className={styles["table-container"]}>
        <div className={styles["table-item"]}>
          <div className={styles["table-mobile-row"]}>
            <p>
              <span className={styles["table-competition"]}>
                Premier League |
              </span>
              <span className={styles["table-match-detail"]}> Matchday 27</span>
            </p>
            <div>
              <ShareIcon style={{ cursor: "pointer" }} />
              <FavoriteIcon style={{ opacity: "10%", cursor: "pointer" }} />
            </div>
          </div>
          <div className={styles["table-mobile-row"]}>
            <TeamResult />
            <div className={styles["table-button-container"]}>
              <p>Watch Goal</p>
              <PlayArrowIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
