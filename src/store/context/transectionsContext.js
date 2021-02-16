import React, { createContext, useReducer } from "react";
import { TransectionsReducer } from "../reducer/transectionReducer";

const initialTransections = [
  {
    title: "Income1",
    amount: 100,
  },
  {
    title: "Income2",
    amount: -200,
  },
  {
    title: "Income3",
    amount: 300,
  },
  {
    title: "Income4",
    amount: -400,
  },
];

export const TransectionsContext = createContext([
  {
    title: "Income",
    amount: 100,
  },
]);

export const TransectionsProvider = ({ children }) => {
  const [transections, dispatch] = useReducer(
    TransectionsReducer,
    initialTransections
  );

  const addTransection = (addObj) => {
    dispatch({
      type: "ADD",
      payload: {
        title: addObj.title,
        amount: addObj.amount,
      },
    });
  }

    const delTransection = (transID) => {
      dispatch({
        type: "DEL",
        payload: {
          transID,
        },
      });
    };

    return (
      <TransectionsContext.Provider
        value={{
          transections: transections,
          addTransection,
          delTransection,
        }}
      >
        {children}
      </TransectionsContext.Provider>
    );
  };
