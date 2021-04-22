window.onload = (event) => {
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

  let mobileAnimation = window.matchMedia("(max-width: 768px)");
  let tabletAnimation = window.matchMedia("(max-width: 1024px)");
  if (mobileAnimation.matches) {
    gsap.to(pikeBus, {
      x: 160,
      duration: 3,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
  } else if (tabletAnimation.matches) {
    gsap.to(pikeBus, {
      x: 350,
      duration: 6,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
  } else {
    gsap.to(pikeBus, {
      x: 950,
      duration: 10,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
  }
};

function unfoldMenu() {
  let menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "grid") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "grid";
  }
}
