import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const getNewsByCategory = (category) => {
  if (category === 'all') {
    return `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`;
  }
  return `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
};
export default function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(getNewsByCategory(category));
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    console.log(articles);
  }, [category]);
  return (
    <>
      {loading ? (
        <NewsListBlock>로딩 중...</NewsListBlock>
      ) : articles ? (
        <NewsListBlock>
          {articles.map((article) => (
            <NewsItem key={article.url} article={article} />
          ))}
        </NewsListBlock>
      ) : null}
    </>
  );
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
