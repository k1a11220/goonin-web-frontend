import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
const NavItem = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const BottomTabNav = (props) => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        router.push("/");
        break;
      case "search":
        router.push("/search");
        break;
      case "saved":
        router.push("/saved");
        break;
      case "account":
        router.push("/account");
        break;
      default:
        router.push("/");
        break;
    }
  }, [activeTabs, router]);
  return (
    <Container>
      <NavItem>
        {activeTabs === "home" ? (
          <Icon onClick={() => setActiveTabs("home")}>activeHome</Icon>
        ) : (
          <Icon onClick={() => setActiveTabs("home")}>Home</Icon>
        )}
      </NavItem>
      <NavItem>
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
