import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { experienceList } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0;
  background: ${colors.bgLight};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.article`
  background: ${colors.surfaceLight};
  border-radius: 14px;
  padding: 2rem 2rem 2rem 2.25rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: ${colors.cardShadow};
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${colors.gradient};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${colors.cardShadowHover};
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Company = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${colors.accent};
  line-height: 1.3;
`;

const Role = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-top: 0.35rem;
  line-height: 1.4;
`;

const Location = styled.span`
  display: block;
  font-size: 0.85rem;
  color: ${colors.textDarkMuted};
  margin-top: 0.15rem;
`;

const Meta = styled.div`
  text-align: right;
  flex-shrink: 0;

  @media (max-width: 576px) {
    text-align: left;
  }
`;

const Period = styled.span`
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${colors.textDarkMuted};
  background: rgba(99, 102, 241, 0.08);
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  white-space: nowrap;
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const Highlight = styled.li`
  font-size: 0.93rem;
  color: ${colors.textDarkMuted};
  line-height: 1.75;
  padding-left: 1.3rem;
  position: relative;
  text-align: justify;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    top: 0.1rem;
    color: ${colors.accent};
    font-weight: bold;
    font-size: 1rem;
  }
`;

function Experience() {
  return (
    <AnimatedSection id="experience">
      <Wrapper>
        <div className="Container">
          <SectionTitle label="Career" title="Work Experience" />
          <Timeline>
            {experienceList.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <Info>
                    <Company>{exp.company}</Company>
                    <Role>{exp.role}</Role>
                    <Location>{exp.location}</Location>
                  </Info>
                  <Meta>
                    <Period>{exp.period}</Period>
                  </Meta>
                </CardHeader>
                <Highlights>
                  {exp.highlights.map((item, i) => (
                    <Highlight key={i}>{item}</Highlight>
                  ))}
                </Highlights>
              </Card>
            ))}
          </Timeline>
        </div>
      </Wrapper>
    </AnimatedSection>
  );
}

export default Experience;
