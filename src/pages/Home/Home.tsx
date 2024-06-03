import { useContext, useEffect } from "react";
import { Bio } from "../../components/Bio/Bio";
import { Goals } from "../../components/Goals/Goals";
import { Landing } from "../../components/Landing/Landing";
import { HeaderOptionsContext } from "../../context/header-options/header-options.context";
import { headerHome } from "../../data/header";
import { Spinner } from "../../shared/components/Spinner/Spinner";
import { ErrorComponent } from "../../shared/components/ErrorComponent/ErrorComponent";
import { TeamsContext } from "../../context/teams/teams.context";

export const Home = () => {
  const { setHeaderOptions } = useContext(HeaderOptionsContext);
  const { activeTeam, isLoading } = useContext(TeamsContext);

  useEffect(() => {
    setHeaderOptions(headerHome);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (!activeTeam) {
    return <ErrorComponent />;
  }

  return (
    <>
      <Landing />
      <Bio />
      <Goals />
    </>
  );
};
