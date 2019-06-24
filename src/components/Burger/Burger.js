import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: none;
  border: none;
  padding: 20px 30px;
  z-index: 9999;
  cursor: pointer;

  div,
  ::before,
  ::after {
    width: 25px;
    height: 2px;
    background-color: black;
    display: block;
    @media (min-width: 768px) and (min-height: 700px) {
      width: 30px;
    }
  }

  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
  }

  div {
    opacity: ${({ isOpen, id }) => (isOpen && id !== 0 ? "0" : "1")};
    transition: opacity 0.25s linear;
  }

  ::after {
    transform: translateY(6px);
    animation: ${({ isOpen, id }) => {
      if (isOpen && id !== 0) {
        return "animate-transform-after .5s linear forwards";
      } else if (!isOpen && id !== 0) {
        return "animate-transform-after-false .5s linear forwards";
      }
    }};
    @media (min-width: 768px) and (min-height: 700px) {
      transform: translateY(8px);
    }
  }

  ::before {
    transform: translateY(-6px);
    animation: ${({ isOpen, id }) => {
      if (isOpen && id !== 0) {
        return "animate-transform-before .5s linear forwards";
      } else if (!isOpen && id !== 0) {
        return "animate-transform-before-false .5s linear forwards";
      }
    }};
    @media (min-width: 768px) and (min-height: 700px) {
      transform: translateY(-8px);
    }
  }

  @keyframes animate-transform-before {
    0% {
      transform: translateY(-6px) rotate(0);
    }

    25% {
      transform: translateY(0) rotate(0);
    }
    40% {
      transform: translateY(0) rotate(0);
    }
    65% {
      transform: translateY(0) rotate(-45deg);
    }
    100% {
      transform: translateY(0) rotate(-45deg);
    }
  }
  @keyframes animate-transform-after {
    0% {
      transform: translateY(6px) rotate(0);
    }
    25% {
      transform: translateY(0) rotate(0);
    }
    40% {
      transform: translateY(0) rotate(0);
    }
    65% {
      transform: translateY(0) rotate(45deg);
    }
    100% {
      transform: translateY(0) rotate(45deg);
    }
  }
  @keyframes animate-transform-after-false {
    0% {
      transform: translateY(0) rotate(45deg);
    }
    25% {
      transform: translateY(0) rotate(0);
    }
    40% {
      transform: translateY(0) rotate(0);
    }
    65% {
      transform: translateY(6px) rotate(0);
    }
    100% {
      transform: translateY(6px) rotate(0);
      @media only screen and (min-width: 768px) and (orientation: portrait) {
        transform: translateY(8px) rotate(0);
      }
    }
  }
  @keyframes animate-transform-before-false {
    0% {
      transform: translateY(0) rotate(-45deg);
    }
    25% {
      transform: translateY(0) rotate(0);
    }
    40% {
      transform: translateY(0) rotate(0);
    }
    65% {
      transform: translateY(-6px) rotate(0);
    }
    100% {
      transform: translateY(-6px) rotate(0);
      @media only screen and (min-width: 768px) and (orientation: portrait) {
        transform: translateY(-8px) rotate(0);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Burger = props => {
  const { handleButton, isOpen, id } = props;
  return (
    <StyledBurger onClick={handleButton} isOpen={isOpen} id={id}>
      <div />
    </StyledBurger>
  );
};

export default Burger;
