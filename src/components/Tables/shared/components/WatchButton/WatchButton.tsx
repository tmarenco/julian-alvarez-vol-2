import styles from "./watch-button.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const WatchButton = () => {
  return (
    <>
      <div className={styles["table-button-container"]}>
        <p>Watch Goal</p>
        <PlayArrowIcon />
      </div>
    </>
  );
};
