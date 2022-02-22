import React from "react";
import {
  Button,
  Button2,
  CardG,
  Cont,
  Contthree,
  Conttwo,
  CountC,
  Ellipse,
  FrontImg,
  Gradbtn,
  Gridone,
  Gridtwo,
  MainWrap,
  Pare,
  PatternImg,
  Vid,
} from "./Styles/Home.styles";
import menimg from "./Assets/blackm.png";
import pattern from "./Assets/Pattern.png";
import vid from "./Assets/vid.png";
import CardR from "./CardR";
import { Headfreq } from "./Styles/CommonP.styles";
import Footer from "./Footer";
import Lawyercard from "./Lawyercard";
import { MainWrapper } from "./Styles/Card.styles";
import Carousel from "./Carousel";
function Home() {
  return (
    <>
      {/* first container */}
      {/* <Pare> */}
      <Cont>
        <Gridone>
          <h6>Law</h6>
          <h1>No Case too Big,No Case too Small</h1>
          <Headfreq>
            When your Liberty is at stake or your Financial future is in
            jeopardy, you need an aggressive defense to protect your rights.
          </Headfreq>
          <Button>Our Services</Button>
          <Button2>Request A Call</Button2>
        </Gridone>
        <Gridtwo>
          <FrontImg>
            <img src={menimg} />
          </FrontImg>
          <PatternImg>
            <img src={pattern} />
          </PatternImg>
        </Gridtwo>
      </Cont>
      {/* </Pare> */}

      {/* second container */}
      <Pare>
        <Vid>
          <img src={vid} />
        </Vid>
        <Conttwo>
          <Gradbtn>
            <Ellipse>
              82
              <sup>%</sup>
            </Ellipse>
          </Gradbtn>
          <div>
            <h4>Our Success rate </h4>
            <Headfreq>
              When your Liberty is at stake or your Financial future is in
              jeopardy, you need an aggressive defense to protect your rights.
            </Headfreq>
          </div>
        </Conttwo>
      </Pare>

      {/* <CardR />
      <Carousel />
      <Lawyercard />
      <Footer /> */}
    </>
  );
}

export default Home;
