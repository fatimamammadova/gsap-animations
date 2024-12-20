import { useRef } from "react";
import gsap from "gsap";

function App() {
  let pathCoordinate = "M 50 100 Q 95 100 1300 100";
  let finaltPathCoordinate = "M 50 100 Q 95 100 1300 100";
  const svgRef = useRef(null);

  function handleMouseMove(e) {
    pathCoordinate = `M 50 100 Q ${e.clientX} ${e.clientY} 1300 100`;
    gsap.to(svgRef.current.querySelector("path"), {
      attr: { d: pathCoordinate },
      duration: 0.3,
      ease: "power1.out",
    });
  }

  function handleMouseLeave() {
    gsap.to(svgRef.current.querySelector("path"), {
      attr: { d: finaltPathCoordinate },
      duration: 1.5,
      ease: "elastic.out(1.2,0.2)",
    });
  }

  return (
    <>
      <div id="svg-container">
        <svg
          ref={svgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <path
            d={pathCoordinate}
            stroke="white"
            fill="transparent"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </>
  );
}

export default App;
