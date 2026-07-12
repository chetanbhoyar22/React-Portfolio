import React from "react";
import styled, { keyframes } from "styled-components";
import { colors, gradientShift } from "../../styles/theme";
import { stackList } from "../../data/portfolioData";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0 6rem;
  background: linear-gradient(160deg, #0f0f1a 0%, #1a1040 50%, #0d1b2a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1.6rem;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85) translateY(16px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const TechItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  animation: ${popIn} 0.5s ease-out both;
  animation-delay: ${(props) => props.$delay}s;

  &:hover .tech-card {
    animation-play-state: paused;
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:hover .tech-label {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s, border-color 0.25s;
  cursor: default;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

const TechImg = styled.img`
  height: 42px;
  width: 42px;
  object-fit: contain;
  transition: transform 0.25s ease;

  ${TechItem}:hover & {
    transform: scale(1.05);
  }
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.textMuted};
  letter-spacing: 0.3px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.25s, transform 0.25s;
  white-space: nowrap;
  text-align: center;
`;

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: ${colors.gradient};
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  border-radius: 2px;
  margin: 0 auto 2.5rem;
`;

function Skills() {
  return (
    <AnimatedSection id="skills">
      <Wrapper>
        <Inner>
          <div className="Container">
            <SectionTitle label="Expertise" title="Technical Skills" light />
            <Divider />
            <TechGrid>
              {stackList.map((stack, index) => (
                <TechItem key={stack.name} $delay={index * 0.05}>
                  <Card className="tech-card" $delay={index * 0.15}>
                    <TechImg src={stack.img} alt={stack.name} />
                  </Card>
                  <Label className="tech-label">{stack.name}</Label>
                </TechItem>
              ))}
            </TechGrid>
          </div>
        </Inner>
      </Wrapper>
    </AnimatedSection>
  );
}

export default Skills;
