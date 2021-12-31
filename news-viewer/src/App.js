import React, { useState } from 'react';

import NewsList from './NewsList';
import Categories from './Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = (category) => {
    setCategory(category);
    console.log(category);
  };
  return (
    <>
      <Categories onSelect={onSelect} selectedCategory={category} />
      <NewsList category={category} />
    </>
  );
}

export default App;
