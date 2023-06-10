import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState('');
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/data');
      // const response = await axios.get('localhost:8000/api/data');
      setData(response.data.message);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const postData = async () => {
    // const response = await axios.post('http://127.0.0.1:8000/api/data',
    const response = await axios.post('http://127.0.0.1:8000/api/summarize-text',
      { input: inputValue },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include'
      }
    );
    console.log("response postData:", response);
    setData(response.data.message);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Hello from ReactJS!</h1>
      <p>{data}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={postData}>Send POST Request</button>
    </div>
  );
}

export default App;
