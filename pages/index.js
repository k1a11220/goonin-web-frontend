import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;

  background-color: var(--bgColor);
`;

const Header = styled.div`
  height: 170px;
`;

const Title = styled.h1`
  padding-top: 94px;
  font-size: 26px;
  color: var(--main-color);
  font-weight: 600;
  align-self: center;
`;

const HeadSilder = styled.div`
  width: 100vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  height: 146px;
  overflow-x: scroll;
`;

const HeadCard = styled.div`
  width: 334px;
  height: 118px;
  background-color: #f3f4f1;
  border-radius: 20px;

  &:first-child {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const ContentContainer = styled.div`
  height: 364px;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin-bottom: 16px;
`;

const GET_BENEFIT = gql`
  {
    benefits {
      id
    }
  }
`;

const Home = () => {
  // const { loading, error, data } = useQuery(GET_BENEFIT);
  // console.log(data);
  return (
    <Container>
      <Header>
        <Title>군복무 가이드</Title>
      </Header>
      <HeadSilder>
        <HeadCard />
        <HeadCard />
        <HeadCard />
        <HeadCard />
      </HeadSilder>
      <ContentContainer />
      <ContentContainer />
    </Container>
  );
};

export default Home;
