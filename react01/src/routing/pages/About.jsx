import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goBack=()=>{
    navigate(-1)//one step back to route
  }

  return (
    <div>
      <button class="bg-primary border-2 p-2 my-2 cursor-pointer" onClick={goToHome}>Go To Home</button>
      <button class="bg-primary border-2 p-2 my-2 cursor-pointer" onClick={goBack}>Go Back</button>
    </div>
  );
};

export default About;
