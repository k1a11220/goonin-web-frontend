import styled from "styled-components";
import SmCardList from "./smCardList";

const ContentContainer = styled.div`
  background-color: var(--card-color);
  border-radius: var(--border-radius);
  margin-bottom: 60px;

  & > h2 {
    padding-left: 26px;
    padding-top: 32px;
    padding-bottom: 16px;
    font-size: 20px;
    font-weight: 600;
    color: var(--main-color);
  }
`;

const SmCardGroup = ({ title, data }) => {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      <SmCardList data={data} isInside={true} />
    </ContentContainer>
  );
};

export default SmCardGroup;
