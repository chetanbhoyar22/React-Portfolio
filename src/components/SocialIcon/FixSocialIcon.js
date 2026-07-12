import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { personalInfo } from "../../data/portfolioData";

const Social = styled.div`
  display: block;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  a {
    font-size: 1.3rem;
    color: ${colors.textMuted};
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: ${colors.accentLight};
      transform: translateY(-3px);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function FixSocialIcon() {
  const links = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <Social>
      <ul>
        {links.map(({ icon: Icon, url, label }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
