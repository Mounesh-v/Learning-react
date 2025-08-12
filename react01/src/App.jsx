import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Route from "./routing/MainRoute";
// import Person from "./Components/Person";
// import Product from "./Components/Product";
// import Ternary from "./Components/Ternary";
// import "./input.css";
// import Events from "./Components/Events";
// import Counter from "./hooks/Counter";
// import ShowProduct from "./Components/ShowProduct";
// import Filter from "./Components/Filter";
// import Movie from "./Project1/component/Movie";
// import UseEffectHook from "./hooks/UseEffectHook";
// import DataFectchingApi from "./Components/DataFectchingApi";
// import Form from "./Components/Form";
// import Multiple_Form from "./Components/Multiple_Form";
// import Meal from "./Project2/components/Meal";

const App = () => {
  return (
    <>
      {/* <div style={{ backgroundColor: "gray", border: "2px solid yellow" }}>
        {/* <h1>Components:-</h1>
        <Person/>  */}
      {/* <h1>Reusable Components & props:-</h1>
        <Product title="Samsung galaxy S25" brand="samsung" price={160000} camera="200 Mp" />
        <Product title="Samsung galaxy S24" brand="samsung" price={150000} /> */}
      {/* <h1>Ternary Operator</h1>
        <Ternary name="Suman" typing=" " />

        <div>
          <Events />
      </div> */}

      {/* <div>
          <Counter/>
        </div> */}
      {/* </div> */}
      {/* <ShowProduct /> */}
      {/*<Filter/> */}
      {/* <Movie/> */}
      {/* <UseEffectHook/> */}
      {/* <DataFectchingApi/> */}
      {/* <Form/> */}
      {/* <Multiple_Form/> */}
      {/* <Meal/> */}
      <Route/>
    </>
  );
};

export default App;
