import { TeamResult } from "../shared/components/TeamResult/TeamResult";
import { WatchButton } from "../shared/components/WatchButton/WatchButton";
import styles from "./tables.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const TableDesktop = () => {
  return (
    <>
      <div className={styles["table-container"]}>
        <div className={styles["table-item"]}>
          <div className={styles["table-item-desktop-content"]}>
            <div className={styles["table-desktop-icon-container"]}>
              <FavoriteIcon style={{ opacity: "10%", cursor: "pointer" }} />
            </div>
            <div className={styles["table-desktop-items-container"]}>
              <div className={styles["table-desktop-competition-container"]}>
                <div
                  className={styles["table-desktop-competition-border"]}
                ></div>
                <div className={styles["table-desktop-competition-content"]}>
                  <p className={styles["table-competition"]}>Premier League</p>
                  <p className={styles["table-match-detail"]}>Matchday 27</p>
                </div>
              </div>
              <TeamResult />
              <WatchButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
