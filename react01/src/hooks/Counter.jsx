import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        className="bg-green-400 hover:bg-green-600 border-2 p-2 gap-2"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease by 2
      </button>
      <button
        className="bg-green-400 hover:bg-green-600 border-2 p-2 gap-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increase by 1
      </button>
      <h1 className="text-5xl">
        {counter === 0 ? <div>0</div> : <div>{counter}</div>}
      </h1>
    </>
  );
};

export default Counter;
