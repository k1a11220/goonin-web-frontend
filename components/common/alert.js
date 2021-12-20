import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & p {
    text-align: center;
    line-height: 1.25;
    color: var(--text-color);
    font-weight: 500;
  }

  & p:first-of-type {
    color: var(--main-color);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const Icon = styled.span`
  font-size: 64px;
  margin-bottom: 20px;
`;

const Alert = ({ message_1, message_2 }) => {
  return (
    <Container>
      <Icon>🧐</Icon>
      <p>{message_1}</p>
      <p>{message_2}</p>
    </Container>
  );
};

export default Alert;
