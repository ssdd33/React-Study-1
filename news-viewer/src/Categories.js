import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비지니스' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'technology', text: '기술' },
];

export default function Categories({ onSelect, selectedCategory }) {
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category
          key={category.name}
          onClick={() => onSelect(category.name)}
          active={category.name === selectedCategory}
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
const Category = styled.div`
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
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;
