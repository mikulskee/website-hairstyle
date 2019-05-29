import React from "react";
import styled from "styled-components";
import IconSVG from "../IconSVG/IconSVG";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";

const StyledLink = styled.a`
  cursor: pointer;
  padding: 10px 20px;
  @media only screen and (min-width: 1024px) and (orientation: portrait) {
    padding: 15px 25px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 25px;

      @media only screen and (min-width: 768px) {
        width: 30px;
      }
      @media only screen and (min-width: 1024px) {
        width: 40px;
      }
      @media only screen and (min-width: 1024px) and (orientation: portrait) {
        width: 50px;
      }
    }
  }
`;

const SocialMenu = () => {
  return (
    <>
      <StyledLink href={"https://instagram.com/ale.prossste"}>
        <IconSVG className={"insta"} src={iconInstagram} />
      </StyledLink>
      <StyledLink href={"https://facebook.com/ale.prosssto"}>
        <IconSVG className={"face"} src={iconFacebook} />
      </StyledLink>
    </>
  );
};

export default SocialMenu;
