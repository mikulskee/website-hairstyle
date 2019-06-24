import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import IconSVG from "../../components/IconSVG/IconSVG";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Burger from "../../components/Burger/Burger";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { Article } from "../../components/Article/Article";
import marta from "../../assets/images/Marta1.svg";
import marta2 from "../../assets/images/Marta2.svg";
import blob3 from "../../assets/images/blob3.svg";
import blob4 from "../../assets/images/blob4.svg";
import certificate from "../../assets/images/certificate.svg";
import certificate2 from "../../assets/images/certificate2.svg";

const Section = styled.section`
  margin: 0;
  min-height: 100vh;
  max-width: 100vh;
  position: relative;
  background-color: #e5dede;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 100px 5px 0;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    position: relative;
    transform: translate(10%, 0);
    width: 45%;
    max-width: 200px;
  }
  div:nth-child(2) {
    position: relative;
    transform: translate(-10%, 30%);
    width: 33%;
    max-width: 150px;
  }
  div:nth-child(3) {
    position: absolute;
    top: 25%;
    left: 50%;
    width: 45%;
    max-width: 280px;
    z-index: -1;
  }
  div:nth-child(4) {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 40%;
    z-index: -1;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 2;
  }
`;

const StyledArticle1 = styled(Article)`
  background-color: #c1c9d0;
  margin: 50px auto 50px;

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 100px 0 30px 20px;
  }
`;
const StyledArticle2 = styled(Article)`
  background-color: #c1c9d0;
  margin: 50px auto 50px;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 4;
    margin: 40px 20px 30px 10px;
    height: 50%;
    align-self: center;
  }
`;

const StyledWrapper2 = styled.div`
  position: relative;
  display: flex;
  padding: 0 5px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;

  div:nth-child(1) {
    position: relative;
    transform: translate(6%, 0);
    width: 75%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-width: 380px;
  }
  div:nth-child(2) {
    position: relative;
    transform: translate(-6%, 0);
    width: 75%;
    margin-top: 20px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-width: 380px;
  }

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 3;
    padding: 30px;
  }
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

class About extends Component {
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
      <Section>
        <GlobalStyles isScrollable={this.props.isScrollable} />
        <Title>kim jestem?</Title>
        <BurgerMenu isOpen={this.state.isOpen} />
        <StyledUpperWrapper>
          <div>
            <Burger
              handleButton={handleButton}
              isOpen={this.state.isOpen}
              id={this.state.id}
            />
          </div>
        </StyledUpperWrapper>
        <StyledWrapper>
          <IconSVG src={marta} className={"marta"} />
          <IconSVG src={marta2} className={"marta2"} />
          <IconSVG src={blob3} className={"blob3"} />
          <IconSVG src={blob4} className={"blob4"} />
        </StyledWrapper>
        <StyledArticle1>
          <p>
            Posiadam certyfikaty marki <strong>Amazon Keratin</strong>, które
            otrzymałam po ukończeniu kursu, gdzie zdobyłam wiedzę, jak
            profesjonalnie wykonywać zabiegi polegające na rekonstrukcji włosów.
            Wszystkie zabiegi wykonuję z <strong>najwyższą starannością</strong>
            , skupiając szczególną uwagę na sterylności narzędzi, których
            używam.
          </p>
        </StyledArticle1>
        <StyledWrapper2>
          <IconSVG src={certificate} className={"certificate"} />
          <IconSVG src={certificate2} className={"certificate2"} />
        </StyledWrapper2>
        <StyledArticle2>
          <p>
            Stawiam na rozwój, śledzę nowinki techniczne i{" "}
            <strong>najnowsze trendy fryzjerskie</strong>. Chcąc podnosić swoje
            kwalifikacje w najbliższej przyszłości planuję uczestnictwo w
            kursach <strong>przedłużania włosów</strong> oraz{" "}
            <strong>upięć okolicznościowych</strong>.
          </p>
        </StyledArticle2>
      </Section>
    );
  }
}

export default About;

// Profesjonalizm to dla mnie nie tylko znajomość technik, ale również najlepsze kosmetyki. Dlatego też współpracuję z firmą, która oferuje produkty najlepszej jakości, w skład których wchodzą naturalne składniki pochodzenia roślinnego.
// to jest zawarte w sekcji main

// Zabiegi wykonuję z dojazdem do klienta na terenie Będzina, Czeladzi, Dąbrowy Górniczej, Sosnowca, Katowic i okolic, a jedyne czego potrzebuję do pracy to dostępu do wody, prądu i krzesła.
//to ma być widoczne po kliknięciu w umów wizytę
