import styled from "styled-components";

export const Container = styled.section`
  padding-left: 24px;
  padding-right: 24px;
  background-color: var(--bgColor);
  min-height: calc(100vh - 74px);
`;

export const Header = styled.div`
  min-height: ${(props) => (props.button === true ? "0" : "170px")};
`;

export const Title = styled.h1`
  padding-top: ${(props) => (props.button === true ? "36px" : "94px")};
  font-size: 26px;
  color: var(--main-color);
  font-weight: 600;
  align-self: center;
  line-height: 1.4;
`;
