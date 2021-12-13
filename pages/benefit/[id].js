import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Header, Title } from "../../styles/styles";
import styled from "styled-components";
import BackBtn from "../../components/common/backBtn";
import LoopLoading from "../../components/common/loopLoading";

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

const Highlight = styled.span`
  color: var(--highlight-color);
`;

const Address = styled.div`
  display: inline-block;
  padding: 10px 14px 9px 14px;
  border-radius: 20px;
  font-size: 14px;
  background-color: var(--sub-color);
  margin-top: 16px;
  margin-bottom: 40px;
  width: fit-content;
`;

const DetailContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 22px;
  border-bottom: 1px solid #eff3f5;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: calc(60px + 80px);
  }
`;

const DetailWrapper = styled.div`
  margin-left: 54px;
`;

const Detail = styled.p`
  color: var(--text-color);
  margin-bottom: 8px;
  line-height: 1.25;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.p`
  min-width: 28px;
  font-size: 16px;
  color: var(--main-color);
  font-weight: 600;
  line-height: 1.25;
`;

const CTA = styled.button`
  width: calc(100vw - 24px * 2);
  height: 60px;
  border-radius: 18px;
  background-color: var(--main-color);
  border: none;
  color: var(--bg-color);
  font-size: 15px;
  margin-top: 20px;
  position: fixed;
  bottom: 24px;
  max-width: var(--width);

  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const CarouserContainerInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  aspect-ratio: 16 / 9;
  width: 100vw;
  align-self: center;
  margin-bottom: 40px;
  max-width: calc(var(--width) + 24px * 2);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }
`;

const Images = styled.img`
  width: calc(100vw - 24px * 2);
  max-width: calc(var(--width));
  background-color: var(--card-color);
  border-radius: 20px;
  scroll-snap-align: center;
  aspect-ratio: 16 / 9;
  object-fit: cover;

  &:first-child {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
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
        <LoopLoading />
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
          <Address>{data?.getById?.address}</Address>
          <CarouserContainerInner>
            {data?.getById?.dtlImgs.map((imgs, index) => (
              <Images key={index} src={imgs} />
            ))}
          </CarouserContainerInner>
          <DetailContainer>
            <Label>혜택</Label>
            <DetailWrapper>
              {data?.getById?.benefits.map((benefit, index) => (
                <Detail key={index}>{benefit}</Detail>
              ))}
            </DetailWrapper>
          </DetailContainer>
          <DetailContainer>
            <Label>조건</Label>
            <DetailWrapper>
              {data?.getById?.conditions.map((condition, index) => (
                <Detail key={index}>{condition}</Detail>
              ))}
            </DetailWrapper>
          </DetailContainer>
          <DetailContainer>
            <Label>기타</Label>
            <DetailWrapper>
              <Detail>임직원 할인과 중복 불가</Detail>
            </DetailWrapper>
          </DetailContainer>
          <CTA>더 알아보기</CTA>
        </>
      )}
    </>
  );
};

export default DetailPage;
