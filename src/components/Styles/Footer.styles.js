import styled from "styled-components";

export const OuterContainer = styled.div`
  border: 1px solid #362900;
  border-left: none;
  border-right: none;
  padding: 5rem 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(2, 1fr);
    align-self: center;
    justify-self: center;
    width: 100%;
  }
`;

export const InnerContainer1 = styled.div`
  /* justify-self: center; */
  grid-column: 1/2;
  /* grid-row: 1/-1; */
`;

export const Mapimage = styled.div`
  grid-column: 2/-1;

  justify-self: end;
  @media screen and (max-width: 960px) {
    grid-column: span 2;
    grid-row: 2/-1;
    justify-self: start;
  }
`;
export const MainCont = styled.div`
  position: absolute;
  width: 100%;
  height: 662px;
  left: 0px;
  top: 3058px;
  background-color: #100c00;
  padding: 10rem 10rem;
  &::before {
    content: "";
    border-top: 1px solid #362900;
  }
  @media screen and (max-width: 960px) {
    padding: 2rem 1rem;
    /* width: 100%; */
  }
`;

export const IconC = styled.div`
  display: flex;
  width: 87px;
  height: 27px;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media screen and(max-width:960px) {
    width: 77px;
    height: 17px;
  }

  & h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
`;

export const LiCont = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const ListItem = styled.ul`
  list-style-type: none;
  margin-right: 5rem;
  & li {
    color: rgba(126, 123, 114, 1);
    padding: 5px 0px;
  }
`;
