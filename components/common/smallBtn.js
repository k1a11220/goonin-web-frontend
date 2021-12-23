import styled from "styled-components";
import { Flex } from "../../styles/styles";

const BtnContainer = styled(Flex)`
  align-items: center;
  padding: 10px 14px 9px 14px;
  border-radius: var(--border-radius);
  font-size: 14px;
  background-color: var(--sub-color);
  margin-top: 16px;
  margin-bottom: 40px;
  width: fit-content;

  & p {
    margin-top: 2px;
    font-weight: 500;
    color: var(--main-color);
  }
`;

const Symbol = styled(Flex)`
  margin-right: 10px;
`;

const SmallBtn = ({ label, icon }) => {
  return (
    <BtnContainer>
      <Symbol>{icon}</Symbol>
      <p>{label}</p>
    </BtnContainer>
  );
};

export default SmallBtn;
