import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCardList from "../components/card/smCardList";
import BottomTabNav from "../components/navigation/BottomTabNav";
import BenefitLayout from "../layout/benefitLayout";

const GET_BENEFIT = gql`
  {
    benefits {
      id
      name
      mainBenefit
      thumbnail
    }
  }
`;

const Benefit = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  return (
    <BenefitLayout header="혜택">
      {loading ? "로딩중" : <SmCardList Data={data.benefits} />}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default Benefit;
