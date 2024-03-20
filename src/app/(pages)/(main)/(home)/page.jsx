import Hero from "./components/hero/hero"
import AboutUs from "./components/about-section/aboutUs"
import WhatWeDo from "./components/whatwedo/whatWeDo"

const Home = () => {
  return (
    <>
      {/* Hero-Section */}
      <Hero/>

      {/* About-section */}
     <AboutUs/>
      {/* {What We DO - section} */}
      <WhatWeDo/>
    </>
  );
}

export default Home;