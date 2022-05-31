import { compat } from 'million/react';
import { useState } from 'react';
import { createRoot } from 'react-dom';

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

// Anything that references a component at the root level MUST be wrapped
// within the compat() function.

// This is to prevent the component from being created before it is rendered.
compat(() => {
  root.render(<Counter init={0} />);
});
