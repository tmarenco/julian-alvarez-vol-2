import { useContext } from "react";
import styles from "./bio.module.css";
import { ActiveTeamContext } from "../../context/active-team/active-team.context";

export const Bio = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const colorStyle = {
    color: `var(--color-${activeTeam.short})`,
  };

  return (
    <>
      <div className={styles["bio-container"]}>
        <p className={styles["bio-background-text"]}>ÁLVAREZ</p>
        <div className={styles["bio-content"]}>
          <div className={styles["bio-data"]}>
            <div className={styles["bio-heading-data"]}>
              <div className={styles["bio-number"]}>
                <h2>Number</h2>
                <h1 style={colorStyle}>19 | 09</h1>
              </div>
              <div className={styles["bio-position"]}>
                <h2>Position</h2>
                <h1 style={colorStyle}>FWD</h1>
              </div>
            </div>
            <div className={styles["bio-text-data"]}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto totam aliquam aspernatur quasi impedit, quam tempore
                iure ipsa id expedita suscipit inventore dicta.
              </p>
            </div>
          </div>
          <div className={styles["bio-image"]}>
            <img
              src="/src/assets/images/julian-home/julian-world-cup.png"
              alt="julian-world-cup"
            />
          </div>
        </div>
      </div>
    </>
  );
};
