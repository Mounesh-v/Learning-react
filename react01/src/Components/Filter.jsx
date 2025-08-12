import React from "react";

const Filter = () => {
  let products = [
    { id: 1, title: "Mac", category: "mobile", price: 60000 },
    { id: 2, title: "windows", category: "laptop", price: 30000 },
    { id: 3, title: "Mi Tab", category: "tablets", price: 25000 },
    { id: 4, title: "Fan", category: "electronics", price: 60000 },
    { id: 5, title: "Sony Camera", category: "camera", price: 30000 },
    { id: 6, title: "Tv", category: "electronics", price: 25000 },
  ];
  const filterData = products.filter((data) => data.category == "electronics");
  console.log(filterData);
  return (
    <div>
      <h1>Category Data</h1>
      {filterData.map((data) => (
        <div key={data.id}>
            <h1 className="font-semibold text-2xl">{data.title}</h1>
            <p className="font-semibold">{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Filter;
