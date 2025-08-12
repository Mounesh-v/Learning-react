import React from "react";

const ShowProduct = () => {
  let products = [
    { id: 1, title: "Mac", price: 60000 },
    { id: 2, title: "windows", price: 30000 },
    { id: 3, title: "Linux", price: 25000 },
    { id: 4, title: "Fan", price: 60000 },
    { id: 5, title: "iphone", price: 30000 },
    { id: 6, title: "Tv", price: 25000 },
  ];
  return (
    <>
      <h1 className="text-3xl">Products</h1>
      <div>
        {products.map((data) => (
          <div key={data.id}>
              <h1 className="text-2xl">Product={data.title}</h1>
              <h1 className="text-xl">price={data.price}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowProduct;
