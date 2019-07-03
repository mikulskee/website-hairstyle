import React, { Component } from "react";
import styled from "styled-components";
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

class ContactTemplate extends Component {
  state = {};

  render() {
    return (
      <>
        <Contact>
          <GlobalStyles isScrollable={this.props.isScrollable} />
          <Title>Strona w budowie</Title>
        </Contact>
      </>
    );
  }
}

export default ContactTemplate;
