import HeadSlider from "../components/slider/headSlider";
import SmCardGroup from "../components/common/smCardGroup";
import BottomTabNav from "../components/navigation/BottomTabNav";
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
      <HeadSlider
        data={[
          {
            url: "1234",
          },
          {
            url: "1234",
          },
        ]}
      />
      <SmCardGroup title={"추천혜택"} list={[1, 2, 3]} />
      <BottomTabNav />
    </>
  );
};

export default Home;
