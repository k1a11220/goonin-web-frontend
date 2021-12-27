import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCardGroup from "../components/card/smCardGroup";
import BottomTabNav from "../components/navigation/BottomTabNav";
import CarouserSlider from "../components/slider/carouserSlider";
import { Header, Title } from "../styles/styles";
import TextLogo from "../styles/TextLogo";

const GET_BENEFIT = gql`
  {
    recommendedBenefit {
      id
      name
      mainBenefit
      thumbnail
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  console.log(data);
  return (
    <>
      <Header button={false}>
        <Title paddingTop="94px">
          <TextLogo />
        </Title>
      </Header>
      <CarouserSlider
        data={[
          "https://i.imgur.com/8aMyoMf.png",
          "https://i.imgur.com/TqjJbuf.png",
        ]}
        isInside={false}
      />
      {loading ? (
        ""
      ) : (
        <SmCardGroup title="추천혜택" data={data.recommendedBenefit} />
      )}
      <BottomTabNav />
    </>
  );
};

export default Home;
