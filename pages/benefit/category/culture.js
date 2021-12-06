import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import BenefitLayout from "../../../components/benefitLayout";
import SmCardList from "../../../components/card/smCardList";
import BottomTabNav from "../../../components/navigation/BottomTabNav";

const GET_FILTERED_BENEFITS = gql`
  {
    getByCategory(category: "문화") {
      id
      name
      mainBenefit
    }
  }
`;

const Culture = () => {
  const { loading, data } = useQuery(GET_FILTERED_BENEFITS);
  console.log(data);
  return (
    <BenefitLayout header="문화혜택">
      {loading ? "로딩중" : <SmCardList Data={data.benefits} />}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default Culture;
