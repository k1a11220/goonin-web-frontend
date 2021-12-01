import styled from "styled-components";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Container = styled.div`
  height: 120vh;
  background-color: var(--bgColor);
`;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      {
        benefits {
          id
          name
          category
          location
          address
          summary
          thumbnail
          mainBenefit
          benefits
          conditions
          othersOpts
          dtlImgs
          dtlLink
          contactNb
          period
        }
      }
    `,
  });
  return {
    props: {
      benefits: data.benefits,
    },
  };
}

const Home = ({ benefits }) => {
  console.log("benefits", benefits);
  return <Container>This is Home</Container>;
};

export default Home;
