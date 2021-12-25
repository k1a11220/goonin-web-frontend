import BottomTabNav from "../components/navigation/BottomTabNav";
import { BorderLine, Gap, Header, Title } from "../styles/styles";
import styled from "styled-components";
import TextBtn from "../components/more/textBtn";
import RightArrow from "../assets/rightArrow";
import RadioBtn from "../components/more/radioBtn";
import dynamic from "next/dynamic";

const Version = styled.span`
  padding-top: 94px;
  color: var(--text-color);
  font-size: 14px;
`;

const ThemeToggle = dynamic(() => import("../components/themeToggle"), {
  ssr: false,
});

const More = () => {
  return (
    <>
      <Header
        button={true}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <Title button={false}>더보기</Title>
        <Version>solift 21.12 Beta</Version>
      </Header>
      {/* <BorderLine width={"100vw"} /> */}
      <Gap />
      <TextBtn lable={"화면 테마"} icon={<RightArrow />} />
      <ThemeToggle />
      <BottomTabNav />
    </>
  );
};

export default More;
