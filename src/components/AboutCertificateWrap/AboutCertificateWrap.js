import React from "react";
import styled from "styled-components";
import certificate from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .certificate {
    position: relative;
    transform: translate(4%, 0);
    width: 70%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    @media only screen and (orientation: landscape) {
      width: 60%;
    }
  }
  .certificate2 {
    position: relative;
    transform: translate(-4%, 0);
    width: 70%;
    margin-top: 20px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    @media only screen and (orientation: landscape) {
      width: 60%;
    }
  }
`;

const AboutCertificateWrap = () => {
  return (
    <Wrapper className={"about__certificates"}>
      <img src={certificate} className={"certificate"} alt={"certificate"} />
      <img src={certificate2} className={"certificate2"} alt={"certificate"} />
    </Wrapper>
  );
};

export default AboutCertificateWrap;
