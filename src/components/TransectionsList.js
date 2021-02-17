import React, { useContext, useState } from "react";
import { TransectionsContext } from "./../store/context/transectionsContext";

const TransectionsList = () => {
  const context = useContext(TransectionsContext);
  const [title, setTransTitle] = useState("");
  const [amount, setTransAmount] = useState(0);

  const addTransection = (e) => {
    e.preventDefault();
    context.addTransection({ title, amount });
    setTransTitle("");
    setTransAmount(0);
  };
  const delTransection = (dt) => {
    context.delTransection(dt);
  };

  const updateTransection = (dt) => {
    context.updateTransections(dt);
  };

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {context.transections.map((v, i) => {
          return v.amount > 0 ? (
            <li className="plus" key={i}>
              <span
                className="spanUpdate"
                onClick={(e) => {
                  e.preventDefault();
                  updateTransection(i);
                }}
              >
                I
              </span>
              <span
                className="spanDel"
                onClick={(e) => {
                  e.preventDefault();
                  delTransection(i);
                }}
              >
                x
              </span>
              <h4>{v.title}</h4>
              <h4>{v.amount}</h4>
           
            </li>
          ) : (
            <li className="minus" key={i}>
            
              <span
                className="spanDel"
                onClick={(e) => {
                  e.preventDefault();
                  delTransection(i);
                }}
              >
                x
              </span>

              <h4>{v.title}</h4>
              <h4>{v.amount}</h4>
                <span
                className="spanUpdate"
                onClick={(e) => {
                  e.preventDefault();
                  updateTransection(i);
                }}
              >
                I
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransectionsList;
