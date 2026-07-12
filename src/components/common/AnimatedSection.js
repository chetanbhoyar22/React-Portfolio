import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) => (props.$visible ? "translateY(0)" : "translateY(30px)")};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
`;

function AnimatedSection({ id, children, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id={id} ref={ref} $visible={visible} className={className}>
      {children}
    </Section>
  );
}

export default AnimatedSection;
