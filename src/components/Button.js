import React from "react";

export const Button = ({ children, link }) => {
  return (
    <a
      style={{
        background: "lightgreen",
        borderRadius: 25,
        color: "black",
        padding: "10px 20px",
        boxSizing: "border-box",
        cursor: "pointer",
        position: "absolute",
        top: 30,
        right: 20
      }}
      href={link}
    >
      {children}
    </a>
  );
};
