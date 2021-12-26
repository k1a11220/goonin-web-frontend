import dynamic from "next/dynamic";
import styled from "styled-components";
import BackBtn from "../../components/common/backBtn";
import { BorderLine, Flex } from "../../styles/styles";

const HeaderContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const HeaderWrapper = styled(Flex)`
  margin-bottom: 20px;
  width: 100%;

  & p {
    position: relative;
    right: 10px;
    color: var(--main-color);
    align-self: center;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
  }

  & div:first-of-type {
    justify-self: start;
  }
`;

const ThemeToggle = dynamic(() => import("../../components/themeToggle"), {
  ssr: false,
});

const ScreenPage = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <BackBtn isOnly={true} />
          <p>화면 설정</p>
        </HeaderWrapper>
      </HeaderContainer>

      <BorderLine
        // width={"100vw"}
        style={{ marginBottom: "var(--component-gap)" }}
      />
      <ThemeToggle />
    </>
  );
};

export default ScreenPage;
