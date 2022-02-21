import React from "react";
import Samecard from "./Samecard";
import {
  Cardgwrap,
  Count,
  Countwrapper,
  MainWrapper,
  Numbc,
  Numbp,
} from "./Styles/Card.styles";
import { CardG } from "./Styles/Card.styles";
import { Headfreq, ListArrow } from "./Styles/CommonP.styles";

function CardR() {
  const listObj = [
    "Personal Injury Law",
    "Employment Law",
    "Immigration Law ",
    "Dispute Resolution Law ",
    "Property Law",
  ];
  return (
    <>
      <MainWrapper one>
        <Countwrapper>
          <Count end>
            <Numbc>500+</Numbc>
            <Numbp>We have won the cases</Numbp>
          </Count>
          <Count>
            <Numbc>100+</Numbc>
            <Numbp>We have received award</Numbp>
          </Count>
        </Countwrapper>
        <Samecard bg="bg" primary="primary" />
      </MainWrapper>
      <MainWrapper>
        <Samecard tc="tc" />
        <ListArrow>
          {listObj.map((value) => (
            <li key={value}>
              {value}
              <i className="fas fa-arrow-right"></i>
            </li>
          ))}
        </ListArrow>
      </MainWrapper>
    </>
  );
}

export default CardR;
