import React from 'react'

const Product = ({title,brand,price,camera}) => {
  return (
    <>
       <h1>title={title}</h1> 
       <h3>brand={brand}</h3>
       <h3>price={price}</h3>
       <h3>camera={camera}</h3>
    </>
  )
}

export default Product