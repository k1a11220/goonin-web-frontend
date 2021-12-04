import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;

  background-color: var(--bgColor);
`;

export const Header = styled.div`
  height: 170px;
`;

export const Title = styled.h1`
  padding-top: 94px;
  font-size: 26px;
  color: var(--main-color);
  font-weight: 600;
  align-self: center;
`;
