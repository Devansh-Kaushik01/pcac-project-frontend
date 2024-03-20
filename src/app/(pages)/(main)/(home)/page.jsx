import Hero from "./components/hero/hero"
import AboutUs from "./components/aboutUs/aboutUs"
import WhatWeDo from "./components/whatwedo/whatWeDo"
import Explore from "./components/explore/explore"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Explore />
    </Fragment>
  );
}

export default Home;