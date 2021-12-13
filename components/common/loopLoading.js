import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  align-self: center;
  justify-self: center;
  background-color: var(--bg-color);
  z-index: 1;

  & h2 {
    color: var(--text-color);
    font-size: 1.125rem;
  }
`;

const LoopLoading = () => {
  return (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>혜택 정보를 가져오고 있어요</h2>
    </Container>
  );
};

export default LoopLoading;
