import React from "react";

const Person = () => {
  const person = {
    name: "Ravi",
    age: 25,
    email: "Ravi@43email.com",
  };
  const product = {
    name: "I Phone 16 pro",
    price: 60000,
  };
  return (
    <div>
     <div>
        <h1>Person details</h1>
        <p>Name = {person.name}</p>
        <p>Age ={person.age}</p>
        <p>Email ={person.email}</p>
     </div>
     <div>
        <h1>Product Details</h1>
        <p>Name = {product.name}</p>
        <p>Price = {product.price}</p>
     </div>
    </div>
  );
};

export default Person;
