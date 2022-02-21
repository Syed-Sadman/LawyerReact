import styled from "styled-components";

export const MainWrapper = styled.div`
  position: absolute;
  top: ${(props) => (props.one ? "1335px" : "1899px")};
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`;

export const Cardgwrap = styled.div`
  display: grid;
  /* padding: 0rem 15rem; */
  background-color: ${(props) => (props.bg ? "var(--primary-dark)" : "none")};
  @media screen and (max-width: 750px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;
export const CardG = styled.div`
  display: grid;
  place-content: center;
  padding: 2rem 0rem 2rem 1rem;
  @media screen and (max-width: 750px) {
    place-content: start;
    /* padding: 2rem 0rem 2rem 1rem; */
  }

  & h1 {
    font-size: clamp(26px, 3vw, 44px);
    color: ${(props) => (props.tc ? "var(--text-head)" : "#FFFFFF")};
    margin-bottom: 10px;
    width: 14ch;
  }
  & span {
    font-weight: 600;
    color: rgba(255, 185, 0, 1);
    font-size: clamp(12px, 1.5vw, 18px);
    line-height: 40px;
    margin: 1vw 0rem 1vw 0rem;
  }
`;
export const Countwrapper = styled.div``;

export const Count = styled.div`
  background-color: var(--other-bglight);
  height: clamp(110px, 15vw, 576px);
  display: flex;
  align-items: ${(props) => (props.end ? "flex-end" : "flex-start")};
  justify-content: start;
  column-gap: 4px;
  padding: 1rem 6vw;
  border-bottom: 2px solid var(--other-strokelight);
  @media screen and (max-width: 750px) {
    justify-content: start;
    /* padding: 2rem 8vw; */
    padding: 2rem 0rem 2rem 1rem;
  }
`;

export const Numbc = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: clamp(26px, 3vw, 44px);
  line-height: 54px;
`;
export const Numbp = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: clamp(12px, 1.4vw, 17px);
  line-height: 54px;
`;
