import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import SmCardGroup from "../components/card/smCardGroup";
import BottomTabNav from "../components/navigation/bottomTabNav";
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
        <SmCardGroup title="μΆμ²νν" data={data.recommendedBenefit} />
      )}
      <BottomTabNav />
    </>
  );
};

export default Home;
