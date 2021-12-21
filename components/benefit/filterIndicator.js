import { useState } from "react";
import styled from "styled-components";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";
import { Flex } from "../../styles/styles";

const TabContainer = styled.div`
  position: ${(props) => props.scroll};
  top: calc(58px);
  width: 100vw;
  align-self: center;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 12px;
  border-bottom: ${(props) => props.border};
  background-color: var(--bg-color);
  overflow-x: scroll;
  max-width: var(--width);
`;

const TabWrapper = styled(Flex)`
  width: calc(100vw - 24px * 2);
  margin: 0 auto;
  max-width: var(--width);
`;

const Item = styled.div`
  color: ${(props) => props.color};
  font-size: 14px;
  padding: 10px 15px 8px 15px;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

const FilterIndicator = ({ location, setLocation }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const borderStyle = shouldShowShadow ? "1px solid #f2f3f5" : "none";
  const hiddenStyle = shouldHideHeader ? "static" : "sticky";

  return (
    <TabContainer border={borderStyle} scroll={hiddenStyle}>
      <TabWrapper>
        {location === "전국" ? (
          <Item
            color="var(--bg-color)"
            bgColor="var(--main-color)"
            onClick={() => setLocation("전국")}
          >
            전국
          </Item>
        ) : (
          <Item color="var(--text-color)" onClick={() => setLocation("전국")}>
            전국
          </Item>
        )}
        {location === "서울" ? (
          <Item
            color="var(--bg-color)"
            bgColor="var(--main-color)"
            onClick={() => setLocation("서울")}
          >
            서울
          </Item>
        ) : (
          <Item color="var(--text-color)" onClick={() => setLocation("서울")}>
            서울
          </Item>
        )}
        {location === "경기남부" ? (
          <Item
            color="var(--bg-color)"
            bgColor="var(--main-color)"
            onClick={() => setLocation("경기남부")}
          >
            경기남부
          </Item>
        ) : (
          <Item
            color="var(--text-color)"
            onClick={() => setLocation("경기남부")}
          >
            경기남부
          </Item>
        )}
      </TabWrapper>
    </TabContainer>
  );
};

export default FilterIndicator;
