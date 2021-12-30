import React, { useState } from 'react';
import axios from 'axios';
const url = 'https://baconipsum.com/api/?type=meat-and-filler';
const url1 = 'https://jsonplaceholder.typicode.com/todo/1';
function App() {
  const [data, setDate] = useState(null);
  const onClick = () => {
    axios.get(url).then((res) => {
      setDate(res.data);
    });
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
