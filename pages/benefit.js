import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCard from "../components/card/smCard";
import SmCardList from "../components/card/smCardList";
import BottomTabNav from "../components/navigation/BottomTabNav";
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
    <>
      <Header button={false}>
        <Title button={false}>혜택</Title>
      </Header>
      {loading ? "로딩중" : <SmCardList Data={data.benefits} />}
      <BottomTabNav />
    </>
  );
};

export default Benefit;
