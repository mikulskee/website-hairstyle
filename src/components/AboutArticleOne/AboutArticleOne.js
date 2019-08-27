import React from "react";
import styled from "styled-components";
import { Article } from "../../components/Article/Article";

const StyledArticle = styled(Article)`
  margin: 10vw auto 50px;
  padding-bottom: 30px;
  position: relative;
  @media only screen and (orientation: landscape) {
    margin: 20vw auto 50px;
  }
  @media only screen and (min-width: 768px) {
    max-width: none;
    margin: 0;
    padding: 0;
    top: -11vw;
    left: 62vw;
    width: 33%;
  }
  @media only screen and (min-width: 1024px) {
    top: -18vw;
  }
  @media only screen and (min-width: 1400px) {
    margin: 0 auto;
    top: -254px;
    left: 354px;
    width: 456px;
  }

  p {
    will-change: opacity, transform;
    @media only screen and (min-width: 1280px) {
      font-size: 14px;
      line-height: 1.5rem;
    }
  }
  span {
    will-change: transform;
    position: absolute;
    visibility: hidden;
    display: block;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
  span:nth-child(2) {
    transform: translateY(-250%);
  }
`;

const AboutArticleOne = () => {
  return (
    <StyledArticle className={"about__article-one"}>
      <p>
        Posiadam certyfikaty marki <strong>Amazon Keratin</strong>, które
        otrzymałam po ukończeniu kursu, gdzie zdobyłam wiedzę, jak
        profesjonalnie wykonywać zabiegi polegające na rekonstrukcji włosów.
        Wszystkie zabiegi wykonuję z <strong>najwyższą starannością</strong>,
        skupiając szczególną uwagę na sterylności narzędzi, których używam.
      </p>
      <span />
      <span />
    </StyledArticle>
  );
};

export default AboutArticleOne;
