import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./goal-page.module.css";
import { goals } from "../../data/goals";
import { teams } from "../../data/teams";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
export const GoalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activeGoal = goals.find((goal) => goal.order === Number(id));
  if (!activeGoal) {
    return <Navigate to="/" />;
  }
  const activeTeam = teams.find((team) => team.team === activeGoal.team);

  const colorStyle = {
    color: `var(--color-primary-${activeTeam!.short})`,
  };

  return (
    <>
      <div className={styles["goal-page-container"]}>
        <div className={styles["goal-page-content"]}>
          <div
            className={styles["goal-page-background-image"]}
            style={{
              backgroundImage: `url('/src/assets/images/stadiums/stadium-${
                activeTeam?.short
              }.${activeTeam?.short === "city" ? "webp" : "jpg"}')`,
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
              <div>
                <h1>VIDEO</h1>
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
                    }}
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