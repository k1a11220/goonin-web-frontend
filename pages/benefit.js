import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCard from "../components/card/smCard";
import SmCardList from "../components/card/smCardList";
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
      mainBenefit
    }
  }
`;

const Benefit = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  return (
    <Container>
      <Header>
        <Title>혜택</Title>
      </Header>
      {loading ? "로딩중" : <SmCardList Data={data.benefits} />}
    </Container>
  );
};

export default Benefit;
