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
            href: "https://forms.gle/vN7ov6j3bCx6uLQQ7"
          }
        },
        {
          title: "Volunteers",
          text: "We are looking for volunteers to help out on the day of the hackathon and for outreach!",
          link: {
            text: "Sign Up",
            href: "https://forms.gle/Vp3wuniFCsdyawxJ9"
          }
        },
        {
          title: "Speakers / Mentors / Judges",
          link: {
            text: "Sign Up",
            href: "https://forms.gle/u2xNAMn2Cx2sf37h7"
          }
        }
        // {
        //   title: "Sponsors",
        //   link: {
        //     text: "Sign Up",
        //     link: "www.google.com"
        //   }
        // }
      ]}
    />
  );
};
