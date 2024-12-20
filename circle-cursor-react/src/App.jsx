import { useRef } from "react";
import gsap from "gsap";

function App() {
  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.7,
      ease: "power1.out",
    });
  };

  const handleMouseEnter = () => {
    cursorRef.current.textContent = "View More";
    gsap.to(cursorRef.current, {
      scale: 4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    cursorRef.current.textContent = "";
    gsap.to(cursorRef.current, {
      scale: 1,
      ease: "power1.out",
    });
  };

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="main" ref={mainRef} onMouseMove={handleMouseMove}>
        <div
          id="image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://images.unsplash.com/photo-1715465115663-2451562186a0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
