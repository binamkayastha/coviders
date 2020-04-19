import React, { useState, useRef, useEffect } from "react";
import { Sections } from "./Sections";
import useWindowScroll from "@react-hook/window-scroll";

export const Section = ({ title, details, subsections }) => {
  // Set the subsections to visible only if this section is at the middle/top of the page
  const ref = useRef();
  const scroll = useWindowScroll();
  const [subsectionsVisible, setSubsectionsVisible] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const top = ref.current.getBoundingClientRect().top;
    setSubsectionsVisible(top < scroll);
  }, [scroll, ref]);

  return (
    <section
      ref={ref}
      style={{
        maxWidth: 900,
        width: "80%",
        margin: "50px auto",
        boxSizing: "border-box",
        overfloe: "hidden"
      }}
    >
      <h1 style={{ fontSize: "28px" }}>{title}</h1>
      <div>{details}</div>
      <Sections sections={subsections} visible={subsectionsVisible} />
    </section>
  );
};
