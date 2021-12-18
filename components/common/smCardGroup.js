import styled from "styled-components";
import SmCard from "../card/smCard";

const ContentContainer = styled.div`
  background-color: var(--card-color);
  border-radius: 20px;
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

const SmCardGroup = ({ title, list }) => {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      {list.map((list, index) => (
        <SmCard
          key={index}
          id="1"
          title="가평플라워아일랜드"
          subtitles="숙박 2만원 할인"
          thumbnail=""
        />
      ))}
    </ContentContainer>
  );
};

export default SmCardGroup;
