import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import { Article } from "../../components/Article/Article";
import hairAndHand from "../../assets/images/hair-and-hand.jpg";
import pinkyHead from "../../assets/images/pinky-head.jpg";
import IconSVG from "../../components/IconSVG/IconSVG";
import dotted from "../../assets/images/dots.svg";

const StyledTitle = styled(Title)`
  position: relative;
  will-change: transform, opacity;
  top: -26px;
  left: 0;
  visibility: hidden;
  margin: 0 auto;
  width: 89%;
  @media only screen and (orientation: landscape) {
    width: 59%;
  }
  @media only screen and (min-width: 768px) {
    top: -4vw;
    left: -133px;
    font-size: 5vw;
    width: 53%;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 51px;
    top: -41px;
    width: 532px;
    left: 50%;
    margin-left: -460px;
  }

  span {
    position: relative;
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      display: block;
      background-color: #cd97c4;
      width: 133%;
      height: 3px;
      content: "";
    }
  }
  ::before {
    display: none;
  }
`;

const StyledArticle = styled(Article)`
  margin: 0 auto 60px;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 50%;
    left: -156px;
    max-width: none;
    margin: 0vw auto -230px;
  }
  @media only screen and (min-width: 1024px) {
    width: 512px;
    left: -156px;
  }

  p {
    will-change: transform, opacity;
    visibility: hidden;
  }
`;

const Section = styled.section`
  position: relative;
  .hair-and-hand {
    position: relative;
    display: none;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-width: 409px;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      display: block;
      width: 40vw;
      top: 7vw;
      left: 30vw;
    }
    @media only screen and (min-width: 1024px) {
      margin: 0 auto;
      top: 51px;
      left: 307px;
    }
  }
  .pinky-head {
    position: relative;
    display: none;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-width: 286px;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      display: block;
      width: 28vw;
      top: 5vw;
      left: 9vw;
    }
    @media only screen and (min-width: 1024px) {
      top: 10px;
      left: 51px;
    }
  }

  .dotted {
    display: none;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      position: relative;
      display: block;
      width: 140px;
      top: -21vw;
      left: -6vw;
      transform: rotate(90deg);
    }
    @media only screen and (min-width: 1024px) {
      margin: 0 auto;
      top: -276px;
      left: -103px;
    }
  }
`;

const HomeSectionTwo = () => {
  return (
    <Section className={"section-two"}>
      <StyledTitle className={"picswrapper"}>
        naturalność jest dla nas <span>priorytetem</span>
      </StyledTitle>
      <StyledArticle className={"articletwo"}>
        <p>
          <strong>Preparaty keratynowe</strong>, używane podczas zabiegu,
          zawierają nie tylko keratynę, lecz także{" "}
          <strong>antyoksydanty, wyciągi z roślin i witaminy</strong> , które
          trwale nawilżają włosy i dostarczają niezbędnych składników odżywczych
          oraz kwasy tłuszczowe, które tworzą na włosach niewidoczna barierę
          ochronna przed szkodliwymi czynnikami zewnętrznymi.
        </p>
      </StyledArticle>
      <img
        src={hairAndHand}
        className={"hair-and-hand"}
        alt="włosy w dłoniach"
      />
      <img src={pinkyHead} className={"pinky-head"} alt="włosy w różu" />
      <IconSVG className={"dotted"} src={dotted} />
    </Section>
  );
};

export default HomeSectionTwo;
