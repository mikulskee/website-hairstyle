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
    @media only screen and (orientation: landscape) {
      width: 70%;
    }
  }
`;

const Header = styled.header`
  height: 364px;
  position: relative;
  width: 100%;
  margin-top: 70px;
  @media only screen and (min-width: 360px) {
    height: 390px;
  }
  @media only screen and (min-width: 375px) {
    height: 420px;
  }
  @media only screen and (orientation: landscape) {
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  div.contact-girl {
    will-change: transform, opacity;
    visibility: hidden;
    background-image: url(${contactGirl});
    position: relative;
    background-size: cover;
    width: 90%;
    width: 288px;
    height: 60%;
    height: 222px;
    z-index: 3;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    @media only screen and (min-width: 375px) {
      width: 338px;
      height: 260px;
    }
    @media only screen and (min-width: 414px) {
      width: 372px;
      height: 287px;
    }
    @media only screen and (orientation: landscape) {
      width: 385px;
      height: 257px;
      top: -8px;
      left: -60px;
    }
  }
  div.grapes-girl {
    will-change: transform, opacity;
    visibility: hidden;
    position: absolute;
    background-image: url(${grapesGirl});
    background-size: cover;
    background-position: center;
    top: 75px;
    right: 0;
    width: 50%;
    width: 160px;
    height: 55%;
    height: 203px;
    z-index: 3;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    @media only screen and (min-width: 375px) {
      width: 188px;
      height: 238px;
    }
    @media only screen and (min-width: 414px) {
      width: 207px;
      height: 263px;
    }
    @media only screen and (orientation: landscape) {
      top: 6px;
      right: 60px;
    }
    @media only screen and (orientation: landscape) and (min-width: 812px) {
      right: 113px;
    }

    h1 {
      will-change: transform, opacity;
      position: absolute;
      bottom: -90px;
      left: -85%;
      font-size: 27px;
      visibility: hidden;
      @media only screen and (min-width: 360px) {
        font-size: 32px;
        bottom: -106px;
        left: -113%;
      }
      @media only screen and (min-width: 375px) {
        font-size: 32px;
        bottom: -106px;
        left: -85%;
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
    top: 50%;
    left: 20%;
    visibility: hidden;
    @media only screen and (orientation: landscape) {
      width: 51%;
      max-width: 330px;
    }
  }

  .blob.orange {
    will-change: transform, opacity;
    top: 0;
    left: 30%;
    transform: rotate(90deg);
    max-width: 320px;
  }

  .dots {
    will-change: transform, opacity;
    position: absolute;
    top: 81%;
    left: 78%;
    width: 20%;
    z-index: 4;

    @media only screen and (orientation: landscape) {
      top: 90%;
      left: 81%;
      width: 10%;
    }
  }
`;

const StyledArticle = styled(Article)`
  position: relative;
  margin: 20px auto 50px;
  visibility: hidden;
  will-change: transform, opacity;
  @media only screen and (orientation: landscape) {
    margin: 70px auto 50px;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    margin: 40px auto 50px;
  }
  p {
    padding-bottom: 40px;
  }

  span {
    position: absolute;
    /* visibility: visible; */
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
  content: "lalalalala";
`;

class ContactTemplate extends Component {
  state = {};

  componentDidMount() {
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
            <div className="contact-girl" />
            <div className="grapes-girl">
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
