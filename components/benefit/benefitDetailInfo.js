import styled from "styled-components";

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

const Label = styled.p`
  min-width: 28px;
  font-size: 16px;
  color: var(--main-color);
  font-weight: 600;
  line-height: 1.25;
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

const BenefitDetailInfo = ({ data, label }) => {
  return (
    <DetailContainer>
      <Label>{label}</Label>
      <DetailWrapper>
        {data?.map((benefit, index) => (
          <Detail key={index}>{benefit}</Detail>
        ))}
      </DetailWrapper>
    </DetailContainer>
  );
};

export default BenefitDetailInfo;