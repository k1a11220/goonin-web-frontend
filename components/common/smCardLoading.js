import styled from "styled-components";
import SmCardList from "../card/smCardList";

const CardList = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

const LoadingContainer = styled.div`
  pointer-events: none;
`;

const SmCardLoading = () => {
  return (
    <LoadingContainer>
      <SmCardList data={CardList} />
    </LoadingContainer>
  );
};

export default SmCardLoading;
