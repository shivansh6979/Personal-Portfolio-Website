import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm <br />
          Shivansh Gupta
        </SectionTitle>
        <SectionText>
          A curious software engineer bringing 6 months of experience as a
          Frontend Developer Intern with proficiency in Frontend and Backend
          Technologies such as JAVASCRIPT , REACTJS , REDUX , NODEJS , EXPRESSJS
          , MONGODB
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
