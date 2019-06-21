import React from "react";
import styled from "styled-components";
import mottoGirl from "../../assets/images/motto-girl.png";

const Aside = styled.aside`
  position: relative;
  overflow: hidden;
  background-image: url(${mottoGirl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

const Motto = styled.h2`
  font-family: "Pacifico";
  color: #de617a;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
  font-size: 20px;
`;

const SectionMotto = () => {
  return (
    <Aside>
      <Motto>get hair straight naturally</Motto>
    </Aside>
  );
};

export default SectionMotto;
