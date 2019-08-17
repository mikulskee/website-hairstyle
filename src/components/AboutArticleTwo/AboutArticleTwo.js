import React from "react";
import styled from "styled-components";
import { Article } from "../../components/Article/Article";

const StyledArticle = styled(Article)`
  margin: 60px auto 50px;
  position: relative;

  p {
    will-change: opacity, transform;
    padding: 40px 10px;
  }

  span {
    will-change: transform;
    position: absolute;
    visibility: hidden;
    display: block;
    top: 0;
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

const AboutArticleTwo = () => {
  return (
    <StyledArticle className={"about__article-two"}>
      <span />
      <span />
      <p>
        Stawiam na rozwój, śledzę nowinki techniczne i{" "}
        <strong>najnowsze trendy fryzjerskie</strong>. Chcąc podnosić swoje
        kwalifikacje w najbliższej przyszłości planuję uczestnictwo w kursach{" "}
        <strong>przedłużania włosów</strong> oraz{" "}
        <strong>upięć okolicznościowych</strong>.
      </p>
    </StyledArticle>
  );
};

export default AboutArticleTwo;
