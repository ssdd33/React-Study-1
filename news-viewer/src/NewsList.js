import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './lib/usePromise';

const getNewsByCategory = (category) => {
  if (category === 'all') {
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`,
    );
  }
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`,
  );
};
export default function NewsList({ category }) {
  const { loading, resolved } = usePromise(getNewsByCategory(category), [
    category,
  ]);

  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }
  if (!resolved) {
    return null;
  }
  if (resolved) {
    return (
      <NewsListBlock>
        {resolved.data.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  }
}

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
