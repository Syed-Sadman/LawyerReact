import React from "react";
import { Cardgwrap } from "./Styles/Card.styles";
import { CardG } from "./Styles/Card.styles";
import { Headfreq } from "./Styles/CommonP.styles";

function Samecard({ bg, primary, tc }) {
  return (
    <>
      <Cardgwrap bg={bg}>
        <CardG tc={tc}>
          <h1>We are The Best Law Firm Agency</h1>
          <Headfreq primary={primary}>
            When your Liberty is at stake or your Financial future is in
            jeopardy, you need an aggressive defense to protect your rights.
          </Headfreq>
          <span>Learn More</span>
        </CardG>
      </Cardgwrap>
    </>
  );
}

export default Samecard;
