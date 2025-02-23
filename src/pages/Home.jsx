import { Helmet } from "react-helmet";
import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Software Company - FourthD</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <AboutUs />
    </>
  );
};

export default Home;
