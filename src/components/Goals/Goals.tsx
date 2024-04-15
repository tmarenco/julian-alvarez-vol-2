import { useContext, useState } from "react";
import { Teams } from "../../shared/components/Teams/Teams";
import styles from "./goals.module.css";
import { ActiveTeamContext } from "../../context/active-team/active-team.context";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const seasons = [
  "2018/2019",
  "2019/2020",
  "2020/2021",
  "2021/2022",
  "2022/2023",
  "2023/2024",
];

const competitions = [
  "Copa Libertadores",
  "Copa Argentina",
  "Liga de Fútbol Profesional",
  "Champions League",
  "Premier League",
  "FA Cup",
];

export const Goals = () => {
  const { activeTeam } = useContext(ActiveTeamContext);

  const [season, setSeason] = useState("");
  const [competition, setCompetition] = useState("");

  const showFavorites = (checked: boolean) => {
    console.log(checked);
  };

  const colorStyle = {
    color: `var(--color-${activeTeam.short})`,
  };

  return (
    <>
      <div id={"goals"} className={styles["goals-container"]}>
        <div className={styles["goals-teams-filters-container"]}>
          <Teams teamColor={"dark"} direction={"row"} />
          <div className={styles["goals-teams-stats"]}>
            <div className={styles["goals-team-stat"]}>
              <p className={styles["goals-team-title"]}>Total matches</p>
              <p className={styles["goals-team-value"]} style={colorStyle}>
                90
              </p>
            </div>
            <div className={styles["goals-team-separator"]}></div>
            <div className={styles["goals-team-stat"]}>
              <p className={styles["goals-team-title"]}>Goals scored</p>
              <p className={styles["goals-team-value"]} style={colorStyle}>
                33
              </p>
            </div>
            <div className={styles["goals-team-separator"]}></div>
            <div className={styles["goals-team-stat"]}>
              <p className={styles["goals-team-title"]}>Assists</p>
              <p className={styles["goals-team-value"]} style={colorStyle}>
                17
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
                renderValue={() => (season ? season : "Season")}
                value={season}
                sx={{
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
                  value={"All"}
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
                renderValue={() => (competition ? competition : "Competition")}
                value={competition}
                sx={{
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
                  value={"All"}
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
                  sx={{
                    color: "var(--fields-background)",
                    "&.Mui-checked": {
                      color: colorStyle.color,
                    },
                  }}
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
        <div className={styles["goals-table"]}></div>
        <div className={styles["goals-go-home"]}>Go to Home</div>
      </div>
    </>
  );
};
