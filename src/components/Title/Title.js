import styled from "styled-components";

export const Title = styled.h1`
  position: absolute;
  font-family: "DM Serif Display", serif;
  font-weight: 500;
  font-size: 30px;
  color: white;
  margin: 40px 0 0 40px;
  z-index: 1;
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-20%, -35%);
    z-index: -1;
    display: block;
    content: "";
    background-color: #cd97c4;
    width: 70%;
    height: 100%;
  }
`;
