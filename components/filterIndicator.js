import styled from "styled-components";

const TabContainer = styled.div`
  position: sticky;
  top: calc(58px);
  width: 100vw;
  align-self: center;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 12px;
  /* border-bottom: 1px solid #f2f3f5; */
  background-color: var(--bg-color);
  overflow-x: scroll;
  max-width: var(--width);
`;

const TabWrapper = styled.div`
  display: flex;
  width: calc(100vw - 24px * 2);
  margin: 0 auto;
  max-width: var(--width);
`;

const Item = styled.div`
  color: var(--text-color);
  font-size: 14px;
  padding: 10px 15px 8px 15px;
  border-radius: 20px;
  &:first-of-type {
    color: var(--bg-color);
    background-color: var(--main-color);
  }
`;

const FilterIndicator = ({ setLocation }) => {
  const handleClick = (e, data) => {
    e.preventDefault();
    setLocation(data);
  };
  return (
    <TabContainer>
      <TabWrapper>
        <Item onClick={() => setLocation("전국")}>전국</Item>
        <Item onClick={() => setLocation("서울")}>서울</Item>
        <Item>경기남부</Item>
      </TabWrapper>
    </TabContainer>
  );
};

export default FilterIndicator;
