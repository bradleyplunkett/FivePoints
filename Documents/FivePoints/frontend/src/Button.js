import './App.css';
import React, { useState } from 'react';

function Button() {
  const [response, setResponse] = useState(null);
  const handleClick = async () => {
    try {
      const res = await fetch('http://ec2-54-237-216-116.compute-1.amazonaws.com:9000');
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button className="App-header" onClick={handleClick}>Call the Server and Trigger a Backend Trace.</button>
      {response && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Button;
