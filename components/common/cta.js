import styled from "styled-components";

const ButtonContainer = styled.a`
  width: calc(100vw - 24px * 2);
  height: 60px;
  border-radius: var(--border-radius-md);
  background-color: var(--main-color);
  border: none;
  color: var(--bg-color);
  font-size: 15px;
  position: fixed;
  bottom: 24px;
  max-width: var(--width);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const CTA = ({ title, link }) => {
  return <ButtonContainer href={link}>{title}</ButtonContainer>;
};

export default CTA;
