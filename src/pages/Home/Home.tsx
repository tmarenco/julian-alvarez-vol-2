import { Bio } from "../../components/Bio/Bio";
import { Goals } from "../../components/Goals/Goals";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <>
      <Landing />
      <Bio />
      <Goals />
    </>
  );
};
