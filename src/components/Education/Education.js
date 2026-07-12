import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { educationList, certifications, languages } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0;
  background: ${colors.bgLight};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
`;

const Card = styled.div`
  background: ${colors.surfaceLight};
  border-radius: 14px;
  padding: 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: ${colors.cardShadow};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${colors.cardShadowHover};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(99, 102, 241, 0.1);
`;

const EduItem = styled.div`
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Degree = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 0.3rem;
  line-height: 1.4;
`;

const Institution = styled.p`
  font-size: 0.85rem;
  color: ${colors.textDarkMuted};
  margin-bottom: 0.4rem;
  line-height: 1.5;
`;

const Period = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.accent};
  background: rgba(99, 102, 241, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`;

const ListItem = styled.li`
  font-size: 0.85rem;
  color: ${colors.textDarkMuted};
  line-height: 1.6;
  padding-left: 1.2rem;
  position: relative;
  margin-bottom: 0.6rem;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${colors.accent};
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

function Education() {
  return (
    <AnimatedSection id="education">
      <Wrapper>
        <div className="Container">
          <SectionTitle label="Background" title="Education & Certifications" />
          <Grid>
            <Card>
              <CardTitle>🎓 Education</CardTitle>
              {educationList.map((edu, index) => (
                <EduItem key={index}>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                  <Period>{edu.period}</Period>
                </EduItem>
              ))}
            </Card>
            <Card>
              <CardTitle>📜 Certifications</CardTitle>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index}>{cert}</ListItem>
                ))}
              </List>
            </Card>
            <Card>
              <CardTitle>🌐 Languages</CardTitle>
              <List>
                {languages.map((lang, index) => (
                  <ListItem key={index}>{lang}</ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </div>
      </Wrapper>
    </AnimatedSection>
  );
}

export default Education;
