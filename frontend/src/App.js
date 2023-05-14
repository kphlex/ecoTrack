import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/test/')
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch(err => console.log(err));
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>An Awesome Project </h1>
        <h3>On Django, React, SQL, and Docker </h3>

        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;