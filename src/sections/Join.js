import React from "react";
import { Section } from "../components/Section";

export const Join = ({ offset, scroll }) => {
  return (
    <Section
      title="Join Us"
      subsections={[
        {
          title: "Coviders (Participants)",
          text:
            "covider(/kōˈvīdər/): noun \n An awesome person using code to fight the covid pandemic. Sign up as a participant of the hackathon here!",
          link: {
            text: "Sign Up",
            link: "www.google.com"
          }
        },
        {
          title: "Volunteers",
          text: "We are looking for",
          link: {
            text: "Sign Up",
            link: "www.google.com"
          }
        },
        {
          title: "Speakers / Mentors / Judges",
          link: {
            text: "Sign Up",
            link: "www.google.com"
          }
        },
        {
          title: "Sponsors",
          link: {
            text: "Sign Up",
            link: "www.google.com"
          }
        }
      ]}
    />
  );
};
