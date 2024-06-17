import { useContext, useEffect } from "react";
import { HeaderOptionsContext } from "../../context/header-options/header-options.context";
import { headerHome } from "../../data/header";
import { Spinner } from "../../shared/components/Spinner/Spinner";
import { ErrorComponent } from "../../shared/components/ErrorComponent/ErrorComponent";
import { TeamsContext } from "../../context/teams/teams.context";
import { Content } from "../../components/Content/Content";
import { States } from "../../enums/states.enum";
import { NoTeams } from "../../shared/components/NoTeams/NoTeams";

const StateViews: { [key in States]: () => JSX.Element } = {
  [States.LOADING]: Spinner,
  [States.ERROR]: ErrorComponent,
  [States.COMPLETED]: Content,
  [States.EMPTY]: NoTeams,
};

export const Home = () => {
  const { setHeaderOptions } = useContext(HeaderOptionsContext);
  const { teamsState } = useContext(TeamsContext);

  useEffect(() => {
    setHeaderOptions(headerHome);
  }, []);

  const CurrentView = StateViews[teamsState];

  return (
    <>
      <CurrentView />
    </>
  );
};
