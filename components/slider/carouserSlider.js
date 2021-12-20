import styled from "styled-components";

const ThumbnailUrl =
  "data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7";

const CarouserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${(props) => (props.isInside ? "12px" : "var(--component-gap)")};
  overflow: auto;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: ${(props) => (props.isInside ? "337.5px" : "297px")};
  align-self: center;
  margin-bottom: 40px;
  max-width: ${(props) =>
    props.isInside
      ? "calc(var(--width) + var(--padding) * 2)"
      : "var(--width)"};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    height: ${(props) => (props.isInside ? "55vw" : "50vw")};
  }
`;

const Slide = styled.img`
  width: ${(props) =>
    props.isInside
      ? "calc(100vw - var(--padding) * 2)"
      : "calc(100vw - var(--padding) * 3)"};
  max-width: ${(props) =>
    props.isInside
      ? "var(--width)"
      : "calc(var(--width) - var(--padding) * 3)"};
  background-color: var(--card-color);
  border-radius: var(--border-radius);
  scroll-snap-align: center;
  height: ${(props) => (props.isInside ? "337.5px" : "297px")};
  object-fit: cover;

  &:first-child {
    margin-left: ${(props) => (props.isInside ? "var(--padding)" : "0")};
  }

  &:last-of-type {
    margin-right: ${(props) => (props.isInside ? "var(--padding)" : "0")};
  }

  @media (max-width: 600px) {
    height: ${(props) => (props.isInside ? "55vw" : "50vw")};

    &:first-child {
      margin-left: var(--padding);
    }

    &:last-of-type {
      margin-right: var(--padding);
    }
  }
`;

const CarouserSlider = ({ data, isInside }) => {
  return (
    <CarouserContainer isInside={isInside}>
      {data?.map((imgs, index) => (
        <Slide
          key={index}
          src={imgs ? imgs : ThumbnailUrl}
          isInside={isInside}
        />
      ))}
    </CarouserContainer>
  );
};

export default CarouserSlider;
