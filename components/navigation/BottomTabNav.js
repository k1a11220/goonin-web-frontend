import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import HomeIcon from "./icon/HomeIcon";
import BenefitIcon from "./icon/benefitIcon";
import MoreIcon from "./icon/moreIcon";

const Container = styled.div`
  width: 100%;
  height: 72px;
  position: sticky;
  bottom: 0;
  border-top: 2px solid #f2f3f5;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin: 22px;
  width: 84px;

  & p {
    font-size: 12px;
    font-weight: var(--font-medium);
    color: ${(props) => props.color};
    margin-top: 12px;
  }

  & svg {
    height: 23px;
  }
`;

const BottomTabNav = () => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(router.asPath);

  useEffect(() => {
    setActiveTabs(router.asPath);
  }, [activeTabs, router]);

  return (
    <Container>
      <NavItem href="/">
        {activeTabs === "/" ? (
          <Icon
            onClick={() => setActiveTabs("/home")}
            color="var(--main-color)"
          >
            <HomeIcon fillColor="var(--main-color)" />
            <p>홈</p>
          </Icon>
        ) : (
          <Icon
            onClick={() => setActiveTabs("/home")}
            color="var(--text-color)"
          >
            <HomeIcon fillColor="var(--color)" />
            <p>홈</p>
          </Icon>
        )}
      </NavItem>
      <NavItem href="/benefit">
        {activeTabs === "/benefit" ? (
          <Icon
            onClick={() => setActiveTabs("/benefit")}
            color="var(--main-color)"
          >
            <BenefitIcon fillColor="var(--main-color)" />
            <p>혜택</p>
          </Icon>
        ) : (
          <Icon
            onClick={() => setActiveTabs("/benefit")}
            color="var(--text-color)"
          >
            <BenefitIcon fillColor="var(--color)" />
            <p>혜택</p>
          </Icon>
        )}
      </NavItem>
      <NavItem href="/more">
        {activeTabs === "/more" ? (
          <Icon
            onClick={() => setActiveTabs("/more")}
            color="var(--main-color)"
          >
            <MoreIcon fillColor="var(--main-color)" />
            <p>더보기</p>
          </Icon>
        ) : (
          <Icon
            onClick={() => setActiveTabs("/more")}
            color="var(--text-color)"
          >
            <MoreIcon fillColor="var(--color)" />
            <p>더보기</p>
          </Icon>
        )}
      </NavItem>
    </Container>
  );
};

export default BottomTabNav;
