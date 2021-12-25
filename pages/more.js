import BottomTabNav from "../components/navigation/BottomTabNav";
import { BorderLine, Header, Title } from "../styles/styles";
import styled from "styled-components";

const Version = styled.span`
  padding-top: 94px;
  color: var(--text-color);
  font-size: 14px;
`;

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
      <BorderLine width={"100vw"} />
      <BottomTabNav />
    </>
  );
};

export default More;
