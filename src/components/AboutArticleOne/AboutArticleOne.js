import React from "react";
import styled from "styled-components";
import { Article } from "../../components/Article/Article";

const StyledArticle = styled(Article)`
  margin: 10vw auto 50px;
  padding-bottom: 30px;
  position: relative;

  p {
    will-change: opacity, transform;
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
