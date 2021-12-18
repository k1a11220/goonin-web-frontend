import styled from "styled-components";

const SliderContaier = styled.div`
  width: 100vw;
  aspect-ratio: 16 / 9;
  max-width: calc(var(--width));
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  gap: 16px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  width: calc(100vw - 24px * 2 - 24px);
  max-width: calc(var(--width) - 24px * 2 - 24px);
  /* height: 166px; */
  background-color: #77c0ff;
  border-radius: 20px;
  aspect-ratio: 16 / 9;
  scroll-snap-align: center;

  @media (max-width: 600px) {
    &:first-child {
      margin-left: 24px;
    }
    &:last-of-type {
      margin-right: 24px;
    }
  }
`;

const HeadSlider = ({ data }) => {
  return (
    <SliderContaier>
      {data.map((data, index) => (
        <Card key={index} url={data.url} />
      ))}
    </SliderContaier>
  );
};

export default HeadSlider;
