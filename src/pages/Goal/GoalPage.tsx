import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./goal-page.module.css";
import { goals } from "../../data/goals";
import { teams } from "../../data/teams";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HeaderOptionsContext } from "../../context/header-options/header-options.context";
import { headerGoalPage } from "../../data/header";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/handleLocalStorage";
import { GoalInterface } from "../../interfaces/goal-interface";
export const GoalPage = () => {
  const { setHeaderOptions } = useContext(HeaderOptionsContext);

  useEffect(() => setHeaderOptions(headerGoalPage), []);

  const { id } = useParams();
  const navigate = useNavigate();

  const activeGoal = goals.find((goal) => goal.order === Number(id));
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(
      !!(getLocalStorage() as GoalInterface[]).find(
        (fav) => fav.order === activeGoal?.order
      )
    );
  }, [activeGoal]);

  if (!activeGoal) {
    return <Navigate to="/" />;
  }
  const activeTeam = teams.find((team) => team.team === activeGoal.team);

  const colorStyle = {
    color: `var(--color-primary-${activeTeam!.short})`,
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    setLocalStorage(getLocalStorage(), activeGoal);
  };

  return (
    <>
      <div className={styles["goal-page-container"]}>
        <div className={styles["goal-page-content"]}>
          <div
            className={styles["goal-page-background-image"]}
            style={{
              backgroundImage: `url('/src/assets/images/stadiums/stadium-${activeTeam?.short}.jpg')`,
            }}
          ></div>
          <div className={styles["goal-page-data-container"]}>
            <div className={styles["goal-page-data-content"]}>
              <p className={styles["goal-match-detail"]}>
                {activeGoal.matchDetail}
              </p>
              <p className={styles["goal-match-result"]}>
                <span style={colorStyle}>
                  {activeGoal.team} {activeGoal.julianGoal}
                </span>
                - {activeGoal.rival} {activeGoal.rivalGoal}
              </p>
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="100%"
                  src={activeGoal.videoLink}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className={styles["goal-date-icon-container"]}>
                <div className="d-flex">
                  <p className={`me-1 ${styles["goal-date"]}`}>
                    {activeGoal.date} |
                  </p>
                  <p>
                    Minute {activeGoal.minute}
                    {"´ "}
                    {Number(activeGoal.minute) > 45 ? "FH" : "SH"}
                  </p>
                </div>
                <div className="d-flex">
                  <ShareIcon style={{ cursor: "pointer" }} />
                  <FavoriteIcon
                    style={{
                      cursor: "pointer",
                      opacity: isFavorite ? "100%" : "10%",
                    }}
                    onClick={handleFavorite}
                  />
                </div>
              </div>
              <p className={styles["goal-description"]}>
                {activeGoal.description}
              </p>
              <div className={styles["goal-buttons-container"]}>
                <Button
                  onClick={() => navigate("/goal/" + (activeGoal.order - 1))}
                  className="me-2"
                  sx={{
                    textTransform: "none",
                    "&:disabled": {
                      opacity: 0.4,
                    },
                  }}
                  disabled={activeGoal.order === 1}
                >
                  &lt; Previous
                </Button>
                <Button
                  onClick={() => navigate("/goal/" + (activeGoal.order + 1))}
                  className="ms-2"
                  sx={{
                    textTransform: "none",
                    "&:disabled": {
                      opacity: 0.4,
                    },
                  }}
                  disabled={activeGoal.order === goals.length}
                >
                  Next &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
