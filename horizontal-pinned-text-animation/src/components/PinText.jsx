import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PinText = () => {
  useGSAP(() => {
    gsap.to("#pin-container span", {
      x: "-77%",
      scrollTrigger: {
        trigger: "#pinned-text",
        scroller: "body",
        pin: true,
        start: "top 0%",
        end: "top -100%",
        markers: true,
        scrub: 2,
      },
    });
  });

  return (
    <section id="pinned-text">
      <div id="pin-container">
        <span>FATIMAMAMMADOVA</span>
      </div>
    </section>
  );
};

export default PinText;
