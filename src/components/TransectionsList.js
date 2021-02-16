import React, { useContext } from "react";
import {TransectionsContext}   from "./../store/context/transectionsContext";

const TransectionsList = () => {


  const   accountTransections = useContext(TransectionsContext);
  const  delTransection = (dt) => {
           accountTransections.delTransection(dt);     
    };
  
  
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {accountTransections.transections.map((v, i) => {
          return (
            (v.amount > 0 )?
            <li className="plus" key={i}>
              <span onClick={(e)=>{ e.preventDefault();delTransection(i);}}>x</span>
              <h4>{v.title}</h4>
              <h4>{v.amount}</h4>
            </li>
            :
            <li className="minus" key={i}>
               <span onClick={(e)=>{ e.preventDefault();delTransection(i);}}>x</span>
              <h4>{v.title}</h4>
              <h4>{v.amount}</h4>
            </li>
            

          );
        })}
      </ul>
    </div>
  );
};

export default TransectionsList;
