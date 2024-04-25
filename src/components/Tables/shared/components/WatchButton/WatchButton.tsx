import { useNavigate } from "react-router-dom";
import { GoalInterface } from "../../../../../interfaces/goal-interface";
import styles from "./watch-button.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface Props {
  goal: GoalInterface;
}

export const WatchButton = ({ goal }: Props) => {
  const navigate = useNavigate();

  const navigateToGoal = () => {
    navigate("/goal/" + goal.order);
  };

  return (
    <>
      <div
        className={styles["table-button-container"]}
        onClick={navigateToGoal}
      >
        <p>Watch Goal</p>
        <PlayArrowIcon />
      </div>
    </>
  );
};
