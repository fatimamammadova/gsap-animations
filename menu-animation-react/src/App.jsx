import { IoClose } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#menu-bar", {
      right: 0,
      left: "50%",
      duration: 0.5,
      ease: "power1.inOut",
    });

    tl.from("#menu-bar ul li", {
      x: 150,
      stagger: 0.2,
      duration: 0.5,
      opacity: 0,
    });

    tl.pause();

    closeRef.current.addEventListener("click", () => {
      tl.reverse();
    });

    menuRef.current.addEventListener("click", () => {
      tl.play();
    });
  });

  return (
    <>
      <div id="main">
        <nav>
          <h2>fatimamammadova</h2>

          <button type="button" ref={menuRef}>
            <TbMenu3 size={35} />
          </button>
        </nav>

        <div id="menu-bar">
          <button type="button" ref={closeRef}>
            <IoClose size={40} />
          </button>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
