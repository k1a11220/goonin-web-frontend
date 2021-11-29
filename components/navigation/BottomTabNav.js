import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #1d1d1d;
  z-index: 3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled(Link)`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  /* width: 30px; */
  margin: 10px;
  height: 30px;
  cursor: pointer;
`;

const BottomTabNav = (props) => {
  const [activeTabs, setActiveTabs] = useState(props.name);
  return (
    <Container>
      <NavItem href="/">
        {activeTabs === "home" ? (
          <Icon onClick={() => setActiveTabs("home")}>activeHome</Icon>
        ) : (
          <Icon onClick={() => setActiveTabs("home")}>Home</Icon>
        )}
      </NavItem>
      <NavItem href="/search">
        {activeTabs === "search" ? (
          <Icon onClick={() => setActiveTabs("home")}>activeSearch</Icon>
        ) : (
          <Icon onClick={() => setActiveTabs("home")}>Search</Icon>
        )}
      </NavItem>
    </Container>
  );
};

export default BottomTabNav;
