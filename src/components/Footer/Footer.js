import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { personalInfo } from "../../data/portfolioData";

const FooterSection = styled.footer`
  background: ${colors.bg};
  padding: 3rem 0;
  text-align: center;
`;

const Text = styled.p`
  color: ${colors.textMuted};
  font-size: 0.9rem;
  line-height: 1.8;

  a {
    color: ${colors.accentLight};
    transition: color 0.3s;
    &:hover {
      color: ${colors.accentSecondary};
    }
  }
`;

const Role = styled.p`
  color: ${colors.textMuted};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <Text>
          Designed & Built by{" "}
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {personalInfo.name}
          </a>
        </Text>
        <Role>{personalInfo.title} · {personalInfo.location}</Role>
      </div>
    </FooterSection>
  );
}

export default Footer;


