import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Header, Highlight, Title } from "../../styles/styles";
import BackBtn from "../../components/common/backBtn";
import LoopLoading from "../../components/common/loopLoading";
import CarouserSlider from "../../components/slider/carouserSlider";
import CTA from "../../components/common/cta";
import BenefitDetailInfo from "../../components/benefit/benefitDetailInfo";
import SmallBtn from "../../components/common/smallBtn";

const GET_BENEFITS = gql`
  query getById($id: Int!) {
    getById(id: $id) {
      id
      name
      category
      location
      address
      summary
      thumbnail
      mainBenefit
      benefits
      conditions
      othersOpts
      dtlImgs
      dtlLink
      contactNb
      period
    }
  }
`;

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_BENEFITS, {
    variables: { id: +id },
  });
  return (
    <>
      {loading ? (
        <LoopLoading message={"혜택 정보를 가져오고 있어요"} center={true} />
      ) : (
        <>
          <BackBtn />
          <Header button={true}>
            <Title button={true}>
              {data?.getById?.summary[0]} <br />
              <Highlight>{data?.getById?.summary[1]} </Highlight>
              {data?.getById?.summary[2]}
            </Title>
          </Header>
          <SmallBtn label={data?.getById?.address} />
          <CarouserSlider data={data?.getById?.dtlImgs} isInside={true} />
          <BenefitDetailInfo label={"혜택"} data={data?.getById?.benefits} />
          <BenefitDetailInfo label={"조건"} data={data?.getById?.conditions} />
          <BenefitDetailInfo label={"기타"} data={data?.getById?.othersOpts} />
          <CTA title={"더 알아보기"} link={data?.getById?.dtlLink} />
        </>
      )}
    </>
  );
};

export default DetailPage;
