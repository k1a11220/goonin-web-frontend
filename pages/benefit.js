import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCard from "../components/card/smCard";
import { Container, Header, Title } from "../styles/styles";

const GET_FILTERED_BENEFITS = gql`
  {
    getByCategory(category: "문화") {
      id
      name
    }
  }
`;

const GET_BENEFIT = gql`
  {
    benefits {
      id
      name
    }
  }
`;

const Benefit = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>혜택</Title>
      </Header>
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
      <SmCard />
    </Container>
  );
};

export default Benefit;
