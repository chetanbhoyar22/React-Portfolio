import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { colors, float, scrollBounce, gradientShift } from "../../styles/theme";

export const HeroContainer = styled.div`
  padding: 6rem 1rem 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  justify-content: center;

  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1200px) { max-width: 1100px; }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1.2;

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
  }
`;

export const Greeting = styled.p`
  font-size: 1.1rem;
  color: ${colors.accentLight};
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

export const Name = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${colors.text};
  line-height: 1.15;
  margin-bottom: 0.5rem;
`;

export const GradientText = styled.span`
  background: ${colors.gradient};
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Role = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: ${colors.textMuted};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.textMuted};
  margin-bottom: 1.5rem;
  max-width: 500px;
  line-height: 1.6;
`;

export const Location = styled.p`
  font-size: 0.95rem;
  color: ${colors.textMuted};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const HeroRight = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: ${colors.gradient};
    animation: ${gradientShift} 4s ease infinite;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: ${colors.gradient};
    opacity: 0.15;
    filter: blur(30px);
    z-index: 0;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 4px solid ${colors.bg};
  animation: ${float} 4s ease-in-out infinite;
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  animation: ${scrollBounce} 2s linear infinite;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: ${colors.textMuted};
  transition: color 0.3s;

  &:hover {
    color: ${colors.accentLight};
  }
`;

export const ScrollArrow = styled.span`
  display: inline-block;
  font-size: 1.2rem;
`;
