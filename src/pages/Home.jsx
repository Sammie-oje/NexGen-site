import Header from "../components/blocks/Header.jsx";
import Reasons from "../components/blocks/Reasons.jsx";
import Services from "../components/blocks/Services.jsx";
import Works from "../components/blocks/Works.jsx";

function Home(params) {
  return (
    <>
      <Header />
      <Reasons />
      <Services />
      <Works />
    </>
  );
}

export default Home;


