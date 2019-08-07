import React, { Component } from "react";
import styled from "styled-components";
import IconSVG from "../../components/IconSVG/IconSVG";
import { Article } from "../../components/Article/Article";
import { Title } from "../../components/Title/Title";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import marta from "../../assets/images/owner.png";
import marta2 from "../../assets/images/owner2.png";
import blob1 from "../../assets/images/blob.svg";
import blob3 from "../../assets/images/blob3.svg";
import dotted from "../../assets/images/dots.svg";
import smallDots from "../../assets/images/dots2.svg";
import certificate from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
import heroImageAbout from "../../assets/images/heroimage-about.jpg";
import { TimelineMax } from "gsap/TimelineMax";
import { Power3 } from "gsap/EasePack";
import Parallax from "react-rellax";
import Footer from "../../templates/Footer/Footer";

const Section = styled.section`
  position: relative;
  background-color: #c1c9d0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.8s linear;
`;

const SectionTitle = styled(Title)`
  transform: translate(23%, -190%);

  @media only screen and (orientation: portrait) and (min-width: 375px) {
    transform: translate(23%, -200%);
  }

  span {
    display: block;
  }
  .section-title__span {
    will-change: transform, opacity;
    visibility: hidden;
    font-size: 46px;
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      font-size: 55px;
    }
    @media only screen and (orientation: portrait) and (min-width: 375px) {
      font-size: 52px;
    }
    @media only screen and (orientation: portrait) and (min-width: 414px) {
      font-size: 56px;
    }
  }
  .section-title__span2 {
    will-change: transform, opacity;
    visibility: hidden;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ::after {
      position: absolute;
      top: 55%;
      margin: 0 auto;
      z-index: -1;
      display: block;
      content: "";
      background-color: #cd97c4;
      width: 110%;
      height: 3px;
    }
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      font-size: 27px;
    }
    @media only screen and (orientation: portrait) and (min-width: 375px) {
      font-size: 23px;
    }
    @media only screen and (orientation: portrait) and (min-width: 414px) {
      font-size: 26px;
    }
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  max-height: 320px;

  @media only screen and (orientation: portrait) and (min-width: 375px) {
    margin-top: 140px;
  }

  @media only screen and (orientation: landscape) and (min-width: 460px) {
    height: 100vh;
    margin-top: 100px;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 2;
  }

  .section-header__parallax {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (orientation: portrait) and (min-width: 414px) {
      top: 3%;
    }
    @media only screen and (orientation: landscape) and (min-width: 480px) {
      top: 4%;
    }
    @media only screen and (orientation: landscape) and (min-width: 800px) {
      top: 10%;
    }

    .marta {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: -69px;
      left: 0;
      width: 55%;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      @media only screen and (orientation: landscape) and (min-width: 460px) {
        max-width: 200px;
        top: -18%;
        left: 12%;
      }
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        left: 16%;
      }
      @media only screen and (orientation: landscape) and (min-width: 640px) {
        left: 20%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        left: 9%;
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        left: 11%;
      }
    }
    .marta2 {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: -41px;
      right: 0;
      width: 55%;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      @media only screen and (orientation: landscape) and (min-width: 460px) {
        max-width: 200px;
        top: -6%;
        right: 12%;
      }
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        right: 16%;
      }
      @media only screen and (orientation: landscape) and (min-width: 640px) {
        right: 20%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        right: -4%;
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        right: 5%;
      }
    }
  }
  .section-header__parallax--blob {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (orientation: portrait) and (min-width: 375px) and (min-height: 812px) {
      top: -26px;
    }
    @media only screen and (orientation: landscape) and (min-width: 667px) {
      top: 36px;
    }

    .blob-orange {
      position: absolute;
      transform: translate(0, 28%) rotate(100deg);
      width: 72%;
      max-width: 340px;
      z-index: -1;
      @media only screen and (orientation: landscape) and (min-width: 480px) {
        transform: translate(0, 17%) rotate(100deg);
      }
    }
    .blob-blue {
      position: absolute;
      transform: translate(6%, 14%) rotate(118deg);
      width: 102%;
      z-index: -1;
      /* max-width: 340px; */
      @media only screen and (orientation: portrait) and (min-width: 375px) {
        width: 106%;
      }
      @media only screen and (orientation: landscape) and (min-width: 460px) {
        transform: translate(6%, 14%) rotate(134deg);
        width: 92%;
      }
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        width: 77%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        width: 106%;
        transform: translate(6%, -1%) rotate(130deg);
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        width: 96%;
        transform: translate(6%, 6%) rotate(130deg);
      }
    }
    .dotted {
      position: absolute;
      transform: translate(-51%, 187%);
      width: 40%;
      z-index: -1;
      @media only screen and (orientation: landscape) and (min-width: 480px) {
        transform: translate(-51%, 153%);
        width: 36%;
      }
      @media only screen and (orientation: landscape) and (min-width: 640px) {
        transform: translate(-46%, 153%);
        width: 30%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        transform: translate(-64%, 166%);
        width: 36%;
      }
    }
    .small-dots {
      position: absolute;
      transform: translate(259%, -300%);
      width: 14%;
      z-index: -1;
      @media only screen and (orientation: portrait) and (min-width: 375px) {
        transform: translate(259%, -330%);
      }
      @media only screen and (orientation: landscape) and (min-width: 480px) {
        transform: translate(241%, -272%);
      }
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        transform: translate(238%, -257%);
        width: 12%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        transform: translate(304%, -479%);
      }
      @media only screen and (orientation: landscape) and (min-width: 736px) {
        transform: translate(325%, -434%);
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        transform: translate(303%, -363%);
      }
    }
  }
`;

