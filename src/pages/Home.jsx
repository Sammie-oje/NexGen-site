import Header from "../components/blocks/Header.jsx";
import Reasons from "../components/blocks/Reasons.jsx";
import Services from "../components/blocks/Services.jsx";
import Works from "../components/blocks/Works.jsx";
import Testimonials from "../components/blocks/Testimonials.jsx";
import FAQ from "../components/blocks/FAQ.jsx";

function Home(params) {
  return (
    <>
      <Header />
      <Reasons />
      <Services />
      <Works />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
