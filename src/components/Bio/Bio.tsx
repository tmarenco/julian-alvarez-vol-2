import { useContext } from "react";
import styles from "./bio.module.css";
import { ActiveTeamContext } from "../../context/active-team/active-team.context";

const julianInfo = [
  {
    label: "Name",
    value: "Julián 'Araña' Álvarez",
  },
  {
    label: "Birth",
    value: "31/01/2000 | Calchín, Córdoba (ARG)",
  },
  {
    label: "Nationality",
    value: "Argentine",
  },
  {
    label: "Height / Weight",
    value: "1,70m | 71kg",
  },
  {
    label: "Strong foot",
    value: "Right",
  },
];

export const Bio = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const colorStyle = {
    color: `var(--color-primary-${activeTeam.short})`,
  };

  return (
    <>
      <div id={"bio"} className={styles["bio-container"]}>
        <div className={styles["bio-white-gradient"]}></div>
        <p className={styles["bio-background-text"]}>ÁLVAREZ</p>
        <div className={styles["bio-content"]}>
          <div className={styles["bio-data"]}>
            <div className={styles["bio-heading-data"]}>
              <div className={styles["bio-number"]}>
                <p className={styles["bio-heading-title"]}>Number</p>
                <p className={styles["bio-heading-info"]} style={colorStyle}>
                  {activeTeam.number}
                </p>
              </div>
              <div className={styles["bio-position"]}>
                <p className={styles["bio-heading-title"]}>Position</p>
                <p className={styles["bio-heading-info"]} style={colorStyle}>
                  FWD
                </p>
              </div>
            </div>
            <div className={styles["bio-text-data"]}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto totam aliquam aspernatur quasi impedit, quam tempore
                iure ipsa id expedita suscipit inventore dicta. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Architecto totam
                aliquam aspernatur quasi impedit, quam tempore iure ipsa id
                expedita suscipit inventore dicta. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Architecto totam aliquam
                aspernatur quasi impedit, quam tempore iure ipsa id expedita
                suscipit inventore dicta.
              </p>
            </div>
            <div className={styles["bio-info-data"]}>
              {julianInfo.map((info) => (
                <div className={styles["bio-info-container"]} key={info.label}>
                  <p className={styles["bio-info-label"]}>{info.label}</p>
                  <p className={styles["bio-info-value"]}>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["bio-image"]}>
            <img
              src={`/src/assets/images/julian-trophy/trophy-${activeTeam.short}.png`}
              alt="julian-trophy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
