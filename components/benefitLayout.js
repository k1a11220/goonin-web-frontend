import React from "react";
import { Header, Title } from "../styles/styles";
import FilterIndicator from "./filterIndicator";
import TabIndicator from "./tabIndicator";

const BenefitLayout = ({ children, header, location }) => {
  return (
    <>
      <Header button={true} style={{ marginBottom: "20px" }}>
        <Title button={false}>{header}</Title>
      </Header>
      <TabIndicator />
      {/* <TabIndicator /> */}
      <>{children}</>
    </>
  );
};

export default BenefitLayout;
