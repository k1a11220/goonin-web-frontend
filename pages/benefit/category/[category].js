import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useState } from "react";
import SmCardList from "../../../components/card/smCardList";
import FilterIndicator from "../../../components/benefit/filterIndicator";
import SmCardLoading from "../../../components/common/smCardLoading";
import BottomTabNav from "../../../components/navigation/bottomTabNav";
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

const GET_BENEFITS = gql`
  query getByCategory($category: String!) {
    getByCategory(category: $category) {
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
  const { loading, data } = useQuery(
    location === "전국" ? GET_BENEFITS : GET_FILTERED_BENEFITS,
    {
      variables: { category: category, location: location },
    }
  );

  return (
    <BenefitLayout header="혜택">
      <FilterIndicator location={location} setLocation={setLocation} />
      {loading ? (
        <SmCardLoading />
      ) : (
        <SmCardList
          data={
            location === "전국"
              ? data.getByCategory
              : data.getByCategoryLocation
          }
          isInside={false}
        />
      )}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default CategoryPage;
