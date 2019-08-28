import React from "react";
import styled from "styled-components";
import IconSVG from "../IconSVG/IconSVG";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram2.svg";

const StyledLink = styled.a`
  visibility: ${({ socialMenu }) => (socialMenu ? "visible" : "hidden")};

  cursor: pointer;
  padding: 10px 20px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 25px;
    }
  }
`;

const SocialMenu = props => {
  return (
    <>
      <StyledLink
        href={"https://instagram.com/ale.prossste"}
        socialMenu={props.socialMenu}
      >
        <IconSVG className={"insta"} src={iconInstagram} />
      </StyledLink>
      <StyledLink
        href={"https://facebook.com/ale.prosssto"}
        socialMenu={props.socialMenu}
      >
        <IconSVG className={"face"} src={iconFacebook} />
      </StyledLink>
    </>
  );
};

export default SocialMenu;
