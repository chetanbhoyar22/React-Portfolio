import { keyframes } from "styled-components";

export const colors = {
  bg: "#0a0a0f",
  bgLight: "#fafaff",
  surface: "#12121a",
  surfaceLight: "#ffffff",
  text: "#f0f0f5",
  textMuted: "#8b8b9e",
  textDark: "#151418",
  textDarkMuted: "#5a5a6e",
  accent: "#6366f1",
  accentLight: "#818cf8",
  accentSecondary: "#06b6d4",
  gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
  border: "rgba(99, 102, 241, 0.15)",
  cardShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  cardShadowHover: "0 16px 48px rgba(99, 102, 241, 0.15)",
};

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

export const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

export const scrollBounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-12px); }
  60% { transform: translateY(-6px); }
`;
