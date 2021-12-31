import React, { useState } from 'react';
import { Route } from '../node_modules/react-router/index';
import NewsList from './NewsList';
import Categories from './Categories';
import NewsPage from './pages/NewsPage';
function App() {
  const [category, setCategory] = useState('all');
  const onSelect = (category) => {
    setCategory(category);
    console.log(category);
  };
  return <Route path="/:category?" element={<NewsPage />} />;
}

export default App;
