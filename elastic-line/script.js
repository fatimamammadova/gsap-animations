let path = "M 10 100 Q 95 100 1300 100";

let finalPath = "M 10 100 Q 95 100 1300 100";

const svgContainer = document.querySelector("#svg-container svg");

svgContainer.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1300 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power1.out",
  });
});

svgContainer.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1.2,0.2)",
  });
});
