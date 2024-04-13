import { Bio } from "../../components/Bio/Bio";
import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Bio />
    </>
  );
};
