import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import BenefitLayout from "../components/benefitLayout";
import SmCardList from "../components/card/smCardList";
import FilterIndicator from "../components/filterIndicator";
import BottomTabNav from "../components/navigation/BottomTabNav";

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
  const [location, setLocation] = useState("전국");
  const { loading, data } = useQuery(GET_BENEFIT);
  return (
    <BenefitLayout header="혜택">
      <FilterIndicator location={location} setLocation={setLocation} />
      {loading ? "로딩중" : <SmCardList Data={data.benefits} />}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default Benefit;
