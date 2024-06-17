import { useContext } from "react";
import styles from "./landing.module.css";
import { Teams } from "../../../shared/components/Teams/Teams";
import { calculateAge } from "../../../utils/calculateAge";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { IncrementAnimation } from "../../../shared/components/IncrementAnimation/IncrementAnimation";
import { TeamsContext } from "../../../context/teams/teams.context";

const julianAge = calculateAge("31/01/2000");

export const Landing = () => {
  const { activeTeam } = useContext(TeamsContext);
  const colorStyle = {
    color: `var(--color-primary-${activeTeam!.short})`,
  };

  const landingData = [
    {
      title: "Debut",
      data: activeTeam!.debut.toString().split("."),
    },
    {
      title: "Goal Average",
      data: (activeTeam!.goals / activeTeam!.matches)
        .toFixed(2)
        .toString()
        .split("."),
    },
    {
      title: "Titles",
      data: activeTeam!.titles.toString().split("."),
    },
  ];

  return (
    <>
      <div className={styles["landing-container"]}>
        <motion.div
          className={styles.landing}
          key={activeTeam!.team}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <div className={styles["landing-urban-content"]}>
            <h1 style={colorStyle}>ALVAREZ</h1>
          </div>
          <div className={styles["landing-img-content"]}>
            <img
              className={styles["landing-img"]}
              src={`/src/assets/images/julian-home/julian-${
                activeTeam!.short
              }.png`}
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
                <p>{julianAge} Y.0.</p>
              </div>
              <div className={styles["landing-secondary-data"]}>
                {landingData.map((ldItem) => (
                  <div key={ldItem.title} className={styles["landing-box"]}>
                    <p
                      style={colorStyle}
                      className={styles["landing-box-title"]}
                    >
                      {ldItem.title.toUpperCase()}
                    </p>

                    <p className={styles["landing-box-data"]}>
                      {ldItem.data.map((number, index) => (
                        <span key={index}>
                          {number.startsWith("0") ? (
                            <>
                              <span>0</span>
                              {number.length > 1 && (
                                <IncrementAnimation
                                  data={Number(number.slice(1))}
                                />
                              )}
                            </>
                          ) : (
                            <IncrementAnimation data={Number(number)} />
                          )}
                          {index !== ldItem.data.length - 1 && <span>.</span>}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                className={styles["landing-arrow"]}
                to={"bio"}
                spy={true}
                smooth={true}
                duration={100}
                key={"bio"}
                offset={0}
              >
                <img
                  src="/src/assets/images/icons/arrow-down-white.svg"
                  alt="mouse"
                />{" "}
              </Link>
            </div>
          </div>
        </motion.div>
        <Link
          className={styles["landing-mouse"]}
          to="bio"
          spy={true}
          smooth={true}
          duration={100}
          key={"bio"}
          offset={0}
        >
          <img src="/src/assets/images/icons/mouse-white.svg" alt="mouse" />
        </Link>
      </div>
    </>
  );
};
