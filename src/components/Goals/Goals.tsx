import { useContext, useEffect, useState } from "react";
import { Teams } from "../../shared/components/Teams/Teams";
import styles from "./goals.module.css";
import { ActiveTeamContext } from "../../context/active-team/active-team.context";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableDesktop } from "../Tables/components/TableDesktop";
import { TableMobile } from "../Tables/components/TableMobile";
import { goals } from "../../data/goals";
import { motion } from "framer-motion";
import { GoalInterface } from "../../interfaces/goal-interface";
import { getLocalStorage } from "../../utils/handleLocalStorage";

export const Goals = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const colorStyle = {
    color: `var(--color-secondary-${activeTeam.short})`,
  };

  const [season, setSeason] = useState("");
  const [favoriteCheckbox, setFavoriteCheckbox] = useState(false);
  const [competition, setCompetition] = useState("");
  const [activeTeamGoals, setActiveTeamGoals] = useState(
    goals.filter((goal) => goal.team === activeTeam.team)
  );
  const [favoriteGoals, setFavoriteGoals] = useState<GoalInterface[]>([]);

  const [seasons, setSeasons] = useState([
    ...new Set(
      goals
        .filter((goal) => goal.team === activeTeam.team)
        .map((goal) => goal.season)
    ),
  ]);

  const [competitions, setCompetitions] = useState([
    ...new Set(
      goals
        .filter((goal) => goal.team === activeTeam.team)
        .map((goal) => goal.competition)
    ),
  ]);

  const [filteredGoals, setFilteredGoals] = useState(activeTeamGoals);

  const showFavorites = (checked: boolean) => {
    setFavoriteCheckbox(checked);
    //*OPTION 1: Show only the favorites without the other filters.
    //TODO: Set the filters to the default value here
    //TODO: When the other filters change, change the favorite to false
    // setFilteredGoals(
    //   checked
    //     ? favoriteGoals.filter((fav) => fav.team === activeTeam.team)
    //     : activeTeamGoals
    // );

    //*OPTION 2: Show only the favorites for the current filters.
    checked
      ? setFilteredGoals(
          filteredGoals.filter((item) => {
            return favoriteGoals.some((favoriteItem) => {
              return favoriteItem.order === item.order;
            });
          })
        )
      : filterGoals();
  };

  useEffect(() => {
    setActiveTeamGoals(goals.filter((goal) => goal.team === activeTeam.team));
    setFilteredGoals(goals.filter((goal) => goal.team === activeTeam.team));
    setFavoriteCheckbox(false);
    seasonSetter();
    competitionSetter();
  }, [activeTeam]);

  useEffect(() => {
    filterGoals();
    setFavoriteCheckbox(false);
  }, [season, competition]);

  useEffect(() => {
    getStorageData();
  }, []);

  const seasonSetter = () => {
    setSeason("");
    setSeasons([
      ...new Set(
        goals
          .filter((goal) => goal.team === activeTeam.team)
          .map((goal) => goal.season)
      ),
    ]);
  };

  const competitionSetter = () => {
    setCompetition("");
    setCompetitions([
      ...new Set(
        goals
          .filter((goal) => goal.team === activeTeam.team)
          .map((goal) => goal.competition)
      ),
    ]);
  };

  const filterGoals = () => {
    const selectedCompetition =
      competitions.find((comp) => comp === competition) ?? "";
    const selectedSeason =
      seasons.find((seasonItem) => seasonItem === season) ?? "";

    setFilteredGoals(
      activeTeamGoals.filter(
        (goal) =>
          (selectedSeason === ""
            ? goal.season !== selectedSeason
            : goal.season === selectedSeason) &&
          (selectedCompetition === ""
            ? goal.competition !== selectedCompetition
            : goal.competition === selectedCompetition)
      )
    );
  };

  const getStorageData = () => {
    setFavoriteGoals(getLocalStorage);
  };

  const handleFavorite = (goal: GoalInterface) => {
    const updatedFavoriteGoals = [...favoriteGoals];
    const isFavoriteIndex = updatedFavoriteGoals.findIndex(
      (favorite) => favorite.order === goal.order
    );
    isFavoriteIndex !== -1
      ? updatedFavoriteGoals.splice(isFavoriteIndex, 1)
      : updatedFavoriteGoals.push(goal);
    setFavoriteGoals(updatedFavoriteGoals);
    localStorage.setItem("favoriteGoals", JSON.stringify(updatedFavoriteGoals));
  };

  return (
    <>
      <div className={styles["goals-container"]}>
        <motion.div
          key={activeTeam.team}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          id={"goals"}
          className={styles["goals-content"]}
        >
          <div className={styles["goals-teams-filters-container"]}>
            <Teams teamColor={"dark"} direction={"row"} />
            <div className={styles["goals-teams-stats"]}>
              <div className={styles["goals-team-stat"]}>
                <p className={styles["goals-team-title"]}>Total matches</p>
                <p className={styles["goals-team-value"]} style={colorStyle}>
                  {activeTeam.matches}
                </p>
              </div>
              <div className={styles["goals-team-separator"]}></div>
              <div className={styles["goals-team-stat"]}>
                <p className={styles["goals-team-title"]}>Goals scored</p>
                <p className={styles["goals-team-value"]} style={colorStyle}>
                  {activeTeam.goals}
                </p>
              </div>
              <div className={styles["goals-team-separator"]}></div>
              <div className={styles["goals-team-stat"]}>
                <p className={styles["goals-team-title"]}>Assists</p>
                <p className={styles["goals-team-value"]} style={colorStyle}>
                  {activeTeam.assists}
                </p>
              </div>
            </div>
            <div className={styles["goals-teams-inputs"]}>
              <FormControl
                size="small"
                className={styles["goals-select"]}
                sx={{ borderRadius: "4px" }}
              >
                <Select
                  IconComponent={ExpandMoreIcon}
                  displayEmpty={true}
                  renderValue={() =>
                    season
                      ? seasons.find((seas) => seas === season)
                        ? seasons.find((seas) => seas === season)
                        : "All"
                      : "Season"
                  }
                  value={season}
                  sx={{
                    height: "2rem",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colorStyle.color,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: colorStyle.color,
                    },
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    color: "rgba(182, 182, 182, 1);",
                    fontFamily: "font-primary-regular",
                  }}
                  onChange={(e) => setSeason(e.target.value as string)}
                >
                  <MenuItem
                    value={"all"}
                    sx={{ fontFamily: "font-primary-regular" }}
                  >
                    All
                  </MenuItem>
                  {seasons.map((season) => (
                    <MenuItem
                      key={season}
                      value={season}
                      sx={{ fontFamily: "font-primary-regular" }}
                    >
                      {season}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                size="small"
                className={styles["goals-select"]}
                sx={{ borderRadius: "4px" }}
              >
                <Select
                  IconComponent={ExpandMoreIcon}
                  displayEmpty={true}
                  renderValue={() =>
                    competition
                      ? competitions.find((comp) => comp === competition)
                        ? competitions.find((comp) => comp === competition)
                        : "All"
                      : "Competition"
                  }
                  value={competition}
                  sx={{
                    height: "2rem",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colorStyle.color,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: colorStyle.color,
                    },
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    color: "rgba(182, 182, 182, 1)",
                    fontFamily: "font-primary-regular",
                  }}
                  onChange={(e) => setCompetition(e.target.value as string)}
                >
                  <MenuItem
                    value={"all"}
                    sx={{ fontFamily: "font-primary-regular" }}
                  >
                    All
                  </MenuItem>
                  {competitions.map((competition) => (
                    <MenuItem
                      key={competition}
                      value={competition}
                      sx={{ fontFamily: "font-primary-regular" }}
                    >
                      {competition}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => showFavorites(e.target.checked)}
                    checked={favoriteCheckbox}
                    value={favoriteCheckbox}
                    sx={{
                      color: "var(--fields-background)",
                      "&.Mui-checked": {
                        color: colorStyle.color,
                      },
                    }}
                    icon={
                      <SvgIcon>
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          data-testid="CheckBoxBlankIcon"
                        >
                          <path
                            d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5"
                            fill="var(--fields-background)"
                          ></path>
                        </svg>
                      </SvgIcon>
                    }
                  />
                }
                label="Favorites"
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontFamily: "font-primary-regular",
                  },
                }}
              />
            </div>
          </div>
          <div className={styles["goals-table-container"]}>
            <div className={styles["goals-table-content"]}>
              <div
                className={styles["goals-table-background-image"]}
                style={{
                  backgroundImage:
                    competition !== "" && competition !== "all"
                      ? `url(/src/assets/images/competitions/${competition
                          .toLowerCase()
                          .replace(/\s+/g, "-")}-logo.svg)`
                      : "none",
                }}
              ></div>
              <div className={styles["goals-table"]}>
                <div className={styles["table-desktop"]}>
                  <TableDesktop
                    goals={filteredGoals}
                    favoriteGoals={favoriteGoals}
                    handleFavorite={handleFavorite}
                  />
                </div>
                <div className={styles["table-mobile"]}>
                  <TableMobile
                    goals={filteredGoals}
                    favoriteGoals={favoriteGoals}
                    handleFavorite={handleFavorite}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["goals-go-home-container"]}>
            <div className={styles["goals-go-home-content"]}>
              <p>Go to Home ^</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
