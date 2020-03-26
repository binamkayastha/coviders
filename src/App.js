import React from "react";
import "./styles.css";
import { Background } from "./sections/Background";
import { Intro } from "./sections/Intro";
import { Tracks } from "./sections/Tracks";
import { Join } from "./sections/Join";
import { Timeline } from "./sections/Timeline";
import { Sponsors } from "./sections/Sponsors";

export default function App() {
  return (
    <div className="App">
      <Background />
      <div style={{ position: "absolute", width: "100vw" }}>
        <Intro />
        <Tracks />
        <Join />
        <Timeline />
        <Sponsors />
      </div>
    </div>
  );
}
