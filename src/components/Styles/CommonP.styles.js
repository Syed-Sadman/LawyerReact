import styled from "styled-components";

export const Headfreq = styled.p`
  color: ${(props) =>
    props.primary ? "var(--primary-light)" : "var(--text-para)"};
  /* color: rgba(102, 97, 85, 1); */
  /* font-size: 12px; */
  font-size: clamp(12px, 1.4vw, 17px);
  font-style: normal;
  font-weight: normal;
  line-height: 28px;

  text-align: left;
  width: 40ch;
`;

export const ListArrow = styled.ol`
  margin-left: 2rem;
  /* display: grid; */
  /* display: flex; */
  padding-right: clamp(18px, 8vw, 135px);
  & li {
    /* justify-self: end; */
    /* display: inline; */
    display: flex;
    width: 100%;
    margin-bottom: 2vw;
    font-size: clamp(12px, 2vw, 22px);
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    color: var(--text-head);
    padding: 1rem 0.2rem;
    &:hover {
      background: #ffffff;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      /* height: 1vh; */

      & i {
        color: var(--secondary-base);
      }
    }
  }
  & i {
    font-size: clamp(12px, 2vw, 22px);
    margin-left: auto;
    /* font-size: 1rem; */
    transform: rotate(-45deg);
    /* 3 */
  }
`;
