import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import { Flex } from "../../styles/styles";

const ThumbnailUrl =
  "data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7";

const Container = styled(Flex)`
  height: 92px;
  background-color: var(--card-color);
  border-radius: var(--border-radius);
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100% - 26px - 16px);
  margin-left: 26px;
  margin-right: 16px;
  border: none;
  outline: none;

  & > div {
    width: calc(100% - 26px - 16px - 100px);
  }
`;

const Title = styled.h2`
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 18px;
`;

const Subtitles = styled.p`
  font-size: 16px;
  color: var(--highlight-color);
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 18px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 60px;
  background-color: var(--bg-color);
  border-radius: var(--border-radius-sm);
  object-fit: cover;
  border: none;
  outline: none;
  /* margin-left: auto; */
`;

const SmCard = ({ title, subtitles, id, thumbnail }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push({ pathname: `/benefit/${id}` });
  };
  return (
    <Container onClick={handleClick}>
      <Wrapper>
        <div>
          <Title>{title}</Title>
          <Subtitles>{subtitles}</Subtitles>
        </div>
        <Thumbnail src={thumbnail ? thumbnail : ThumbnailUrl} />
      </Wrapper>
    </Container>
  );
};

export default SmCard;
