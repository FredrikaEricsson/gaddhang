window.onloa = (event) => {
  let pikeBus = document.getElementById("pikeBus");
  gsap.set(pikeBus, {
    rotation: 10,
  });
  gsap.to(pikeBus, {
    rotation: -10,
    duration: 2,
    repeat: -1,
    repeatDelay: 3,
  });
  gsap.to(pikeBus, {
    rotation: 10,
    duration: 3,
    delay: 2,
    repeat: -1,
    repeatDelay: 2,
  });

  gsap.to(pikeBus, {
    x: 160,
    duration: 5,
    repeat: -1,
    ease: "none",
    yoyo: true,
  });
};
