import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 400px;
  padding: 25px;
  font-size: 12px;
  margin: 50px auto 60px;
  line-height: 1.2rem;
  transform: rotate(2deg);
  background-color: #e5dede;
  color: #717171;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.1rem;
  box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);

  p {
    transform: rotate(-2deg);
  }
`;
