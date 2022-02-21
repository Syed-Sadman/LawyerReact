import React from "react";
import {
  FooterContainer,
  GoTop,
  Logo,
  LmContainer,
  OuterListContainer,
  Map,
  LinkContainer,
  IconContainer,
} from "./Styles/Footer.styles";
import logo from "../components/Assets/Vector.png";
import map from "../components/Assets/map.png";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";

const listData = {
  one: ["About", "Services", "Consultation", "Appointment", "Support"],
  two: ["About", "Services", "Consultation", "Appointment", "Support"],
  three: ["About", "Services", "Consultation"],
};

function Footer() {
  return (
    <FooterContainer>
      <GoTop>
        <button>
          <a href="#">Back to top</a>
        </button>
      </GoTop>
      <LmContainer>
        <OuterListContainer>
          <Logo>
            <img src={logo} />
            <h2>Counsel</h2>
          </Logo>
          <div>
            <ul>
              {listData.one.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {listData.two.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {listData.three.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </OuterListContainer>
        <Map>
          <div style={{ position: "relative" }}>
            <img src={map} />
            <button>View Large Map</button>
          </div>
        </Map>
      </LmContainer>
      <LinkContainer>
        <p>©2021 UI HUT All Right Reserved</p>
        <IconContext.Provider value={{ color: "#FFB900", size: "10px" }}>
          <IconContainer>
            <div>
              <IoLogoFacebook />
            </div>
            <div>
              <IoLogoTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
          </IconContainer>
        </IconContext.Provider>
      </LinkContainer>
    </FooterContainer>
  );
}

export default Footer;
