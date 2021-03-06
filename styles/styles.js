import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  background-color: var(--bgColor);
  min-height: calc(100vh);
  max-width: var(--width);
  margin: 0 auto;
`;

export const Header = styled.div`
  min-height: ${(props) => (props.button === true ? "0" : "170px")};
`;

export const Title = styled.h1`
  padding-top: ${(props) => (props.button === true ? "36px" : "94px")};
  font-size: 26px;
  color: var(--active-color);
  font-weight: 600;
  align-self: center;
  line-height: 1.4;
`;

export const Highlight = styled.span`
  color: var(--highlight-color);
`;

export const Gap = styled.div`
  height: 26px;
`;

export const BorderLine = styled.div`
  align-self: center;
  width: ${(props) => props.width};
  max-width: var(--width);
  height: 1px;
  background-color: var(--sub-color);
`;
