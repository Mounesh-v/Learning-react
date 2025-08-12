import React from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props ) => {
  const money = 10000000;
  const People = 5000;
  const SinglePerson = money/People;
  return (
    <MoneyContext.Provider value={{ money, People,SinglePerson }}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
