import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/theme";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Wrapper = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: ${colors.textMuted};
  font-weight: 400;
  margin-bottom: 0.5rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: ${colors.text};
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.4em;
  background: ${colors.accentLight};
  margin-left: 4px;
  animation: ${blink} 0.8s step-end infinite;
`;

function Typewriter({ words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000 }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <Wrapper>
      <Text>{text}</Text>
      <Cursor />
    </Wrapper>
  );
}

export default Typewriter;
