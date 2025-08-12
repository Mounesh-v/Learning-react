import React from "react";

const Ternary = ({name,typing}) => {
  const age = 18;
  return (
    <>
      <h1>
        {(age>=18)?(<div>Your eligible for voting {age}</div>):(
      <div>Yor not eligible for voting</div>)}
      </h1>
      <div>
        {(name && typing)?(<div>User is Online</div>):(<div>User is Offline</div>)}
      </div>
    </>
  );
};

export default Ternary;
