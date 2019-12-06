import { TimelineMax, Power1 } from "gsap/all";

export const templateAnimation = () => {
  const letters = document.querySelectorAll(".loader-letter");
  var tl = new TimelineMax({ repeat: 3, repeatDelay: 1 });

  tl.from(letters, 0.15, { opacity: 0 }).staggerTo(
    letters,
    0.3,
    { y: 13, ease: Power1.easeInOut, repeat: 1, yoyo: true },
    0.05
  );
};
