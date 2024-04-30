import styles from "./header.module.css";
import { Teams } from "../../shared/components/Teams/Teams";
import { Link } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { HeaderOptionsContext } from "../../context/header-options/header-options.context";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { headerOptions } = useContext(HeaderOptionsContext);
  const navigate = useNavigate();
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerItemJustifyContentClass = isWideScreen ? headerOptions.class : "";

  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div
            className={`${styles["header-items"]} ${headerItemJustifyContentClass}`}
          >
            {headerOptions.showTeams && (
              <div className={styles["header-teams"]}>
                <Teams teamColor={"white"} direction={"row"} />
              </div>
            )}
            <div className={styles["header-nav-options"]}>
              {headerOptions.options.map((option) =>
                option.redirection ? (
                  <span
                    key={option.item}
                    className={styles["nav-option"]}
                    onClick={() => navigate(option.url)}
                  >
                    {option.item}
                  </span>
                ) : (
                  <Link
                    className={styles["nav-option"]}
                    to={option.item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={100}
                    key={option.item}
                    offset={0}
                    activeClass={styles["header-option-active"]}
                  >
                    {option.item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
