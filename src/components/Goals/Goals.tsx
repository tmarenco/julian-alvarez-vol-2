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

const seasons = [
  "2018/2019",
  "2019/2020",
  "2020/2021",
  "2021/2022",
  "2022/2023",
  "2023/2024",
];

const competitions = [
  {
    name: "Copa Libertadores",
    value: "copa-libertadores",
  },
  {
    name: "Copa Argentina",
    value: "copa-argentina",
  },
  {
    name: "Liga de Fútbol Profesional",
    value: "liga-argentina",
  },
  {
    name: "Superliga Argentina",
    value: "superliga-argentina",
  },
  {
    name: "Champions League",
    value: "champions-league",
  },
  {
    name: "Premier League",
    value: "premier-league",
  },
  {
    name: "FA Cup",
    value: "fa-cup",
  },
  {
    name: "EFL Cup",
    value: "efl-cup",
  },
];

export const Goals = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const [season, setSeason] = useState("");
  const [competition, setCompetition] = useState("");
  const [activeTeamGoals, setActiveTeamGoals] = useState(
    goals.filter((goal) => goal.team === activeTeam.team)
  );

  const [filteredGoals, setFilteredGoals] = useState(activeTeamGoals);

  const showFavorites = (checked: boolean) => {
    console.log(checked);
  };

  const colorStyle = {
    color: `var(--color-secondary-${activeTeam.short})`,
  };

  useEffect(() => {
    setActiveTeamGoals(goals.filter((goal) => goal.team === activeTeam.team));
    setSeason("");
    setCompetition("");
  }, [activeTeam]);

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
                      ? competitions.find((comp) => comp.value === competition)
                        ? competitions.find(
                            (comp) => comp.value === competition
                          )?.name
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
                      key={competition.value}
                      value={competition.value}
                      sx={{ fontFamily: "font-primary-regular" }}
                    >
                      {competition.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => showFavorites(e.target.checked)}
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
                      ? `url(/src/assets/images/competitions/${competition}-logo.svg)`
                      : "none",
                }}
              ></div>
              <div className={styles["goals-table"]}>
                <div className={styles["table-desktop"]}>
                  <TableDesktop goals={filteredGoals} />
                </div>
                <div className={styles["table-mobile"]}>
                  <TableMobile goals={filteredGoals} />
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
