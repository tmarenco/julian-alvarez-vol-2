import styles from "./header.module.css";
import { Teams } from "../../shared/components/Teams/Teams";
import { Link } from "react-scroll";

const navOptions = ["Home", "Bio", "Goals"];

export const Header = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["header-items"]}>
            <div className={styles["header-teams"]}>
              <Teams teamColor={"white"} direction={"row"} />
            </div>
            <div className={styles["header-nav-options"]}>
              {navOptions.map((option) => (
                <Link
                  className={styles["nav-option"]}
                  to={option.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={100}
                  key={option}
                  offset={-10}
                  activeClass={styles["header-option-active"]}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
