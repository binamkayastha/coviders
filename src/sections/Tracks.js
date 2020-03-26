import React from "react";
import { Section } from "../components/Section";

export const Tracks = () => {
  return (
    <Section
      title="Tracks"
      subsections={[
        {
          title: "Healthcare",
          text:
            "Healthcare professionals and healthcare systems are under immense presure to scale up testing and patient care. This is an opportunity for healthcare professionals and software engineers to collaborate to face these problems."
        },
        {
          title: "Lifestyle",
          text:
            "Covid is changing how we interact with the world around us. Offices, schools and every aspect of the way we live is making a shift to the remote. Everyperson in the world is struggling to adapt to these changes. People are not adopting the new safety suggestions like social distancing in the US and costco Sharing accurate information is difficult (for eg: people believing fake remedies) people"
        },
        {
          title: "Economy",
          text:
            "Many small businesses and service industries are impacted by covid. How can we mobilize people that have lost their jobs from the service industry? Developing countries Covid is likely going to be even more challenging to tackle if it hits developing countries. What preventative measures can we take? What systems can we build etc etc"
        }
      ]}
    />
  );
};
