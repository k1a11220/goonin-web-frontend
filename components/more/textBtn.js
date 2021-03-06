import styled from "styled-components";
import { Flex } from "../../styles/styles";

const BtnContainer = styled.a`
  display: flex;
  width: 100vw;
  max-width: var(--width);
  height: 50px;
  align-self: center;
  align-items: center;
  text-decoration: none;
`;

const BtnWrapper = styled(Flex)`
  width: calc(100vw - var(--padding) * 2);
  max-width: var(--width);
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  & p {
    color: var(--text-color);
    margin-top: 2px;
    line-height: 1.25;
  }

  & span {
    margin-top: 2px;
  }
`;

const TextBtn = ({ lable, icon, link }) => {
  return (
    <BtnContainer href={link}>
      <BtnWrapper>
        <p>{lable}</p>
        <span>{icon}</span>
      </BtnWrapper>
    </BtnContainer>
  );
};

export default TextBtn;
