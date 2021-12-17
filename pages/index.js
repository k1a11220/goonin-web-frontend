import styled from "styled-components";
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
  height: 364px;
  background-color: var(--card-color);
  border-radius: 20px;
  margin-bottom: 60px;
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
      <ContentContainer />
      <BottomTabNav />
    </>
  );
};

export default Home;
