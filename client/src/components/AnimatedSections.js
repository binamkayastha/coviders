import React from "react";
import { Trail, animated } from "react-spring/renderprops";
import { Button } from "./Button";

export const Sections = ({ sections: items, visible = true }) => {
  const hiddenStyle = {
    transform: "translate3d(100px,0, 0)",
    opacity: 0
  };
  const visibleStyle = {
    transform: "translate3d(0px,0, 0)",
    opacity: 1
  };
  return (
    <>
      <Trail
        items={items}
        keys={item => item.title}
        from={visible ? hiddenStyle : visibleStyle}
        to={visible ? visibleStyle : hiddenStyle}
      >
        {item => props => (
          <animated.div style={props} key={item.title}>
            <section
              style={{
                width: "100%",
                margin: "30px auto",
                padding: "2vh 40px",
                boxSizing: "border-box",
                borderLeft: "3px solid lightgreen",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                textAlign: "left"
              }}
            >
              <h2>{item.title}</h2>
              {item.text}
              {item.link && (
                <Button link={item.link.href}> {item.link.text}</Button>
              )}
            </section>
          </animated.div>
        )}
      </Trail>
    </>
  );
};
