import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { projectList } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0;
`;

const Card = styled.article`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 3.5rem;
  grid-template-columns: 1fr;
  background: ${colors.surfaceLight};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: ${colors.cardShadow};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${colors.cardShadowHover};
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardLeft = styled.div`
  background: #151418;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  min-height: 220px;

  img {
    border-radius: 8px;
    max-height: 200px;
    width: auto;
    object-fit: contain;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${colors.textDark};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: ${colors.textDarkMuted};
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    padding: 2rem 2.5rem 2rem 0;
  }
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  .stackTitle {
    font-weight: 600;
    font-size: 0.85rem;
    color: ${colors.textDark};
  }

  .tags {
    font-size: 0.85rem;
    color: ${colors.accent};
    background: rgba(99, 102, 241, 0.08);
    padding: 0.25rem 0.7rem;
    border-radius: 6px;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

function Projects() {
  return (
    <AnimatedSection id="projects">
      <Wrapper>
        <div className="Container">
          <SectionTitle label="Portfolio" title="Projects" />
          {projectList.map((project, index) => (
            <Card key={index}>
              <CardLeft>
                <img src={project.img} alt={project.title} />
              </CardLeft>
              <CardRight>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <Stack>
                  <span className="stackTitle">Tech Stack</span>
                  <span className="tags">{project.tech_stack}</span>
                </Stack>
                <BtnGroup>
                  <a
                    className="btn btn2 SecondarBtnLight"
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn PrimaryBtn"
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                </BtnGroup>
              </CardRight>
            </Card>
          ))}
        </div>
      </Wrapper>
    </AnimatedSection>
  );
}

export default Projects;
