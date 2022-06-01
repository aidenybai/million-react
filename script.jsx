import { compat } from 'million/react';
import { useState } from 'react';
import { createRoot } from 'react-dom';

function Counter({ init }) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}

const root = createRoot(document.querySelector('#app'));

// Anything that references a component at the root level MUST be wrapped
// within the compat() function.
compat(() => {
  // Generally, if there is something erroring, shove rendering logic inside here
  root.render(<Counter init={0} />);
});
