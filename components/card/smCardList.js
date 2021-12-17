import styled from "styled-components";
import Alert from "../common/alert";
import SmCard from "./smCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

const SmCardList = ({ Data }) => {
  return (
    <Container>
      {Data.length === 0 ? (
        <Alert
          message_1={"조건에 맞는 혜택이 없어요 "}
          message_2={"다음엔 더 많은 혜택으로 돌아올게요"}
        />
      ) : (
        Data &&
        Data.map((card) => (
          <SmCard
            key={card.id}
            id={card.id}
            title={card.name}
            subtitles={card.mainBenefit}
            thumbnail={card.thumbnail}
          />
        ))
      )}
    </Container>
  );
};

export default SmCardList;
