import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { summary, personalInfo } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0;
`;

const Card = styled.div`
  background: ${colors.surfaceLight};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: ${colors.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid transparent;
  background: linear-gradient(${colors.surfaceLight}, ${colors.surfaceLight}) padding-box,
    ${colors.gradient} border-box;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
`;

const Bio = styled.p`
  font-size: 1.05rem;
  color: ${colors.textDarkMuted};
  line-height: 1.85;
  max-width: 700px;
  text-align: justify;
  hyphens: auto;
`;

function About() {
  return (
    <AnimatedSection id="about">
      <Wrapper>
        <div className="Container">
          <SectionTitle label="Introduction" title="About Me" />
          <Card>
            <Image src={personalInfo.profileImage} alt={personalInfo.name} />
            <Bio>{summary}</Bio>
          </Card>
        </div>
      </Wrapper>
    </AnimatedSection>
  );
}

export default About;
