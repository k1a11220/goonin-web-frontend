import styled from "styled-components";
import SmCard from "./smCard";

const Container = styled.div``;

const SmCardList = ({ Data }) => {
  return (
    <Container>
      {Data.map((card) => (
        <SmCard
          key={card.id}
          id={card.id}
          title={card.name}
          subtitles={card.mainBenefit}
        />
      ))}
      <SmCard />
    </Container>
  );
};

export default SmCardList;
