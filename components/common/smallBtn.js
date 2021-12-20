import styled from "styled-components";

const BtnContainer = styled.div`
  display: inline-block;
  padding: 10px 14px 9px 14px;
  border-radius: var(--border-radius);
  font-size: 14px;
  background-color: var(--sub-color);
  margin-top: 16px;
  margin-bottom: 40px;
  width: fit-content;
`;

const SmallBtn = ({ label }) => {
  return <BtnContainer>{label}</BtnContainer>;
};

export default SmallBtn;
