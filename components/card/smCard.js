import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

const ThumbnailUrl =
  "data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7";

const Container = styled.div`
  width: 100%;
  height: 92px;
  background-color: var(--card-color);
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 26px;
  margin-right: 16px;
  border: none;
  outline: none;
`;

const Title = styled.h2`
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 8px;
`;

const Subtitles = styled.p`
  font-size: 16px;
  color: var(--highlight-color);
  font-weight: 500;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 18px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 60px;
  background-color: var(--bg-color);
  border-radius: 10px;
  object-fit: cover;
  border: none;
  outline: none;
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
