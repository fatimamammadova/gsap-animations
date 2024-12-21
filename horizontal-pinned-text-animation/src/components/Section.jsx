import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

gsap.registerPlugin(useGSAP);

const Section = ({ text }) => {
  useGSAP(() => {
    gsap.from("#black-section .container span", {
      transform: "translateY(50px)",
      duration: 0.3,
      stagger: 0.15,
      opacity: 0,
    });
  });

  return (
    <section id="black-section">
      <div className="container">
        {text.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </section>
  );
};

Section.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Section;
