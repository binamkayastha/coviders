import React from "react";
import { Section } from "../components/Section";

export const Timeline = () => {
  return (
    <Section
      title="Details"
      subsections={[
        { title: "Pre-Hackathon Events", text: "We are currently" },
        {
          title: "Code of Conduct",
          text: "Please see our code of conduct here"
        },
        {
          title: "Prizes",
          text: "We are still finalizing prizes"
        },
        {
          title: "Post-Hackathon Support",
          text: "After the hackathon is over, we want "
        }
      ]}
    />
  );
};
