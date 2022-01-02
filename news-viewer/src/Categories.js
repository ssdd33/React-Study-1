import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비지니스' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'technology', text: '기술' },
];

export default function Categories({}) {
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category
          key={category.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          exact={category.name === 'all'}
          to={category.name === 'all' ? '/' : `/${category.name}`}
        >
          {category.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;
