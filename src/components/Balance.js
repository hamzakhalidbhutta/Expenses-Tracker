import React, { useState, useContext } from "react";
import { TransectionsContext } from "./../store/context/transectionsContext";
const Balance = () => {
  
  const context = useContext(TransectionsContext);

 const getBalance = (total) => {
    let totaltransection = 0;
    total.map((v, i) => {
        totaltransection = Number(v.amount) + totaltransection;
    });
    return totaltransection;
  };

  return (
    <div className="balanceContainer">
      <h4>YOUR BALANCE</h4>
      <h1>${getBalance(context.transections)}</h1>
    </div>

  );
};

export default Balance;
