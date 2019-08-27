import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { Title } from "../../components/Title/Title";
import IconIMG from "../../components/IconIMG/IconIMG";
import IconSVG from "../../components/IconSVG/IconSVG";
import { Article } from "../../components/Article/Article";
import contactGirl from "../../assets/images/contact-template-girl.jpg";
import grapesGirl from "../../assets/images/girl-in-grapes.jpg";
import blob from "../../assets/images/blob.svg";
import blob3 from "../../assets/images/blob3.svg";
import dots from "../../assets/images/dots2.svg";
import handsWithGrapes from "../../assets/images/hands-with-grapes.jpg";
import Footer from "../../templates/Footer/Footer";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { TimelineMax } from "gsap/TimelineMax";

const Contact = styled.section`
  background-color: white;
  color: black;
  overflow: hidden;
  position: relative;
  background-color: #e5dede;

  .grapes-hands {
    will-change: transform, opacity;
    visibility: hidden;
    width: 90%;
    margin: 0 auto;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    max-width: 923px;
  }
`;

const Header = styled.header`
  height: 90vw;
  position: relative;
  width: 100%;
  margin: 70px auto 0;
  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 9vw auto 10vw 30px;
    height: 25vw;
  }
  @media only screen and (min-width: 1200px) {
    margin: 120px auto 120px;
    height: 300px;
    width: 600px;
    left: -270px;
  }

  .contact-girl {
    will-change: transform, opacity;
    visibility: hidden;
    position: absolute;
    top: 0px;
    left: 0%;
    width: 95%;
    z-index: 3;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
  }

  .grapes-girl {
    will-change: transform, opacity;
    visibility: hidden;
    position: absolute;
    width: 49%;
    top: 48px;
    left: 51%;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    z-index: 4;
    img {
      display: block;
      width: 100%;
    }

    h1 {
      will-change: transform, opacity;
      position: absolute;
      bottom: -27vw;
      left: -93%;
      font-size: 8vw;
      visibility: hidden;
      @media only screen and (min-width: 768px) {
        bottom: 20vw;
        left: 112%;
        font-size: 4vw;
        width: 171%;
      }
      @media only screen and (min-width: 1200px) {
        bottom: 240px;
        left: 330px;
        font-size: 48px;
        width: 494px;
      }

      span {
        position: relative;
        display: block;
        ::after {
          position: absolute;
          top: 55%;
          left: 10%;
          z-index: -1;
          display: block;
          content: "";
          background-color: #cd97c4;
          width: 50%;
          height: 2px;
        }
      }
    }
  }

  .blob {
    will-change: transform, opacity;
    position: absolute;
    width: 80%;
    top: 44vw;
    left: 10%;
    visibility: hidden;
    z-index: 1;
    @media only screen and (min-width: 768px) {
      top: 21vw;
    }
    @media only screen and (min-width: 1200px) {
      top: 255px;
      width: 480px;
    }
  }

  .blob.orange {
    will-change: transform, opacity;
    top: -5vw;
    left: 30%;
    transform: rotate(90deg);
    @media only screen and (min-width: 1200px) {
      top: -61px;
    }
  }

  .dots {
    will-change: transform, opacity;
    position: absolute;
    top: 82vw;
    left: 78%;
    width: 16%;
    z-index: 2;
    @media only screen and (min-width: 768px) {
      left: 172%;
      top: 12vw;
    }
    @media only screen and (min-width: 1200px) {
      width: 96px;
      top: 144px;
    }
  }
`;

const StyledArticle = styled(Article)`
  position: relative;
  margin: 50px auto 50px;
  visibility: hidden;
  will-change: transform, opacity;
  @media only screen and (min-width: 768px) {
    width: 40%;
    top: -14vw;
    left: 26%;
    z-index: 1;
  }
  @media only screen and (min-width: 1200px) {
    top: -168px;
    left: 312px;
  }
  p {
    padding-bottom: 40px;
  }

  span {
    position: absolute;
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

const StyledGM = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #666;
`;

class ContactTemplate extends Component {
  state = {};

  componentDidMount() {
    this.props.findPath();
    this.props.handleSocialMenuFalse();
    const google = document.querySelector(".google-maps");
    google.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.9359390905311!2d19.112312729247897!3d50.31537385509378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d08dae05b0e9%3A0xc64a47602ead24ff!2sRewolucjonist%C3%B3w+4%2C+42-500+B%C4%99dzin!5e0!3m2!1spl!2spl!4v1564747713851!5m2!1spl!2spl" zoom="20" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`;

    const title = document.querySelector(".title");
    const contactGirl = document.querySelector(".contact-girl");
    const grapesGirl = document.querySelector(".grapes-girl");
    const blobs = document.querySelectorAll(".blob");
    const dots = document.querySelector(".dots");
    const article = document.querySelector(".article");
    const grapesHands = document.querySelector(".grapes-hands");

    const tlContactMount = new TimelineMax({
      reversed: false
    });

    tlContactMount
      .addPause()
      .set(contactGirl, { visibility: "visible" })
      .set(grapesGirl, { visibility: "visible" })
      .set(title, { visibility: "visible" })
      .set(blobs, { visibility: "visible" })
      .set(dots, { visibility: "visible" })
      .set(article, { visibility: "visible" })
      .set(grapesHands, { visibility: "visible" })
      .from(contactGirl, 1, { opacity: 0, y: 40 })
      .from(grapesGirl, 1, { opacity: 0, y: 40 }, "-=0.9")
      .from(title, 1, { opacity: 0, y: 50 }, "-=0.9")
      .from(blobs[0], 1, { opacity: 0, y: 50 }, "-=0.9")
      .from(blobs[1], 1, { opacity: 0, y: 50 }, "-=1")
      .from(dots, 1, { opacity: 0, y: 50 }, "-=1")
      .from(article, 1, { opacity: 0, y: 50 }, "-=1")
      .from(grapesHands, 1, { opacity: 0, y: 50 }, "-=1.1");

    setTimeout(() => {
      tlContactMount.play();
    }, 1800);
  }
  render() {
    return (
      <>
        <Contact>
          <GlobalStyles isScrollable={this.props.isScrollable} />
          <Header>
            <img
              className={"contact-girl"}
              src={contactGirl}
              alt="contact girl"
            />
            <div className={"grapes-girl"}>
              <img
                className={"grapes-girl-photo"}
                src={grapesGirl}
                alt="grapes girl"
              />
              <Title className={"title"}>
                najwyższa jakość usług
                <br /> w najdogodniejszy
                <span>sposób</span>
              </Title>
            </div>
            <IconSVG className={"blob blue"} src={blob} />
            <IconSVG className={"blob orange"} src={blob3} />
            <IconSVG className={"dots"} src={dots} />
          </Header>
          <StyledArticle className={"article"}>
            <p>
              Zabiegi wykonuję z dojazdem do klienta na terenie{" "}
              <strong>
                Będzina, Czeladzi, Dąbrowy Górniczej, Sosnowca, Katowic i okolic
              </strong>
              , a jedyne czego potrzebuję do pracy to dostępu do wody, prądu i
              krzesła.
            </p>
            <span />
            <span />
          </StyledArticle>
          <IconIMG
            className={"grapes-hands"}
            src={handsWithGrapes}
            alt={"dłonie z winogronami"}
          />
          <ContactInfo />
        </Contact>
        <StyledGM className={"google-maps"} />
        <Footer />
      </>
    );
  }
}

export default ContactTemplate;
