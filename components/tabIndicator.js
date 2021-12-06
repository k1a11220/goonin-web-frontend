import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const TabContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  align-self: center;
  margin-bottom: 26px;
  border-bottom: 1px solid #f2f3f5;
  background-color: var(--bg-color);
  overflow-x: scroll;
`;

const TabWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Item = styled.div`
  font-size: 18px;
  margin-right: 20px;
  white-space: nowrap;
  padding-right: 1px;
  padding-bottom: 13px;
  border-bottom: 2px solid ${(props) => props.borderColor};

  & a {
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.color};
  }
`;

const TabIndicator = () => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(router.asPath);

  useEffect(() => {
    setActiveTabs(router.asPath);
  }, [activeTabs, router]);

  return (
    <TabContainer>
      <TabWrapper>
        {activeTabs === "/benefit" ? (
          <Item color="var(--main-color)" borderColor="var(--main-color)">
            <Link href="/benefit">전체</Link>
          </Item>
        ) : (
          <Item color="var(--color)" borderColor="var(--bg-color)">
            <Link href="/benefit">전체</Link>
          </Item>
        )}
        {activeTabs === "/benefit/category/culture" ? (
          <Item color="var(--main-color)" borderColor="var(--main-color)">
            <Link href="/benefit/category/culture">문화</Link>
          </Item>
        ) : (
          <Item color="var(--color)" borderColor="var(--bg-color)">
            <Link href="/benefit/category/culture">문화</Link>
          </Item>
        )}
      </TabWrapper>
    </TabContainer>
  );
};

export default TabIndicator;
