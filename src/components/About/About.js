import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://avatars.githubusercontent.com/u/78400497?v=4"
            alt="man-svgrepo"
          /><br />
          <div className="AboutBio">
            Hi Everyone, I am Chetan Bhoyar from Wardha (Maharashtra), India.<br/>
            I'm an enthusiastic and social person. And I love to take up new challenges and learn new skills also meet new people, exchange ideas, and spread knowledge and positivity.
          </div><br />
          <div className="AboutBio tagline2">
            <strong>Professional Skillset</strong>
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;