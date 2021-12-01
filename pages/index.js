import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";

const Container = styled.div`
  height: 120vh;
  background-color: var(--bgColor);
`;

const GET_BENEFIT = gql`
  {
    benefits {
      id
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_BENEFIT);
  console.log(data);
  return <Container>This is Home</Container>;
};

export default Home;
