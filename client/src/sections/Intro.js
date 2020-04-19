import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { Section } from "../components/Section";

export const Intro = () => {
  // Show a splash screen in the beginning
  const [splash, setSplash] = useState(true);
  setTimeout(() => {
    setSplash(false);
  }, 3500);

  return (
    <>
      <header
        style={{
          height: splash ? "100vh" : "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: splash ? "center" : "flex-end",
          transition: "height 400ms ease"
        }}
      >
        <div
          style={{
            backgroundColor: "lightgreen",
            width: "100%",
            padding: "10px",
            position: "absolute",
            top: 0,
            color: "black",
            textAlign: "center"
          }}
        >
          We are actively looking for volunteers and organizers!{" "}
          <a href="https://forms.gle/Vp3wuniFCsdyawxJ9">Join now</a>
        </div>
        <Logo />
      </header>
      <Section
        title="Coviders Hackathon"
        details="Coviders is an online hackathon for software coders to build meaningful software and make a positive impact in the world of COVID19"
        subsections={[
          {
            title: "May 29-31",
            text:
              "Join us for an online hackathon on the weekend of May 29. We will have workshops over the weeks leading up to the hackathon for those that are starting the project early!"
          },
          {
            title: "World Wide Web",
            text: "Everyone is welcome to join! coviders.slack.com",
            link: {
              text: "Join Slack",
              href:
                "https://join.slack.com/t/coviders/shared_invite/zt-d72l3qmt-jIrJaiw3zVWeohZHcmy4jQ"
            }
          }
        ]}
      />
    </>
  );
};
