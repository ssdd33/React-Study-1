import React from 'react';
import Categories from '../Categories';
import NewsList from '../NewsList';
import { useParams } from 'react-router-dom';

export default function NewsPage() {
  const category = useParams().category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
