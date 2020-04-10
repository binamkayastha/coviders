import React from "react";
import { Button } from "./Button";

export const Sections = ({ sections: items, visible = true }) => {
  return (
    <>
      {items.map(item => (
        <section
          key={item.text}
          style={{
            width: "100%",
            margin: "30px auto",
            padding: "2vh 40px",
            boxSizing: "border-box",
            borderLeft: "3px solid lightgreen",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            textAlign: "left",
            position: "relative"
          }}
        >
          <h2>{item.title}</h2>
          {item.text}
          {item.link && (
            <Button link={item.link.href}> {item.link.text}</Button>
          )}
        </section>
      ))}
    </>
  );
};
