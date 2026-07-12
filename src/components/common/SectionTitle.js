import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => (props.$light ? colors.accentLight : colors.accent)};
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.$light ? colors.text : colors.textDark)};
  position: relative;
  display: block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: ${colors.gradient};
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

function SectionTitle({ label, title, light }) {
  return (
    <TitleWrapper>
      {label && <Label $light={light}>{label}</Label>}
      <Title $light={light}>{title}</Title>
    </TitleWrapper>
  );
}

export default SectionTitle;
