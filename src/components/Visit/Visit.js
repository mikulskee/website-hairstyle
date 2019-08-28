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
  /* overflow: hidden; */
  @media only screen and (min-width: 1024px) {
    border-radius: 30px;
    width: 740px;
    height: 400px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

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
    @media only screen and (min-width: 768px) and (orientation: portrait) {
      padding-left: 54%;
    }
    @media only screen and (min-width: 1024px) {
      padding: 0;
      align-items: center;
      flex-direction: row;
    }

    .hours {
      display: none;
    }
    .phone {
      @media only screen and (orientation: landscape) {
        margin-right: 40px;
      }
      @media only screen and (min-width: 1024px) {
        margin-left: 0;
        margin-right: 40px;
      }
    }
    .mail {
      @media only screen and (min-width: 1024px) {
        margin-left: 0;
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
        @media only screen and (min-width: 768px) and (orientation: portrait) {
          font-size: 40px;
        }
      }
      a {
        color: white;
        @media only screen and (min-width: 768px) and (orientation: portrait) {
          font-size: 20px;
        }
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 21px 46px;
  cursor: pointer;
  @media only screen and (min-width: 768px) and (orientation: portrait) {
    padding: 21px 47px;
    margin-top: 13px;
  }
  ::after,
  ::before {
    position: absolute;
    transform: rotate(45deg);
    content: "";
    display: block;
    width: 28px;
    height: 2px;
    background-color: #fff;
    @media only screen and (min-width: 768px) and (orientation: portrait) {
      width: 30px;
    }
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
  @media only screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 26px;
  }
`;
const Filter = styled.div`
  visibility: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99998;
  top: 0;
  left: 0;
`;

const Visit = () => {
  return (
    <>
      <Filter className={"filter"} />
      <Container className={"visit"}>
        <StyledTitle>
          Prostowanie
          <br />
          keratynowe
        </StyledTitle>
        <X />
        <ContactInfo className={"contact-info"} />
      </Container>
    </>
  );
};

export default Visit;
