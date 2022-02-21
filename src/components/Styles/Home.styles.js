import styled from "styled-components";

export const Cont = styled.div`
  position: absolute;
  width: 100%;
  height: 297px;
  top: -80px;
  padding: 0rem 0rem 0rem 6.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 966px) {
    top: 100px;
    padding: 0rem 0rem 0rem 1rem;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Gridone = styled.div`
  margin-top: 10rem;
  align-self: center;
  & h6 {
    width: clamp(50px, 5vw, 92px);
    height: clamp(20px, 1.7vw, 36px);

    color: var(--primary-base);
    background-color: var(--primary-light);
    text-align: center;
    border-radius: 18px;
    padding: 0.3vw 0px;
    font-size: clamp(11px, 1.4vw, 16px);
  }
  & h1 {
    width: 11ch;
    font-size: clamp(
      2.16rem,
      4vw,
      3.84rem
    ); //perfectly done font size*********************
    font-style: normal;
    font-weight: 800px;
    /* font-family: Inter; */
    /* line-height: 56px; */
    letter-spacing: 0em;
    text-align: left;
    color: rgba(32, 23, 0, 1);
    margin-bottom: 18px;
  }
  @media screen and (max-width: 966px) {
    margin-top: 0rem;
    grid-column: 1/-1;
    grid-row: 1/2;

    & h5 {
      color: rgba(102, 97, 85, 1);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      /* letter-spacing: 1em; */
      text-align: left;
      width: 44ch;
    }
    & h6 {
      width: 50px;
      height: 20px;
      color: rgba(4, 150, 115, 1);
      background-color: rgba(205, 234, 227, 1);
      text-align: center;
      border-radius: 18px;
      padding: 2px 0px;
    }
  }
`;

export const Button = styled.button`
  width: clamp(4.88rem, 35vw, 12.18rem);
  height: clamp(31px, 5vw, 64px);
  margin-top: 2rem;
  background-color: var(--secondary-base);
  color: #ffffff;
  font-size: clamp(10px, 2.4vw, 17px);

  border: 1px solid var(--secondary-base);
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Button2 = styled(Button)`
  background-color: white;
  color: var(--text-head);
  font-weight: bold;
  border: 0.2px solid rgba(202, 197, 186, 1);
  margin-left: 1rem;
  filter: none;
`;

export const Gridtwo = styled.div`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 966px) {
    grid-column: span 2;
  }
`;

// adding pattern to backgrond of men image

export const FrontImg = styled.div`
  grid-column: 1/5;
  grid-row: 1/2;
  z-index: 10000;
  align-self: center;
  /* justify-self: center; */
  display: grid;

  & img {
    width: clamp(20rem, 100%, 27.72rem);
    object-fit: cover;
  }
  @media screen and (max-width: 966px) {
    justify-self: start;
  }
`;
export const PatternImg = styled.div`
  grid-column: 3/-1;
  grid-row: 1/2;

  & img {
    width: clamp(10rem, 100%, 29.8rem);
    height: clamp(70vh, 100vh, 110vw);
  }
  @media screen and (max-width: 966px) {
    grid-column: 3/-1; /* justify-self: start; */
    align-self: end; /* margin-left: -3rem;
    margin-right: -7rem; */
    /* justify-self: start; */
  }
`;

export const Conttwo = styled.div`
  position: absolute;
  width: 340px;
  height: 328px;
  top: 1000px;
  margin-left: 10px;

  & h4 {
    margin-left: 3rem;
    display: inline;
    grid-column: 2/4;
    grid-row: 1;
    flex-direction: row;
  }
  & h5 {
    color: rgba(102, 97, 85, 1);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    width: 44ch;
    grid-column: 2/4;
    grid-row: 2;
    flex-direction: row;
  }
`;

export const Gradbtn = styled.h1`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: clamp(1vw, 44px, 2.5vw);
  text-align: left;
  border: 0.55px;
  margin: 1rem 0 0 1rem;
  & sup {
    font-size: 1rem;
    /* margin-top: -10px; */
  }
  &::before {
    content: "";
    bottom: 16rem;
    left: 0;
    position: absolute;
    right: 15rem;
    top: 0;
    background-image: linear-gradient(180deg, #ffb900 0%, #049673 100%);
    border-radius: 10rem;
    transform: rotate(-27.23deg) scale(1.02);
    z-index: -2;
  }
  &::after {
    content: "";
    bottom: 16rem;
    left: 0;
    position: absolute;
    right: 15rem;
    top: 0;
    background: white;
    border-radius: 10rem;
    transform: rotate(-27.23deg);
    z-index: -1;
  }
`;

export const Contthree = styled.div`
  position: absolute;
  width: 50%;
  height: 254px;
  left: 0px;
  top: 1418px;
  bottom: 0;
  background-color: #032019;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const CountC = styled.div`
  background-color: #f3f3f4;
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  /* top: 1172px; */
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & h2 {
    font-size: 32px;
  }
`;
