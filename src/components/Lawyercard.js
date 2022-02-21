import React from "react";

import {
  FindLawyerContainer,
  ImageContainer,
  FindLawyerTitle,
  FindLawyerDesc,
} from "./Styles/Lawyercard.styles";
function Lawyercard() {
  return (
    <>
      <FindLawyerContainer>
        <ImageContainer />
        <FindLawyerTitle>
          <h2>Find The Best and Expert Lawyer For Your Case</h2>
        </FindLawyerTitle>
        <FindLawyerDesc>
          <div>
            <p>
              When your Liberty is at stake or your Financial future is in
              jeopardy, you need an aggressive defense to protect your rights.
            </p>
            <button>
              <a href="#">Find a Lawyer</a>
            </button>
          </div>
        </FindLawyerDesc>
      </FindLawyerContainer>
    </>
  );
}

export default Lawyercard;
