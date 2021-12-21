import styled from "styled-components";
import { Flex } from "../../styles/styles";

const Container = styled(Flex)`
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${(props) => (props.center ? "100%" : "0")};
  align-self: center;
  justify-self: center;
  background-color: var(--bg-color);
  z-index: 1;

  & h2 {
    color: var(--text-color);
    font-size: 1.125rem;
  }
`;

const LoopLoading = ({ message, center }) => {
  return (
    <Container center={center}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>{message}</h2>
    </Container>
  );
};

export default LoopLoading;
