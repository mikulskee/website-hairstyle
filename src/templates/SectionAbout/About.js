import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import IconSVG from "../../components/IconSVG/IconSVG";
import { Article } from "../../components/Article/Article";
import marta from "../../assets/images/Marta1.svg";
import marta2 from "../../assets/images/Marta2.svg";
import blob3 from "../../assets/images/blob3.svg";
import blob4 from "../../assets/images/blob4.svg";
import certificate from "../../assets/images/certificate.svg";
import certificate2 from "../../assets/images/certificate2.svg";

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: #e5dede;
  z-index: -2;
  display: flex;
  flex-direction: column;
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
const StyledTitle = styled(Title)`
  transform: ${({ isVisible }) =>
    isVisible ? "translatey(0)" : "translatey(15%)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
`;

class About extends Component {
  state = {
    titleIsVisible: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleShowTitle);
  }

  handleShowTitle = () => {
    let top = ReactDOM.findDOMNode(this.refs["title"]).getBoundingClientRect()
      .top;
    let height = ReactDOM.findDOMNode(
      this.refs["title"]
    ).getBoundingClientRect().height;
    let middle = top + height;
    if (middle <= window.innerHeight) {
      this.setState({
        titleIsVisible: true
      });
    } else {
      this.setState({
        titleIsVisible: false
      });
    }
  };
  render() {
    return (
      <Section>
        <StyledTitle ref="title" isVisible={this.state.titleIsVisible}>
          kim jestem?
        </StyledTitle>
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
