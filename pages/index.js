import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import BottomTabNav from "../components/navigation/BottomTabNav";
import { Container, Header, Title } from "../styles/styles";

const HeadSilder = styled.div`
  width: 100vw;
  margin: 0 auto;
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

const Home = () => {
  // const { loading, error, data } = useQuery(GET_BENEFIT);
  // console.log(data);
  return (
    <>
      <Container>
        <Header button={false}>
          <Title paddingTop="94px">군복무 가이드</Title>
        </Header>
        {/* <HeadSilder>
        <HeadCard />
        <HeadCard />
        <HeadCard />
        <HeadCard />
      </HeadSilder> */}
        <ContentContainer />
        <ContentContainer />
      </Container>
      <BottomTabNav />
    </>
  );
};

export default Home;
