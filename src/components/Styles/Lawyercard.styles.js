import styled from "styled-components";
import img from "../Assets/Intersect.png";

export const FindLawyerContainer = styled.div`
  /* margin-top: 3007px; */
  z-index: -2;
  width: 100%;
  height: 100%;
  background: rgba(4, 150, 115, 1);
  padding: 38px 18px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1440px) {
    position: relative;
    flex-direction: row;

    & > * {
      flex-basis: 50%;
    }
    padding: 150px 135px;
    gap: 0;
  }
`;

export const ImageContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    background: url(${img});
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 55.073%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
  }
`;

export const FindLawyerTitle = styled.div`
  & h2 {
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    width: 239px;

    @media (min-width: 1440px) {
      font-weight: 800;
      font-size: 44px;
      line-height: 54px;
      width: 428px;
      display: flex;

      align-items: center;
      justify-content: center;
    }
  }
`;

export const FindLawyerDesc = styled.div`
  & p {
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: #cdeae3;
    width: 290px;
    @media (min-width: 1440px) {
      width: 449px;
      font-size: 18px;
      line-height: 28px;
    }
  }
  & button {
    all: unset;
    cursor: pointer;
    background: #ffb900;
    border-radius: 4px;
    width: 100px;
    font-weight: 600;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    padding: 8px 0px;
    margin-top: 24px;
    @media (min-width: 1440px) {
      width: 140px;
      padding: 11px 0px;
      font-size: 16px;
      line-height: 26px;
      margin-top: 38px;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
