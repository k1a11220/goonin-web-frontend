import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import gql from "graphql-tag";

const GET_BENEFIT = gql`
  {
    benefits {
      category
    }
  }
`;

const TabContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  align-self: center;
  margin-bottom: 26px;
  border-bottom: 1px solid #f2f3f5;
  background-color: var(--bg-color);
  overflow-x: scroll;
  max-width: var(--width);
`;

const TabWrapper = styled.div`
  display: flex;
  width: calc(100vw - 24px * 2);
  padding-top: 24px;
  margin: 0 auto;
  max-width: var(--width);
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
  const { loading, data } = useQuery(GET_BENEFIT);
  const uniqueArr = loading
    ? ""
    : [...new Set(data.benefits.map((data) => data.category))];
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
        {loading
          ? "로딩중"
          : uniqueArr.map((data, index) =>
              activeTabs === `/benefit/category/${data}` ? (
                <Item
                  key={index}
                  color="var(--main-color)"
                  borderColor="var(--main-color)"
                >
                  <Link href={`/benefit/${data}`}>
                    {data === "culture"
                      ? "문화"
                      : data === "food"
                      ? "식당"
                      : data === "activity"
                      ? "여행&액티비티"
                      : data === "education"
                      ? "교육"
                      : ""}
                  </Link>
                </Item>
              ) : (
                <Item
                  key={index}
                  color="var(--color)"
                  borderColor="var(--bg-color)"
                >
                  <Link href={`/benefit/category/${data}`}>
                    {data === "culture"
                      ? "문화"
                      : data === "food"
                      ? "식당"
                      : data === "activity"
                      ? "여행&액티비티"
                      : data === "education"
                      ? "교육"
                      : ""}
                  </Link>
                </Item>
              )
            )}
      </TabWrapper>
    </TabContainer>
  );
};

export default TabIndicator;
