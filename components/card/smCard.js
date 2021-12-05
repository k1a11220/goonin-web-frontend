import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 92px;
  background-color: var(--card-color);
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 26px;
  margin-right: 16px;
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

const Thumbnail = styled.div`
  width: 100px;
  height: 60px;
  background-color: var(--bg-color);
  border-radius: 10px;
`;

const SmCard = ({ title, subtitles, id }) => {
  return (
    <Link href={`benefit/${id}`}>
      <Container>
        <Wrapper>
          <div>
            <Title>{title}</Title>
            <Subtitles>{subtitles}</Subtitles>
          </div>
          <Thumbnail />
        </Wrapper>
      </Container>
    </Link>
  );
};

export default SmCard;
