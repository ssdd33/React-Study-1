import React, { useState } from 'react';
import axios from 'axios';
const testUrl = 'https://baconipsum.com/api/?type=meat-and-filler';
const newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`;
const getNewsByCategory = (category) => {
  return `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
};
function App() {
  const apikey = process.env.REACT_APP_API_KEY;
  console.log(apikey);
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(newsUrl);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
}

export default App;
