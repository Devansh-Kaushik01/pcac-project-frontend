import Hero from "./components/hero/hero"
import AboutUs from "./components/aboutUs/aboutUs"
import WhatWeDo from "./components/whatwedo/whatWeDo"
import Explore from "./components/explore/explore"
import Video from "./components/video/video"
import Question from "./components/questions/questions"
import Subscribe from "./components/subscribe/subscribe"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Explore />
      <Video/>
      <Question/>
      <Subscribe/>
    </Fragment>
  );
}

export default Home;