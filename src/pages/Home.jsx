import Hero from "../components/blocks/Hero.jsx";
import Stats from "../components/blocks/Stats.jsx";
import Reasons from "../components/blocks/Reasons.jsx";
import Services from "../components/blocks/Services.jsx";
import Works from "../components/blocks/Works.jsx";
import Testimonials from "../components/blocks/Testimonials.jsx";
import FAQ from "../components/blocks/FAQ.jsx";
import * as content from "../content/home.js";

function Home(params) {
  return (
    <>
      <header>
        <Hero {...content.hero} />
        <Stats {...content.stats} />
      </header>
      <Reasons {...content.reasons} />
      <Services {...content.services} />
      <Works {...content.works} />
      <Testimonials {...content.testimonials} />
      <FAQ {...content.faq} />
    </>
  );
}

export default Home;
