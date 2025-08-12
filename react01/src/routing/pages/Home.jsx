import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagate = useNavigate();

  const goMain =()=>{
    naviagate("/propDrilling")
  }
  return (
    <div>
      <h1>This is the Home Route</h1>
      <button
        onClick={goMain}
        className="bg-green-50 border-2 text-[12px] p-2 mx-2"
      >
        Prop Drilling
      </button>
    </div>
  );
};

export default Home;
