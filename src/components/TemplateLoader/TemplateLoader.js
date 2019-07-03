import React, { Component } from "react";
import styled, { css } from "styled-components";

const theme = {
  offset: "translateY(-5%)",
  count: "40",
  duration: "0.7"
};

const createCSS = () => {
  let styles = "";

  for (let i = 0; i < 40; i += 1) {
    styles += `    
       h2 :nth-child(40n+${i}){
         animation-delay: -${((40 - i) * 2 * 0.7) / 40}s;
       }
  `;
  }

  return css`
    ${styles}
  `;
};

const Loader = styled.div`
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 6;
    transform: translateY(100%);
    display: flex;
    justify-content: center;
    align-items: center;

    h2 span {
      display: inline-block;
      color: white;
      font-family: "Just Another Hand", sans-serif;
      font-size: 40px;
      font-weight: 400;
      margin-right: 2px;
      transform: translateY(0);
      animation: wave-text 0.7s infinite alternate;
    }

    ${createCSS()};

    @keyframes wave-text {
      from {
        color: #ffa8b9;
        transform: translateY(0);
      }
      to {
        color: #de617a;
        transform: translateY(-10px);
      }
    }

    @keyframes load {
      0% {
        transform: translateY(100%);
      }
      15% {
        transform: translateY(0);
      }
      85% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100%);
      }
    }
  }

  .active {
    animation: load 4s both;
    animation-iteration-count: 1;
  }
`;

const motto = "get hair straight naturally";
const array = Array.from(motto);
const spantxt = array.map((i, id) => {
  if (i === " ") {
    return <span key={id}>&nbsp;</span>;
  } else {
    return <span key={id}>{i}</span>;
  }
});

class TemplateLoader extends Component {
  state = {};

  render() {
    return (
      <Loader className={this.props.className} theme={theme}>
        <div className={this.props.className}>
          <h2>{spantxt}</h2>
        </div>
      </Loader>
    );
  }
}

export default TemplateLoader;
