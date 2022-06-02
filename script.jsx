import { compat } from 'million/react';
import { useState } from 'react';
import { createRoot } from 'react-dom';

function Counter({ init }) {
  const [value, setValue] = useState(init);

  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}

const root = createRoot(document.querySelector('#app'));

compat(() => {
  root.render(<Counter init={0} />);
});
