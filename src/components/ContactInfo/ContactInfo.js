import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #666;
  margin: 50px 20px;
  p,
  a {
    font-weight: 600;
    font-size: 14px;
    padding: 20px 10px;
  }

  .hours p:nth-of-type(1) {
    padding-bottom: 0;
  }
  .phone,
  .mail {
    margin-top: 40px;
  }
  h2 {
    padding: 20px 10px;
  }

  a {
    position: relative;
    text-decoration: none;
    color: #666;
    text-decoration: underline;
  }
`;

const ContactInfo = props => {
  return (
    <Contact className={props.className}>
      <div className="hours">
        <h2>Godziny Otwarcia</h2>
        <p>
          Poniedziałek-Piątek <br />
          16:00 - 20:00
        </p>
        <p>
          Sobota-Niedziela <br />
          9:00 - 14:00
        </p>
      </div>
      <div className="phone">
        <h2>Telefon</h2>
        <a href={"tel:555-666-777"}>555-666-777</a>
      </div>
      <div className="mail">
        <h2>Mail</h2>
        <a href={"mailto:biuro@aleproste.pl"}>biuro@aleproste.pl</a>
      </div>
    </Contact>
  );
};

export default ContactInfo;
