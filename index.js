const parallaxSpeed = (speed) => speed * 200;

gsap.to(".parallax__wave_2", {
  y: parallaxSpeed(2),
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "center center",
    end: "500px top",
    scrub: true,
  },
});

gsap.to(".parallax__wave_3", {
  y: parallaxSpeed(4),
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "center center",
    end: "500px top",
    scrub: true,
  },
});

gsap.to(".parallax__title", {
  y: parallaxSpeed(8),
  x: "-500px",
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "center center",
    end: "500px top",
    scrub: true,
  },
});

gsap.to(".parallax__text", {
  y: parallaxSpeed(7),
  x: "500px",
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "center center",
    end: "500px top",
    scrub: true,
  },
});

gsap.to(".parallax__laptop", {
  y: parallaxSpeed(-5),
  x: "1000px",
  rotate: "360deg",
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "center center",
    end: "500px top",
    scrub: true,
  },
});

leftButton = document.querySelector("#left-arrow-button");
rightButton = document.querySelector("#right-arrow-button");
redSquare = document.querySelector("#red-square");

leftButton.addEventListener("click", (e) => {
  gsap.to(redSquare, {
    x:
      -e.currentTarget.parentNode.offsetWidth / 2 +
      redSquare.offsetWidth / 2 +
      leftButton.offsetWidth +
      16,
  });
});

rightButton.addEventListener("click", (e) => {
  gsap.to(redSquare, {
    x:
      e.currentTarget.parentNode.offsetWidth / 2 -
      redSquare.offsetWidth / 2 -
      rightButton.offsetWidth -
      16,
  });
});

const redCircle = document.querySelector("#red-circle");
const tl = gsap.timeline({ repeat: -1, paused: true });

redCircle.addEventListener("click", () => {
  tl.play();
  tl.to(redCircle, { x: -165, y: -165, duration: 0.5 });
  tl.to(redCircle, { x: 165, y: -165, duration: 0.5, delay: 0.5 });
  tl.to(redCircle, { x: 165, y: 165, duration: 0.5, delay: 0.5 });
  tl.to(redCircle, { x: -165, y: 165, duration: 0.5, delay: 0.5 });
  tl.to(redCircle, { x: 0, y: 0, duration: 0.5, delay: 0.5 });
});

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const a11ySquareButton = document.querySelector("#a11y-square-button");
a11ySquareButton.addEventListener("click", () => {
  if (reduceMotion) {
    gsap.set(".a11y-square", { y: -50 });
  }

  gsap.to(".a11y-square", {
    opacity: 1,
    y: -50,
    stagger: reduceMotion ? 0.4 : 0.1,
    duration: reduceMotion ? 3 : 1,
  });
});

// SCROLLTRIGGER
gsap.from("#css-transitions-block .text-block", {
  x: -200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#css-transitions-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#css-transitions-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#css-transitions-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});
//###################################
//###################################
gsap.from("#css-animations-block .text-block", {
  x: 200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#css-animations-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#css-animations-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#css-animations-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});
//###################################
//###################################
gsap.from("#clock-exercise-block .text-block", {
  x: 200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#clock-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#clock-exercise-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#clock-exercise-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});
//###################################
//###################################
gsap.from("#gsap-explanation-block .text-block", {
  y: 200,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#gsap-explanation-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});
//###################################
//###################################
gsap.from("#gsap-exercise-block .text-block", {
  x: 200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#gsap-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#gsap-exercise-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#gsap-exercise-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});
//###################################
//###################################
gsap.from("#gsap-track-exercise-block .text-block", {
  x: 200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#gsap-track-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#gsap-track-exercise-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#gsap-track-exercise-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});

//###################################
//###################################
gsap.from("#a11y-exercise-block .text-block", {
  x: 200,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#a11y-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#a11y-exercise-block .exercise-area", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#a11y-exercise-block .exercise-area",
    start: "top 75%",
    end: "500px top",
  },
});

//###################################
// DIVIDER 2
//###################################
gsap.from("#scrolltrigger-exercise-block .text-block", {
  y: 200,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#scrolltrigger-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});

gsap.from("#parallax-exercise-block .text-block", {
  y: 200,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#parallax-exercise-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});
gsap.from("#playground-explanation-block .text-block", {
  y: 200,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#playground-explanation-block .text-block",
    start: "top 75%",
    end: "500px top",
  },
});
gsap.from("#playground-explanation-block .playground-area", {
  y: 200,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: "#playground-explanation-block .playground-area",
    start: "top 75%",
    end: "500px top",
  },
});

//###################################
// SVG
//###################################
const lottieWrapper = document.querySelector(
  "#svg-exercise-2-block .svg-exercise .lottie-svg-wrapper"
);
const svgButton1 = document.getElementById("svg-button-1");
const svgButton2 = document.getElementById("svg-button-2");
const svgButton3 = document.getElementById("svg-button-3");
const svgButton4 = document.getElementById("svg-button-4");

const buildingAnimation = lottie.loadAnimation({
  container: lottieWrapper, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/assets/svg-animations/walking-watermelon.json", // the path to the animation json
});

svgButton1.addEventListener("click", () => {
  buildingAnimation.pause();
});

svgButton2.addEventListener("click", () => {
  buildingAnimation.play();
});

svgButton3.addEventListener("click", () => {
  buildingAnimation.setSpeed(4);
});

svgButton4.addEventListener("click", () => {
  buildingAnimation.setSpeed(1);
});
