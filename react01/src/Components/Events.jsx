import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("You Click the Button");
  };
  const add =(a)=>{
    alert(a+10)
  }
  return (
    <>
      <h1>We Are Learning Events</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 shadow-md hover:shadow-lg"
        onClick={handleClick}
      >
        Click Me
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 shadow-md hover:shadow-lg"
        onClick={()=>add(10)}
      >
        Add
      </button>
    </>
  );
};

export default Events;
