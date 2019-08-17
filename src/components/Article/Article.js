import styled from "styled-components";

export const Article = styled.article`
  width: 90%;
  max-width: 400px;
  margin: 50px auto 60px;
  @media only screen and (orientation: portrait) and (min-width: 768px) {
    max-width: 540px;
    margin: 50px auto 90px;
  }

  p {
    padding: 25px 10px;
    display: block;
    align-items: center;
    font-size: 12px;
    line-height: 1.2rem;
    color: #666;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    @media only screen and (orientation: portrait) and (min-width: 768px) {
      padding: 30px 10px;
      font-size: 16px;
      line-height: 1.7rem;
    }
  }
`;
