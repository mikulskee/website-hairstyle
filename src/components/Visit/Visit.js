import React from "react";
import styled from "styled-components";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { Title } from "../../components/Title/Title";

const Container = styled.div`
  will-change: opacity;
  opacity: 1;
  visibility: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #c1c9d0;
  z-index: 99999;
  overflow: hidden;

  .contact-info {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 50%;
    padding-bottom: 20%;
    @media only screen and (orientation: landscape) {
      flex-direction: row;
      margin: 0;
      padding: 18% 0 0;
    }

    .hours {
      display: none;
    }
    .phone {
      @media only screen and (orientation: landscape) {
        margin-right: 40px;
      }
    }
    div {
      will-change: opacity, transform;
      visibility: hidden;
      margin-left: -40%;
      color: white;
      @media only screen and (orientation: landscape) {
        margin: 0;
      }
      h2 {
        font-size: 30px;
      }
      a {
        color: white;
      }
    }
  }
`;
const X = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  height: 42px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 11px;
  margin-right: 32px;
  ::after,
  ::before {
    position: absolute;
    transform: rotate(45deg);
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }

  ::before {
    transform: rotate(-45deg);
  }
`;

const StyledTitle = styled(Title)`
  margin: 11px 0 0 20px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
`;

const Visit = () => {
  return (
    <Container className={"visit"}>
      <StyledTitle>
        Prostowanie
        <br />
        keratynowe
      </StyledTitle>
      <X />
      <ContactInfo className={"contact-info"} />
    </Container>
  );
};

export default Visit;
