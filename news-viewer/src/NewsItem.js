import React from 'react';
import styled from 'styled-components';

export default function NewsItem({
  article: { urlToImage, url, title, description },
}) {
  return (
    <NewsItemBlock>
      {urlToImage && (
        <Thumbnail>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </Thumbnail>
      )}
      <Contents>
        <Title>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Title>
        <Desc>{description}</Desc>
      </Contents>
    </NewsItemBlock>
  );
}

const NewsItemBlock = styled.div`
  display: flex;
  & + & {
    border-bottom: black solid 1px;
    margin-top: 1rem;
  }
`;
const Thumbnail = styled.div`
  margin-right: 1rem;
  img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
`;
const Contents = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;
const Title = styled.h2`
  margin: 0;
  a {
    color: black;
  }
`;
const Desc = styled.div`
  margin: 0;
  line-height: 1.5;
  margin-top: 0.5rem;
  white-space: normal;
`;
