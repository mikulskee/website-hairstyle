import React from "react";
import styled from "styled-components";
import logoMainWhite from "../../assets/images/logo-main-white.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram2.svg";
import IconSVG from "../../components/IconSVG/IconSVG";

const StyledFooter = styled.footer`
  background-color: #000;
  padding: 20px 0;
  overflow: hidden;

  .logo {
    width: 50vw;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled.a`
  max-width: 65px;
  width: 20%;
  padding: 10px 20px;
  .facebook {
    .bfacebook {
      fill: #fff;
    }
  }

  .instagram {
    .cls-1 {
      fill: #fff;
    }
    .cls-2,
    .cls-3,
    .cls-4 {
      stroke: #fff;
    }
  }
`;

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  padding-top: 20px;
  font-size: 10px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <IconSVG src={logoMainWhite} className={"logo"} />
      <StyledWrapper>
        <StyledLink href={"https://facebook.com/ale.prosssto"}>
          <IconSVG src={iconFacebook} className={"facebook"} />
        </StyledLink>
        <StyledLink href={"https://instagram.com/ale.prossste"}>
          <IconSVG src={iconInstagram} className={"instagram"} />
        </StyledLink>
      </StyledWrapper>
      <Paragraph>© 2019 Mateusz Mikulski. All rights reserved.</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
