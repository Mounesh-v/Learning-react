import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter
    console.log("Use Effect is Running");
  }, [counter]);

  return (
    <div>
      <h1>I am Learning UseEffect</h1>
      <h1>{counter}</h1>
      <button  className="btn btn-outline-primary btn-sm rounded-pill mt-3 w-100 fw-semibold" onClick={()=>setCounter(counter+1)}>increment</button>
      <button  className="btn btn-outline-primary btn-sm rounded-pill mt-3 w-100 fw-semibold" onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  );
};

export default UseEffectHook;
