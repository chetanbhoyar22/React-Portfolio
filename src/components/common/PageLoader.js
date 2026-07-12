import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { colors, gradientShift } from "../../styles/theme";

const fadeOut = keyframes`
  from { opacity: 1; visibility: visible; }
  to { opacity: 0; visibility: hidden; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.bg};
  animation: ${(props) => (props.$hide ? fadeOut : "none")} 0.6s ease forwards;
  pointer-events: ${(props) => (props.$hide ? "none" : "auto")};
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid rgba(99, 102, 241, 0.15);
  border-top-color: ${colors.accent};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: ${colors.gradient};
  background-size: 200% 200%;
  animation: ${gradientShift} 2s ease infinite, ${slideUp} 0.5s ease;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  font-size: 0.85rem;
  color: ${colors.textMuted};
  animation: ${pulse} 1.5s ease-in-out infinite, ${slideUp} 0.5s ease 0.2s both;
  letter-spacing: 1px;
`;

function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => setLoading(false), 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <Overlay $hide={hide}>
          <Spinner />
          <Logo>CB</Logo>
          <Text>Loading portfolio...</Text>
        </Overlay>
      )}
      {children}
    </>
  );
}

export default PageLoader;
