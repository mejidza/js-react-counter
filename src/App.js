import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <div className='container'>
      <button className='button' onClick={() => setCount(count - 1)}>-1</button>
      <h1 className='counterText'>{count}</h1>
      <button className='button' onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