const StyledArticle1 = styled(Article)`
  margin: 40px auto 50px;
  padding-bottom: 30px;
  position: relative;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 100px 0 30px 20px;
  }

  @media only screen and (orientation: portrait) and (min-width: 375px) {
    margin-top: 50px;
  }
  @media only screen and (orientation: portrait) and (min-width: 414px) {
    margin-top: 60px;
  }
  @media only screen and (orientation: portrait) and (min-width: 375px) and (min-height: 812px) {
    margin-top: 0px;
  }

  span {
    position: absolute;
    visibility: hidden;
    display: block;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
  span:nth-child(2) {
    transform: translateY(-250%);
  }
`;
const StyledArticle2 = styled(Article)`
  margin: 60px auto 50px;
  position: relative;
  @media only screen and (orientation: landscape) {
    margin: 50px auto 50px;
  }
  p {
    padding: 40px 10px;
  }
  span {
    position: absolute;
    visibility: hidden;
    display: block;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
  span:nth-child(2) {
    transform: translateY(-250%);
  }
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
  @media only screen and (orientation: landscape) and (min-width: 460px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    flex-direction: column;
    margin-left: 20px;
    order: 3;
    width: 50%;
  }

  .certificate {
    position: relative;
    transform: translate(4%, 0);
    width: 70%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-height: 250px;
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      width: 45%;
      transform: translate(0);
    }
    @media only screen and (orientation: landscape) and (min-width: 667px) {
      width: 70%;
      align-self: flex-start;
    }
  }
  .certificate2 {
    position: relative;
    transform: translate(-4%, 0);
    width: 70%;
    margin-top: 20px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-height: 250px;
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      width: 45%;
      transform: translate(0);
      margin-top: 0;
    }
    @media only screen and (orientation: landscape) and (min-width: 667px) {
      margin-top: 15px;
      width: 70%;
    }
  }
`;

