import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Universal React App</h1>
      <p>Scaffolded dynamically using <code>create-universal-app</code>.</p>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
//
