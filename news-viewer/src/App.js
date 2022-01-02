import React from 'react';
import { Route, Routes } from '../node_modules/react-router/index';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
