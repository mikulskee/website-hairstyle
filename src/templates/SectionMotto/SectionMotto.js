import React from "react";
import styled from "styled-components";
import mottoGirl from "../../assets/images/motto-girl.png";

const Aside = styled.aside`
  position: relative;
  background-image: url(${mottoGirl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vw;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    height: 37vw;
  }
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

  .secondary {
    transform: translateY(100%);
  }
`;

const Motto = styled.h2`
  font-family: "Pacifico", sans-serif;
  color: #de617a;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
  font-size: 20px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400%;
  /* to shirnk - change width to smaller */
  transform: translateY(-100%);
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    width: 200%;
  }
  @media only screen and (min-width: 1400px) {
    width: 100%;
  }

  span {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    flex-grow: 0;
  }
`;
const SectionMotto = () => {
  return (
    <Aside>
      <DotsWrapper>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </DotsWrapper>
      <Motto>get hair straight naturally</Motto>
      <DotsWrapper className={"secondary"}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </DotsWrapper>
    </Aside>
  );
};

export default SectionMotto;
