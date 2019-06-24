import React, { Component } from "react";
import styled from "styled-components";
import Burger from "../../components/Burger/Burger";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { Title } from "../../components/Title/Title";

const Contact = styled.section`
  max-width: 100vh;
  min-height: 200vh;
  background-color: white;
  color: black;
  overflow: hidden;
  position: relative;
  background-color: #c1c9d0;
`;

const StyledUpperWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  div:nth-child(1) {
    display: flex;
  }
`;

class ContactTemplate extends Component {
  state = {
    isOpen: false,
    id: 0
  };
  render() {
    const handleButton = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        id: prevState.id + 1
      }));

      console.log("ok");
    };
    return (
      <Contact>
        <GlobalStyles isScrollable={this.props.isScrollable} />
        <Title>Strona w budowie</Title>
        <StyledUpperWrapper>
          <div>
            <Burger
              handleButton={handleButton}
              isOpen={this.state.isOpen}
              id={this.state.id}
            />
          </div>
        </StyledUpperWrapper>
        <BurgerMenu isOpen={this.state.isOpen} />
      </Contact>
    );
  }
}

export default ContactTemplate;
