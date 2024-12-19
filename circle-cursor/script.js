const cursor = document.getElementById("cursor");
const main = document.getElementById("main");
const image = document.getElementById("image");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.7,
    ease: "power1.out",
  });
});

image.addEventListener("mouseenter", function () {
  cursor.textContent = "View more";
  gsap.to(cursor, {
    scale: 4,
    duration: 0.3,
    ease: "power1.out",
  });
});

image.addEventListener("mouseleave", function () {
  cursor.textContent = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    ease: "power1.out",
  });
});
