import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../../styles/styles";

const BtnContainer = styled(Flex)`
  width: 100vw;
  max-width: var(--width);
  height: 50px;
  align-self: center;
  align-items: center;
  text-decoration: none;
`;

const BtnWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--padding);
  padding-right: var(--padding);
  color: var(--text-color);

  & p {
    margin-top: 2px;
    line-height: 1.25;
  }

  & svg {
  }
`;

const RadioContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) => (props.check ? "var(--highlight-color)" : "var(--sub-color)")};
  border-radius: 20px;
  transition: all 0.1s ease-in;

  & > div {
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.check ? "var(--highlight-color)" : "var(--bg-color)"};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }
`;

const RadioBtn = ({ lable, onClick, isChecked }) => {
  //   console.log(onClick);
  return (
    <BtnContainer onClick={onClick}>
      <BtnWrapper>
        <p>{lable}</p>
        <RadioContainer check={isChecked}>
          <div />
        </RadioContainer>
      </BtnWrapper>
    </BtnContainer>
  );
};

export default RadioBtn;
