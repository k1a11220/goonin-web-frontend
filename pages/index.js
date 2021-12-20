import SmCardGroup from "../components/card/smCardGroup";
import BottomTabNav from "../components/navigation/BottomTabNav";
import CarouserSlider from "../components/slider/carouserSlider";
import { Header, Title } from "../styles/styles";
import TextLogo from "../styles/TextLogo";

const Home = () => {
  return (
    <>
      <Header button={false}>
        <Title paddingTop="94px">
          <TextLogo />
        </Title>
      </Header>
      <CarouserSlider data={["", ""]} isInside={false} />
      <SmCardGroup
        title="추천혜택"
        data={[
          { id: 0, name: "롯데시네마", mainBenefit: "2D영화 최대 5천원 할인" },
          { id: 1, name: "롯데시네마", mainBenefit: "2D영화 최대 5천원 할인" },
          { id: 2, name: "롯데시네마", mainBenefit: "2D영화 최대 5천원 할인" },
        ]}
      />
      <BottomTabNav />
    </>
  );
};

export default Home;
