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
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--padding);
  padding-right: var(--padding);
  color: var(--text-color);

  & p {
    line-height: 1.25;
  }

  & svg {
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
