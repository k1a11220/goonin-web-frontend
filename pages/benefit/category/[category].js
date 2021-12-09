import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import BenefitLayout from "../../../components/benefitLayout";
import SmCardList from "../../../components/card/smCardList";
import BottomTabNav from "../../../components/navigation/BottomTabNav";

const GET_FILTERED_BENEFITS = gql`
  query getByCategoryLocation($category: String!, $location: String!) {
    getByCategoryLocation(category: $category, location: $location) {
      id
      name
      mainBenefit
    }
  }
`;

const Culture = () => {
  const router = useRouter();
  const location = "전국";
  const { category } = router.query;
  const { loading, data } = useQuery(GET_FILTERED_BENEFITS, {
    variables: { category: category, location: location },
  });
  {
    loading ? "" : console.log(data.getByCategoryLocation);
  }
  return (
    <BenefitLayout header="혜택">
      {loading ? "로딩중" : <SmCardList Data={data.getByCategoryLocation} />}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default Culture;
