import styled from "styled-components";
import SmCard from "../card/smCard";

const Container = styled.div``;

const SmCardLoading = () => {
  return (
    <Container>
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
    </Container>
  );
};

export default SmCardLoading;
