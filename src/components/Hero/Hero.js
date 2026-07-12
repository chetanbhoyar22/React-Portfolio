import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Typewriter from "../common/Typewriter";
import { personalInfo, typingRoles } from "../../data/portfolioData";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Greeting,
  Name,
  GradientText,
  Subtitle,
  Location,
  BtnGroup,
  ImageWrapper,
  Image,
  ScrollDown,
  ScrollLink,
  ScrollArrow,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <Greeting>Hey there 👋</Greeting>
            <Name>
              I'm <GradientText>{personalInfo.name}</GradientText>
            </Name>
            <Typewriter words={typingRoles} />
            <Subtitle>{personalInfo.subtitle}</Subtitle>
            <Location>📍 {personalInfo.displayLocation}</Location>
            <BtnGroup>
              <a className="btn PrimaryBtn" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
              <a className="btn SecondarBtn" href="#projects">
                View Projects
              </a>
            </BtnGroup>
          </HeroLeft>
          <HeroRight>
            <ImageWrapper>
              <Image src={personalInfo.profileImage} alt={`${personalInfo.name} - ${personalInfo.title}`} />
            </ImageWrapper>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="about" smooth={true} offset={-80}>
          <ScrollLink>
            Scroll down <ScrollArrow>↓</ScrollArrow>
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
