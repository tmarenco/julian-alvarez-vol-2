import { useContext, useEffect } from "react";
import { Bio } from "../../components/Bio/Bio";
import { Goals } from "../../components/Goals/Goals";
import { Landing } from "../../components/Landing/Landing";
import { HeaderOptionsContext } from "../../context/header-options/header-options.context";
import { headerHome } from "../../data/header";

export const Home = () => {
  const { setHeaderOptions } = useContext(HeaderOptionsContext);

  useEffect(() => setHeaderOptions(headerHome), []);

  return (
    <>
      <Landing />
      <Bio />
      <Goals />
    </>
  );
};
