import React, { Component } from "react";
import styled from "styled-components";
import IconSVG from "../../components/IconSVG/IconSVG";
import { Article } from "../../components/Article/Article";
import { Title } from "../../components/Title/Title";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import marta from "../../assets/images/owner.png";
import marta2 from "../../assets/images/owner2.png";
import blob3 from "../../assets/images/blob3.svg";
import blob4 from "../../assets/images/blob4.svg";
import dotted from "../../assets/images/dots.svg";
import certificate from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
import heroImageAbout from "../../assets/images/heroimage-about.jpg";

const Section = styled.section`
  position: relative;
  background-color: #c1c9d0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.8s linear;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  max-height: 320px;

  .marta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-98%, -77%);
    width: 45%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
  }
  .marta2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-2%, -55%);
    width: 45%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
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
    top: 50%;
    left: 40%;
    width: 40%;
    z-index: -1;
  }
  div:nth-child(5) {
    position: absolute;
    top: 55%;
    left: 10%;
    width: 40%;
    z-index: -1;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 2;
  }
`;

const StyledArticle1 = styled(Article)`
  margin: 0px auto 50px;
  padding-bottom: 45px;
  border-bottom: 10px double white;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 100px 0 30px 20px;
  }
`;
const StyledArticle2 = styled(Article)`
  margin: 50px auto 50px;
  border-top: 10px double white;
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
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  max-height: 450px;

  .certificate {
    position: relative;
    transform: translate(4%, 0);
    width: 80%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-height: 250px;
  }
  .certificate2 {
    position: relative;
    transform: translate(-4%, 0);
    width: 80%;
    margin-top: 20px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-height: 250px;
  }

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 3;
  }
`;

const Header = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${heroImageAbout});
    background-size: cover;
    background-position: 58% 50%;
    background-repeat: no-repeat;
  }
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const StyledTitle = styled(Title)`
  transform: translateY(-200%);
  margin: 0;
  top: 50%;
  left: 40%;
  font-size: 41px;
  font-family: "DM Serif Display", serif;

  ::before {
    display: none;
  }
`;

const MainWrap = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
`;

class AboutTemplate extends Component {
  state = {};

  render() {
    return (
      <>
        <Section>
          <GlobalStyles />
          <Header>
            <StyledTitle>kim jestem?</StyledTitle>
          </Header>
          <MainWrap>
            <Title>
              Cześć!
              <br /> Nazywam się Marta
            </Title>
            <StyledWrapper>
              <img
                src={marta}
                className={"marta"}
                alt={"owner of the company with puppy"}
              />
              <img
                src={marta2}
                className={"marta2"}
                alt={"owner of the company"}
              />
              <IconSVG src={blob3} className={"blob3"} />
              <IconSVG src={blob4} className={"blob4"} />
              <IconSVG className={"dotted"} src={dotted} />
            </StyledWrapper>
            <StyledArticle1>
              <p>
                Posiadam certyfikaty marki <strong>Amazon Keratin</strong>,
                które otrzymałam po ukończeniu kursu, gdzie zdobyłam wiedzę, jak
                profesjonalnie wykonywać zabiegi polegające na rekonstrukcji
                włosów. Wszystkie zabiegi wykonuję z{" "}
                <strong>najwyższą starannością</strong>, skupiając szczególną
                uwagę na sterylności narzędzi, których używam.
              </p>
            </StyledArticle1>
            <StyledWrapper2>
              <img
                src={certificate}
                className={"certificate"}
                alt={"certificate"}
              />
              <img
                src={certificate2}
                className={"certificate2"}
                alt={"certificate"}
              />
            </StyledWrapper2>
            <StyledArticle2>
              <p>
                Stawiam na rozwój, śledzę nowinki techniczne i{" "}
                <strong>najnowsze trendy fryzjerskie</strong>. Chcąc podnosić
                swoje kwalifikacje w najbliższej przyszłości planuję
                uczestnictwo w kursach <strong>przedłużania włosów</strong> oraz{" "}
                <strong>upięć okolicznościowych</strong>.
              </p>
            </StyledArticle2>
          </MainWrap>
        </Section>
      </>
    );
  }
}

export default AboutTemplate;

// Profesjonalizm to dla mnie nie tylko znajomość technik, ale również najlepsze kosmetyki. Dlatego też współpracuję z firmą, która oferuje produkty najlepszej jakości, w skład których wchodzą naturalne składniki pochodzenia roślinnego.
// to jest zawarte w sekcji main

// Zabiegi wykonuję z dojazdem do klienta na terenie Będzina, Czeladzi, Dąbrowy Górniczej, Sosnowca, Katowic i okolic, a jedyne czego potrzebuję do pracy to dostępu do wody, prądu i krzesła.
//to ma być widoczne po kliknięciu w umów wizytę
