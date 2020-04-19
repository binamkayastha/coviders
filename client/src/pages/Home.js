import React from "react";
import { Intro } from "../sections/Intro";
import { Tracks } from "../sections/Tracks";
import { Join } from "../sections/Join";
// import { Timeline } from "../sections/Timeline";
import { Sponsors } from "../sections/Sponsors";

export const Home = () => {
  return (
    <>
      <Intro />
      <Tracks />
      <Join />
      {/* <Timeline /> */}
      <Sponsors />
    </>
  );
};
