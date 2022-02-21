import styled from "styled-components";
import { Link } from "react-router-dom";

// main wrapper
export const UnList = styled.ul`
  z-index: 10000000;
  padding: 0px 3rem;
  margin-top: 15px;
  position: sticky;
  top: 0;
  max-width: 100%;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media screen and (max-width: 966px) {
    padding: 0px 1rem;
  }
`;

// sing up button

export const Btn = styled.button`
  background: var(--primary-dark);
  border-radius: 4px;

  color: #ffffff;
  position: absolute;
  grid-column: 10/12;
  align-self: center;
  justify-self: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  border: 1px solid #032019;
  width: clamp(10vw, 140px, 16vw);
  height: clamp(3vh, 45px, 6vh);
  @media screen and (max-width: 966px) {
    border: 1px solid #032019;
    grid-column: 8/11;
    justify-self: center;
    font-size: 11px;
    line-height: 20px;
  }
`;

export const MainLogo = styled.div`
  display: flex;
  width: 77px;
  justify-self: end;
  align-self: center;

  & h6 {
    font-family: Inter;
    font-size: clamp(0.8vw, 24px, 3vw);
    font-style: normal;
    font-weight: 700;
    /* line-height: 17px; */
    letter-spacing: 0em;
    text-align: left;
    margin-left: 5px;
  }
  & img {
    width: clamp(1vw, 2rem, 3vw);
    height: clamp(1vw, 2rem, 3vw);
  }
`;

// Burger toggle

export const Burger = styled.div`
  display: none;
  @media (max-width: 966px) {
    display: block;
    font-size: 1.6rem;
    margin-top: 0rem;
    justify-self: center;
    align-self: center;
    /* margin-left: 80px; */
    grid-column: 10/13;

    /* margin-top: 5px; */
  }
`;

// mapping through links of menu's
export const RoutingLinks = styled(Link)`
  text-decoration: none;

  margin-right: 3rem;
  /* font-family: Inter; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #666155;

  @media screen and (max-width: 966px) {
    display: flex;
    flex-direction: column;

    text-align: center;
  }
`;

// menu item  // Home about

export const MenuItem = styled.div`
  grid-column: 3/10;
  align-self: center;
  @media screen and (max-width: 966px) {
    display: ${({ click }) => (click ? "block" : "none")};
    margin-top: 30px;
    width: auto;
    position: absolute;
    /* z-index: 1; */
    transition: transform 1s ease-in-out;
    background-color: transparent;
  }
`;
