import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { TimelineMax } from "gsap/TweenMax";

const StyledUl = styled.ul`
  height: 100%;
  color: black;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #fff;
  }
`;

const StyledLink = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: 60px;

  a {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 7px 30px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    height: 100%;
    width: 100%;
    transition: 0.25s ease;
    &:hover {
      color: #dadada;
    }
  }

  a.active {
    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }
`;

class NavDesktop extends Component {
  state = {};

  componentDidMount() {
    // const tlNavDesktop = new TimelineMax();
    // const navBefore = document.querySelector(".upperWrapper span");
    // const navigationAnimation = () => {
    //   const aboutHeader = document.querySelector(".about-header");
    //   let aboutHeaderBottom = aboutHeader.getBoundingClientRect().bottom;
    //   if (aboutHeaderBottom <= 0) {
    //     tlNavDesktop.play();
    //   } else {
    //     tlNavDesktop.reverse();
    //   }
    // };
    // window.onhashchange = () => {
    //   console.log("zmiana");
    // };
    // const findColor = () => {
    //   if (window.location.pathname === "/about") {
    //     return "#c1c9d0";
    //   } else if (window.location.pathname === "/contact") {
    //     return "#e5dede";
    //   }
    // };
    // tlNavDesktop
    //   .set(navBefore, { css: { backgroundColor: findColor() } })
    //   .addPause()
    //   .to(navBefore, 0.25, { y: 50 });
    // if (window.location.pathname === "/about") {
    //   console.log("Działamy");
    //   window.addEventListener("scroll", navigationAnimation);
    // } else {
    //   window.removeEventListener("scroll", navigationAnimation);
    // }
  }
  render() {
    return (
      <StyledUl>
        <StyledLink>
          <NavLink
            to={"/"}
            exact
            onClick={this.props.setLoader}
            className={"link link--active"}
          >
            home
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink
            to={"/about"}
            onClick={this.props.setLoader}
            className={"link"}
          >
            o mnie
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink
            to={"/contact"}
            onClick={this.props.setLoader}
            className={"link"}
          >
            kontakt
          </NavLink>
        </StyledLink>
      </StyledUl>
    );
  }
}

export default NavDesktop;
