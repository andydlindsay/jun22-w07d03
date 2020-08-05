import React from 'react';

const UseEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times!`;
    console.log('count', count);
    // alert(`count is ${count}`);
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log('inteval fires');
      setCount((prevCount) => {
        return prevCount + 1;
      });

      // setCount(prev => prev + 1);

      // setCount(count + 1);
    }, 1000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  });

  return (
    <div>
      <h1>Use Effect</h1>
      <h2>Count: { count }</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default UseEffect;
