import React from "react";
import { Particles } from "react-particles-js";

export const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to top, #73c8a9, #373b44)"
      }}
    >
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 2
            }
          }
        }}
      />
    </div>
  );
};
