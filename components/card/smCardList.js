import styled from "styled-components";
import Alert from "../common/alert";
import SmCard from "./smCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--component-gap);
  margin-bottom: var(--component-gap);
`;

const getList = (data) => {
  return (
    <>
      {data.length === 0 ? (
        <Alert
          message_1={"조건에 맞는 혜택이 없어요 "}
          message_2={"다음엔 더 많은 혜택으로 돌아올게요"}
        />
      ) : (
        data &&
        data.map((card) => (
          <SmCard
            key={card.id}
            id={card.id}
            title={card.name}
            subtitles={card.mainBenefit}
            thumbnail={card.thumbnail}
          />
        ))
      )}
    </>
  );
};

const SmCardList = ({ data, isInside }) => {
  return (
    <>
      {isInside ? <>{getList(data)}</> : <Container>{getList(data)}</Container>}
    </>
  );
};

export default SmCardList;
