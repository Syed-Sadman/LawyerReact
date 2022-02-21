// import styled from "styled-components";

// export const OuterContainer = styled.div`
//   border: 1px solid #362900;
//   border-left: none;
//   border-right: none;
//   padding: 5rem 0px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   @media screen and (max-width: 960px) {
//     grid-template-rows: repeat(2, 1fr);
//     align-self: center;
//     justify-self: center;
//     width: 100%;
//   }
// `;

// export const InnerContainer1 = styled.div`
//   /* justify-self: center; */
//   grid-column: 1/2;
//   /* grid-row: 1/-1; */
// `;

// export const Mapimage = styled.div`
//   grid-column: 2/-1;

//   justify-self: end;
//   @media screen and (max-width: 960px) {
//     grid-column: span 2;
//     grid-row: 2/-1;
//     justify-self: start;
//   }
// `;
// export const MainCont = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 662px;
//   left: 0px;
//   top: 3058px;
//   background-color: #100c00;
//   padding: 10rem 10rem;
//   &::before {
//     content: "";
//     border-top: 1px solid #362900;
//   }
//   @media screen and (max-width: 960px) {
//     padding: 2rem 1rem;
//     /* width: 100%; */
//   }
// `;

// export const IconC = styled.div`
//   display: flex;
//   width: 87px;
//   height: 27px;
//   justify-content: space-between;
//   margin-bottom: 1rem;
//   @media screen and(max-width:960px) {
//     width: 77px;
//     height: 17px;
//   }

//   & h4 {
//     font-style: normal;
//     font-weight: bold;
//     font-size: 14px;
//     line-height: 17px;
//     color: #ffffff;
//   }
// `;

// export const LiCont = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
// `;

// export const ListItem = styled.ul`
//   list-style-type: none;
//   margin-right: 5rem;
//   & li {
//     color: rgba(126, 123, 114, 1);
//     padding: 5px 0px;
//   }
// `;

import styled from "styled-components";

export const FooterContainer = styled.div`
  /* margin-top: 3207px; */
  padding: 39px 18px 28px;
  background: var(--other-bgdark);
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    padding: 70px 135px 41px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GoTop = styled.div`
  /* align-items: center; */
  display: none;
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 1440px) {
    cursor: pointer;
    flex-basis: 100%;
    display: block;
    text-align: center;
    margin-bottom: 31px;
    & button {
      all: unset;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 28px;

  & img {
    width: 16px;
    aspect-ratio: 1;
    @media (min-width: 1440px) {
      width: 33px;
    }
  }

  & h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    @media (min-width: 1440px) {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

export const LmContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-basis: 100%;
    flex-direction: row;
    padding: 70px 0 48px 0;
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
    }
    &:before {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-top: 1px solid #362900;
      border-bottom: 1px solid #362900;
    }

    &:after {
      top: 0;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: 1px;
      background: #362900;
    }
  }
`;

export const OuterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;

  @media (min-width: 1440px) {
    flex-basis: 50%;
  }

  & div {
    &:nth-child(2) {
      display: flex;
      & > * {
        flex-basis: calc(100% / 3);
      }
      & ul {
        display: flex;
        flex-direction: column;
        gap: 9px;
        @media (min-width: 1440px) {
          gap: 17px;
        }
        & li {
          list-style: none;

          & a {
            all: unset;
            font-size: 12px;
            line-height: 22px;
            color: #7e7b72;
            @media (min-width: 1440px) {
              font-size: 16px;
              line-height: 26px;
            }
          }
        }
      }
    }
  }
`;

export const Map = styled.div`
  margin-bottom: 18px;

  @media (min-width: 1440px) {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & img {
    width: 100%;
    height: 208px;
    object-fit: cover;
    border-radius: 4.62069px;
    @media (min-width: 1440px) {
      width: 435px;
      height: 268px;
      border-radius: 6px;
    }
  }

  & button {
    all: unset;
    position: absolute;
    left: 0;
    top: 16px;
    text-align: center;
    padding: 10px;
    background: #ffffff;
    box-shadow: 0px 6.16092px 12.3218px rgba(0, 0, 0, 0.1);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    flex-basis: 100%;
    flex-direction: row;
    gap: 356px;
    margin-top: 31px;
  }

  & p {
    font-size: 12px;
    line-height: 22px;
    color: #7e7b72;
    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 26px;
      margin-left: auto;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
  @media (min-width: 1440px) {
    gap: 19px;
  }
  & div {
    width: 24px;
    aspect-ratio: 1;
    background: #ffffff;
    mix-blend-mode: normal;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    text-align: center;
    @media (min-width: 1440px) {
      width: 26px;
    }
  }
`;
