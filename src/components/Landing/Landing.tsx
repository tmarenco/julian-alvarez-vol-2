import { useContext } from "react";
import styles from "./landing.module.css";
import { ActiveTeamContext } from "../../context/active-team/active-team.context";
import { motion } from "framer-motion";
import { Teams } from "../../shared/components/Teams/Teams";

const landingData = [
  {
    title: "Debut",
    data: "30.07.22",
  },
  {
    title: "Goal Avergae",
    data: "0.34",
  },
  {
    title: "Titles",
    data: "5",
  },
];

export const Landing = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const colorStyle = {
    color: `var(--color-${activeTeam.short})`,
  };

  return (
    <>
      <div className={styles["landing-container"]}>
        <motion.div
          className={styles.landing}
          key={activeTeam.team}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles["landing-urban-content"]}>
            <h1 style={colorStyle}>ALVAREZ</h1>
          </div>
          <div className={styles["landing-img-content"]}>
            <img
              className={styles["landing-img"]}
              src={`/src/assets/images/julian-home/julian-${activeTeam.short}.png`}
              alt="alvarez-home"
            />
          </div>
          <div className={styles["landing-teams-content"]}>
            <Teams teamColor={"white"} direction={"column"} />
          </div>
          <div className={styles["landing-data-content"]}>
            <div className={styles["landing-data"]}>
              <div className={styles["landing-main-data"]}>
                <h2>Julían Álvarez</h2>
                <p>ARG</p>
                <p>24 Y.0.</p>
              </div>
              <div className={styles["landing-secondary-data"]}>
                {landingData.map((item) => (
                  <div key={item.title} className={styles["landing-box"]}>
                    <p
                      style={colorStyle}
                      className={styles["landing-box-title"]}
                    >
                      {item.title.toUpperCase()}
                    </p>
                    <p className={styles["landing-box-data"]}>{item.data}</p>
                  </div>
                ))}
              </div>
              <div className={styles["landing-icon"]}>
                <img
                  className={styles["landing-arrow"]}
                  src="/src/assets/images/icons/arrow-down-white.svg"
                  alt="mouse"
                />
                <img
                  className={styles["landing-mouse"]}
                  src="/src/assets/images/icons/mouse-white.svg"
                  alt="mouse"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
