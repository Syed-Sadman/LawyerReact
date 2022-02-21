import React from "react";
import {
  Button,
  Button2,
  CardG,
  Cont,
  Contthree,
  Conttwo,
  CountC,
  FrontImg,
  Gradbtn,
  Gridone,
  Gridtwo,
  PatternImg,
} from "./Styles/Home.styles";
import menimg from "./Assets/blackm.png";
import pattern from "./Assets/Pattern.png";
import CardR from "./CardR";
import { Headfreq } from "./Styles/CommonP.styles";
function Home() {
  return (
    <>
      {/* first container */}
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

      {/* second container */}

      <Conttwo>
        <Gradbtn>
          82
          <sup>%</sup>
        </Gradbtn>
        <h4>Our Success rate </h4>
        <Headfreq>
          When your Liberty is at stake or your Financial future is in jeopardy,
          you need an aggressive defense to protect your rights.
        </Headfreq>
      </Conttwo>
      <CardR />
    </>
  );
}

export default Home;
