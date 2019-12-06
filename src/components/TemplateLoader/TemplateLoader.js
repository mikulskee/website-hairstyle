import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";

const Loader = styled.div`
  will-change: transform;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 10;
  transform: translateY(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    line-height: 100vh;
  }

  h2 span {
    will-change: transform, color;
    display: inline-block;
    color: #de617a;
    font-family: "Just Another Hand", sans-serif;
    font-size: 40px;
    font-weight: 400;
    margin-right: 2px;
    opacity: 1;
    transform: translateY(0);
    @media only screen and (min-width: 768px) {
      font-size: 56px;
    }
  }
`;

const templateAnimation = () => {
  const letters = document.querySelectorAll(".loader-letter");
  var tl = new TimelineMax({});

  tl.from(letters, 0.15, { opacity: 0 }).staggerTo(
    letters,
    0.3,
    { y: -15, ease: Power1.easeInOut, repeat: 1, yoyo: true },
    0.05
  );
};

const motto = "get hair straight naturally";
const array = Array.from(motto);
const spantxt = array.map((i, id) => {
  if (i === " ") {
    return <span key={id}>&nbsp;</span>;
  } else {
    return (
      <span key={id} className={"loader-letter"}>
        {i}
      </span>
    );
  }
});

const TemplateLoader = props => {
  templateAnimation();
  return (
    <Loader className={props.className}>
      <h2>{spantxt}</h2>
    </Loader>
  );
};

export default TemplateLoader;
