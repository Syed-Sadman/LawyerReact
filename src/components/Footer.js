import React from "react";
import {
  IconC,
  InnerContainer1,
  LiCont,
  ListItem,
  MainCont,
  Mapimage,
  OuterContainer,
} from "./Styles/Footer.styles";
import icon from "./Assets/Vector.png";
import map from "./Assets/map.png";
function Footer() {
  return (
    <MainCont>
      <OuterContainer>
        <InnerContainer1>
          <IconC>
            <img src={icon} />
            <h4>Counsel</h4>
          </IconC>

          <LiCont>
            <ListItem>
              <li>About</li>
              <li>Services</li>
              <li>Communication</li>
              <li>Appointment</li>
              <li>Support</li>
            </ListItem>
            <ListItem>
              <li>Blog</li>
              <li>News</li>
              <li>Lawyer</li>
              <li>Department</li>
              <li>Support</li>
            </ListItem>
            <ListItem>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ListItem>
          </LiCont>
        </InnerContainer1>

        <Mapimage>
          <img src={map} />
        </Mapimage>
      </OuterContainer>
    </MainCont>
  );
}

export default Footer;
