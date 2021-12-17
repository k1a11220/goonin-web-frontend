import { useQuery } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";
import SmCardList from "../components/card/smCardList";
import SmCardLoading from "../components/common/smCardLoading";
import BottomTabNav from "../components/navigation/BottomTabNav";
import BenefitLayout from "../layout/benefitLayout";

const Gap = styled.div`
  height: 26px;
`;

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

const Benefit = ({ inside }) => {
  const { loading, data } = useQuery(GET_BENEFIT);
  return (
    <BenefitLayout header="혜택">
      <Gap />
      {loading ? <SmCardLoading /> : <SmCardList Data={data.benefits} />}
      {inside ? null : <BottomTabNav />}
    </BenefitLayout>
  );
};

export default Benefit;
