'use client';

import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        <h1>Universal Next.js App</h1>
        <p>Scaffolded dynamically using <code>create-universal-app</code>.</p>
        <div>
          <button className="btn" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </main>
  );
}
