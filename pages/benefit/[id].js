import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Container, Header, Title } from "../../styles/styles";
import styled from "styled-components";

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
`;

const Images = styled.div`
  height: 232px;
  background-color: var(--card-color);
  border-radius: 20px;
  margin-bottom: 40px;
`;

const DetailContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 22px;
  border-bottom: 1px solid #eff3f5;

  &:last-of-type {
    border-bottom: none;
  }
`;

const DetailWrapper = styled.div`
  margin-left: 54px;
`;

const Detail = styled.p`
  color: var(--text-color);
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.p`
  font-size: 16px;
  color: var(--main-color);
  font-weight: 600;
`;

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_BENEFITS, {
    variables: { id: +id },
  });

  return (
    <Container>
      <Header>
        <Title>
          롯데시네마에서 최대 <br /> <Highlight>4,000원</Highlight> 할인해드려요
        </Title>
      </Header>
      <Address>{data?.getById?.address}</Address>
      <Images />
      <DetailContainer>
        <Label>혜택</Label>
        <DetailWrapper>
          <Detail>2D 영화 주중 7천원, 주말 8천원(동반3인)</Detail>
          <Detail>3D 영화 주중 8천원 주말 9천원(동반3인)</Detail>
          <Detail>콤보세트 2천원 할인(더블콤보 4천원 할인)</Detail>
        </DetailWrapper>
      </DetailContainer>
      <DetailContainer>
        <Label>조건</Label>
        <DetailWrapper>
          <Detail>휴가증 지참 필수</Detail>
        </DetailWrapper>
      </DetailContainer>
      <DetailContainer>
        <Label>기타</Label>
        <DetailWrapper>
          <Detail>임직원 할인과 중복 불가</Detail>
        </DetailWrapper>
      </DetailContainer>
    </Container>
  );
};

export default DetailPage;
