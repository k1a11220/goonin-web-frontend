import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useState } from "react";
import SmCardList from "../../../components/card/smCardList";
import FilterIndicator from "../../../components/benefit/filterIndicator";
import SmCardLoading from "../../../components/common/smCardLoading";
import BottomTabNav from "../../../components/navigation/BottomTabNav";
import BenefitLayout from "../../../layout/benefitLayout";

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
      {loading ? (
        <SmCardLoading />
      ) : (
        <SmCardList data={data.getByCategoryLocation} isInside={false} />
      )}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default CategoryPage;
