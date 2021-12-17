import styled from "styled-components";
import SmCard from "../components/card/smCard";
import BottomTabNav from "../components/navigation/BottomTabNav";
import { Header, Title } from "../styles/styles";
import TextLogo from "../styles/TextLogo";

const HeadSilder = styled.div`
  width: 100vw;
  height: calc(166px + 44px);
  max-width: calc(var(--width));
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  gap: 16px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }
`;

const HeadCard = styled.div`
  width: calc(100vw - 24px * 2 - 24px);
  max-width: calc(var(--width) - 24px * 2 - 24px);
  height: 166px;
  background-color: #77c0ff;
  border-radius: 20px;

  scroll-snap-align: center;

  @media (max-width: 600px) {
    &:first-child {
      margin-left: 24px;
    }
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const ContentContainer = styled.div`
  background-color: var(--card-color);
  border-radius: 20px;
  margin-bottom: 60px;

  & > h2 {
    padding-left: 26px;
    padding-top: 32px;
    padding-bottom: 16px;
    font-size: 20px;
    font-weight: 600;
    color: var(--main-color);
  }
`;

const Home = () => {
  // const { loading, error, data } = useQuery(GET_BENEFIT);
  // console.log(data);
  return (
    <>
      <Header button={false}>
        <Title paddingTop="94px">
          <TextLogo />
        </Title>
      </Header>
      <HeadSilder>
        <HeadCard />
        <HeadCard />
        <HeadCard />
        <HeadCard />
      </HeadSilder>
      <ContentContainer>
        <h2>추천 혜택</h2>
        <SmCard
          id="1"
          title="가평플라워아일랜드"
          subtitles="숙박 2만원 할인"
          thumbnail=""
        />
        <SmCard
          id="1"
          title="쿠로이 저택엔 누가 살고 있을까?"
          subtitles="S,B,A석 20% 할인"
          thumbnail=""
        />
        <SmCard
          id="1"
          title="CGV"
          subtitles="2D영화 4,000원 할인"
          thumbnail=""
        />
      </ContentContainer>
      <BottomTabNav />
    </>
  );
};

export default Home;
