import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { personalInfo } from "../../data/portfolioData";

export const SocialDiv = styled.div`
  margin-top: 2rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
  }

  a {
    font-size: 1.8rem;
    color: ${colors.textMuted};
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: ${colors.accentLight};
      transform: translateY(-3px);
    }
  }
`;

function SocialIcon() {
  const links = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <SocialDiv>
      <ul>
        {links.map(({ icon: Icon, url, label }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
