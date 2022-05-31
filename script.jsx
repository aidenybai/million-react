import { createRoot, useState, compat } from 'million/react';

function Counter({ init }) {
  const [count, setCount] = useState(init);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

const root = createRoot(document.querySelector('#app'));

// Renders (or cyclical logic) MUST be wrapped within the compat() function.
// This is to prevent the component from being created before it is rendered.
compat(() => {
  root.render(<Counter init={0} />);
});
