import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Universal Bare React App</h1>
      <p>Compiled natively using Webpack & Babel.</p>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
