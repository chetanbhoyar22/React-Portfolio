import React from "react";
import styled, { keyframes } from "styled-components";
import { colors, gradientShift, pulse } from "../../styles/theme";
import { personalInfo, contactText } from "../../data/portfolioData";
import SocialIcon from "../SocialIcon/SocialIcon";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";

const Wrapper = styled.div`
  padding: 5rem 0;
  background: ${colors.bg};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 3.5rem 2rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
`;

const Heading = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: ${colors.gradient};
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtext = styled.p`
  font-size: 1.05rem;
  color: ${colors.textMuted};
  margin-bottom: 2.5rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2.5rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 14px;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
  animation: ${slideUp} 0.6s ease-out both;
  animation-delay: ${(props) => props.$delay}s;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    transform: translateY(-6px);
    border-color: ${colors.accent};
    background: rgba(99, 102, 241, 0.08);
  }
`;

const Icon = styled.span`
  font-size: 1.8rem;
`;

const CardLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${colors.accentLight};
`;

const CardValue = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.text};
  word-break: break-all;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const PulseBtn = styled.a`
  animation: ${pulse} 2s ease-in-out infinite;
`;

function Contact() {
  return (
    <AnimatedSection id="contact">
      <Wrapper>
        <Inner>
          <div className="Container">
            <SectionTitle label="Connect" title="Get In Touch" light />
            <Card>
              <Heading>{contactText.heading}</Heading>
              <Subtext>{contactText.subtext}</Subtext>
              <ContactGrid>
                <ContactCard
                  href={`mailto:${personalInfo.email}`}
                  $delay={0.1}
                  $clickable
                >
                  <Icon>✉️</Icon>
                  <CardLabel>Email</CardLabel>
                  <CardValue>{personalInfo.email}</CardValue>
                </ContactCard>
                <ContactCard
                  href={`tel:${personalInfo.phone}`}
                  $delay={0.2}
                  $clickable
                >
                  <Icon>📞</Icon>
                  <CardLabel>Phone</CardLabel>
                  <CardValue>{personalInfo.phone}</CardValue>
                </ContactCard>
                <ContactCard as="div" $delay={0.3} $clickable={false}>
                  <Icon>🌍</Icon>
                  <CardLabel>Location</CardLabel>
                  <CardValue>{personalInfo.displayLocation}</CardValue>
                </ContactCard>
              </ContactGrid>
              <BtnGroup>
                <PulseBtn
                  className="btn PrimaryBtn"
                  href={`mailto:${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say Hello 👋
                </PulseBtn>
                <a
                  className="btn SecondarBtn"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </BtnGroup>
              <SocialIcon />
            </Card>
          </div>
        </Inner>
      </Wrapper>
    </AnimatedSection>
  );
}

export default Contact;
