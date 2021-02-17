import React, { useState, useContext } from "react";
import { TransectionsContext } from "./../store/context/transectionsContext";

const Expenditure = () => {
  const context = useContext(TransectionsContext);

  const getIncome = (total) => {
    let totaltransection = 0;
    total.map((v, i) => {
      if (v.amount > 0) {
        totaltransection = Number(v.amount) + totaltransection;
      }
    });
    return totaltransection;
  };

  const getExpenditure = (total) => {
    let totaltransection = 0;
    total.map((v, i) => {
      if (v.amount < 0) {
        totaltransection = Number(v.amount) + totaltransection;
      }
    });
    return totaltransection;
  };
  return (
    <div className="expenditureContainer">
      <div>
        <h4>INCOME</h4>
        <p id="money-plus" className="money minus">
          $ {getIncome(context.transections)}
        </p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p id="money-minus" className="money minus">
          $ { getExpenditure(context.transections)}
        </p>
      </div>
    </div>
  );
};

export default Expenditure;
