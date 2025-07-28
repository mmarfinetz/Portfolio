import { useState } from 'react';

export default function TestApp() {
  const [count, setCount] = useState(0);
  
  console.log('TestApp rendering, count:', count);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Test App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>If you see this, React is working!</p>
    </div>
  );
}