import styled from "styled-components";

const CarouserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  aspect-ratio: 16 / 9;
  width: 100vw;
  align-self: center;
  margin-bottom: 40px;
  max-width: calc(var(--width) + 24px * 2);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }
`;

const Images = styled.img`
  width: calc(100vw - 24px * 2);
  max-width: calc(var(--width));
  background-color: var(--card-color);
  border-radius: 20px;
  scroll-snap-align: center;
  aspect-ratio: 16 / 9;
  object-fit: cover;

  &:first-child {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const CarouserSlider = ({ data }) => {
  return (
    <CarouserContainer>
      {data?.map((imgs, index) => (
        <Images key={index} src={imgs} />
      ))}
    </CarouserContainer>
  );
};

export default CarouserSlider;
