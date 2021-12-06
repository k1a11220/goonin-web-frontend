import React from "react";
import { Header, Title } from "../styles/styles";
import TabIndicator from "./tabIndicator";

const BenefitLayout = ({ children, header }) => {
  return (
    <>
      <Header button={true} style={{ marginBottom: "20px" }}>
        <Title button={false}>{header}</Title>
      </Header>
      <TabIndicator />
      <>{children}</>
    </>
  );
};

export default BenefitLayout;
