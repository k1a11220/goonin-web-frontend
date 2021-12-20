import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCardList from "../components/card/smCardList";
import SmCardLoading from "../components/common/smCardLoading";
import BottomTabNav from "../components/navigation/BottomTabNav";
import BenefitLayout from "../layout/benefitLayout";
import { Gap } from "../styles/styles";

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
      <Gap />
      {loading ? (
        <SmCardLoading />
      ) : (
        <SmCardList data={data.benefits} isInside={false} />
      )}
      <BottomTabNav />
    </BenefitLayout>
  );
};

export default Benefit;