const Header = styled.div`
  position: relative;
  height: 85vh;
  width: 100vw;
  overflow: hidden;
  z-index: 1;

  .header__parallax {
    width: 100%;
    height: 100%;
  }

  .header__span {
    display: block;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background-image: url(${heroImageAbout});
    background-size: cover;
    background-position: 58% 50%;
    background-repeat: no-repeat;
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      background-position: 58% 30%;
    }
  }
  .header__span-cover {
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const AboutTitle = styled(Title)`
  margin: 0;
  top: 33%;
  left: 40%;
  visibility: hidden;
  line-height: 1;
  @media only screen and (orientation: landscape) and (min-width: 460px) {
    font-size: 37px;
  }
  @media only screen and (orientation: portrait) and (min-width: 375px) {
    font-size: 37px;
  }

  .about-title__span {
    position: absolute;
    top: 55%;
    right: 0;
    z-index: -1;
    display: block;
    background-color: #cd97c4;
    transform: scaleX(0);
    width: 150%;
    height: 3px;
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

  componentDidMount() {
    const aboutTitle = document.querySelector(".about-title");
    const headerSpan = document.querySelector(".header__span");
    const headerSpanCover = document.querySelector(".header__span-cover");
    const aboutTitleSpan = document.querySelector(".about-title__span");
    const sectionTitleSpans = document.querySelectorAll(".section-title span");
    const marta2 = document.querySelector(".marta2");
    const marta = document.querySelector(".marta");

    ///// About Mount Template \/
    const tlAboutMount = new TimelineMax({
      reversed: false
    });

    tlAboutMount
      .addPause()
      .set(headerSpan, { visibility: "visible" })
      .set(headerSpanCover, { visibility: "visible" })
      .set(aboutTitleSpan, { scaleX: 0 })
      .set(aboutTitle, { visibility: "visible" })
      .addLabel("start")
      .from(headerSpan, 0.7, { opacity: 0, scale: 1.2, transformOrigin: 0 })
      .from(headerSpanCover, 0.7, { opacity: 0 }, "start")
      .from(aboutTitle, 0.7, { opacity: 0, y: -100 }, "-=0.45")
      .to(aboutTitleSpan, 0.5, { scaleX: 1.1, transformOrigin: 0 })
      .to(aboutTitleSpan, 0.35, { scaleX: 1, transformOrigin: 0 });

    ///// About Mount Template /\

    //// Section Title Animtion \/
    const tlSectionTitle = new TimelineMax({
      reversed: false
    });

    tlSectionTitle
      .addPause()
      .set(sectionTitleSpans, { visibility: "visible" })
      .set(marta, { visibility: "visible" })
      .set(marta2, { visibility: "visible" })
      .addLabel("start")
      .from(sectionTitleSpans[0], 0.7, { opacity: 0, y: 100 })
      .from(sectionTitleSpans[1], 0.7, { opacity: 0, y: 100 }, "-=0.57")
      .from(marta, 0.7, { opacity: 0, y: 60 }, "start")
      .from(marta2, 0.7, { opacity: 0, x: 40 }, "start");

    //// Section Title Animation /\ ///
    //
    //
    //
    //
    //// Artcile One Animation \/ ////
    const articleTwo = document.querySelector(".article-two p");
    const spansTwo = document.querySelectorAll(".article-two span");
    const firstSpansTwo = document.querySelector(".article-two span");
    const articleOne = document.querySelector(".article-one p");
    const spans = document.querySelectorAll(".article-one span");

    const tlArticleOne = new TimelineMax({ reversed: true });
    const tlArticleTwo = new TimelineMax({ reversed: true });

    tlArticleOne
      .set(articleOne, { visibility: "visible" })
      .set(spans, { visibility: "visible", scaleX: 0 })
      .from(articleOne, 0.5, {
        ease: Power3.easeOut,
        opacity: 0,
        y: 100
      })
      .to(spans[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spans[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spans[1], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.25")
      .to(spans[1], 0.35, { scaleX: 1, transformOrigin: 0 });

    tlArticleTwo
      .set(articleTwo, { visibility: "visible" })
      .set(spansTwo, { visibility: "visible", scaleX: 0 })
      .to(spansTwo[1], 0.5, { scaleX: 1.1, transformOrigin: 0 })
      .to(spansTwo[1], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spansTwo[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spansTwo[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .from(
        articleTwo,
        0.7,
        {
          ease: Power3.easeOut,
          opacity: 0,
          y: 100
        },
        "-=1"
      );

    //// Article One Animation /\ ////
    window.addEventListener("scroll", () => {
      let marta2Top = marta2.getBoundingClientRect().top + 10;
      let topArticleTwo = firstSpansTwo.getBoundingClientRect().top + 10;
      let topArticleOne = articleOne.getBoundingClientRect().top;

      marta2Top <= window.innerHeight
        ? tlSectionTitle.play()
        : tlSectionTitle.reverse();

      topArticleOne <= window.innerHeight
        ? tlArticleOne.play()
        : tlArticleOne.reverse();

      topArticleTwo <= window.innerHeight
        ? tlArticleTwo.play()
        : tlArticleTwo.reverse();
    });

    setTimeout(() => {
      tlAboutMount.play();
    }, 1800);
  }
  render() {
    return (
      <>
        <Section>
          <GlobalStyles isScrollable={this.props.isScrollable} />
          <Header>
            <Parallax className={"header__parallax"} speed={-1.8}>
              <span className={"header__span"} />
              <span className={"header__span-cover"} />
            </Parallax>

            <AboutTitle className={"about-title"}>
              kim jestem? <span className={"about-title__span"} />
            </AboutTitle>
          </Header>

          <MainWrap>
            <StyledWrapper className={"section-header"}>
              <Parallax
                className={"section-header__parallax"}
                speed={0.3}
                percentage={1.8}
              >
                <SectionTitle className={"section-title"}>
                  <span className={"section-title__span"}>Cześć,</span>
                  <span className={"section-title__span2"}>
                    {" "}
                    Nazywam się Marta!{" "}
                  </span>
                </SectionTitle>
                <img
                  src={marta2}
                  className={"marta2"}
                  alt={"owner of the company"}
                />

                <img
                  src={marta}
                  className={"marta"}
                  alt={"owner of the company with puppy"}
                />
              </Parallax>
              <Parallax
                speed={0.1}
                percentage={-2.6}
                className={"section-header__parallax--blob"}
              >
                <IconSVG src={blob3} className={"blob-orange"} />
                <IconSVG src={blob1} className={"blob-blue"} />
                <IconSVG className={"dotted"} src={dotted} />
                <IconSVG className={"small-dots"} src={smallDots} />
              </Parallax>
            </StyledWrapper>
            <StyledArticle1 className={"article-one"}>
              <p>
                Posiadam certyfikaty marki <strong>Amazon Keratin</strong>,
                które otrzymałam po ukończeniu kursu, gdzie zdobyłam wiedzę, jak
                profesjonalnie wykonywać zabiegi polegające na rekonstrukcji
                włosów. Wszystkie zabiegi wykonuję z{" "}
                <strong>najwyższą starannością</strong>, skupiając szczególną
                uwagę na sterylności narzędzi, których używam.
              </p>
              <span />
              <span />
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
            <StyledArticle2 className={"article-two"}>
              <span />
              <span />
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
        <Footer />
      </>
    );
  }
}

export default AboutTemplate;

// Profesjonalizm to dla mnie nie tylko znajomość technik, ale również najlepsze kosmetyki. Dlatego też współpracuję z firmą, która oferuje produkty najlepszej jakości, w skład których wchodzą naturalne składniki pochodzenia roślinnego.
// to jest zawarte w sekcji main
