import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import BenefitLayout from "../../../components/benefitLayout";
import SmCardList from "../../../components/card/smCardList";
import FilterIndicator from "../../../components/filterIndicator";
import BottomTabNav from "../../../components/navigation/BottomTabNav";

const GET_FILTERED_BENEFITS = gql`
  query getByCategoryLocation($category: String!, $location: String!) {
    getByCategoryLocation(category: $category, location: $location) {
      id
      name
      mainBenefit
      thumbnail
    }
  }
`;

const CategoryPage = () => {
  const [location, setLocation] = useState("전국");
  const router = useRouter();
  const { category } = router.query;
  const { loading, data } = useQuery(GET_FILTERED_BENEFITS, {
    variables: { category: category, location: location },
  });

  return (
    <BenefitLayout header="혜택">
      <FilterIndicator location={location} setLocation={setLocation} />
      {loading ? "로딩중" : <SmCardList Data={data.getByCategoryLocation} />}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default CategoryPage;
