import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import { Goals } from "../../components/Goals/Goals";
import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Bio />
      <Goals />
      <Footer />
    </>
  );
};
