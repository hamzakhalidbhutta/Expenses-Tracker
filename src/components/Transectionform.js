import React, { useContext, useState } from "react";
import {TransectionsContext} from "./../store/context/transectionsContext";
const TransectionForm = () => {
  const context = useContext(TransectionsContext)
  const [title, setTransTitle] = useState("");
  const [amount, setTransAmount] = useState(0);

  const addTransection = (e) => {
    e.preventDefault();
    context.addTransection({title,amount});
    setTransTitle('');
    setTransAmount(0);
  };

  return (
    <div>
      <h3>Add Transection</h3>
      <form id="form" onSubmit={addTransection}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={title} onChange={(e) =>{setTransTitle(e.target.value)}} placeholder="Enter Transection Title" required />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e) =>{setTransAmount(e.target.value)}} placeholder="Enter amount..." required />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default TransectionForm;
