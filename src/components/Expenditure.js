import React from "react";

const Expenditure = () => {
  return (
    <div className="expenditureContainer">
      <div>
        <h4>INCOME</h4>
        <p id="money-plus" className="money minus">
          +$0.00
        </p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p id="money-minus" className="money minus">
          -$0.00
        </p>
      </div>
    </div>
  );
};

export default Expenditure;
