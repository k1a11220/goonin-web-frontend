import styled from "styled-components";
import SmCard from "./smCard";

const Container = styled.div``;

const SmCardList = ({ Data }) => {
  return (
    <Container>
      {Data &&
        Data.map((card) => (
          <SmCard
            key={card.id}
            id={card.id}
            title={card.name}
            subtitles={card.mainBenefit}
          />
        ))}
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
    </Container>
  );
};

export default SmCardList;
