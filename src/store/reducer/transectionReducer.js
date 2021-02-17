const ADD_TRANSECTION_ACTION = "ADD";
const DEL_TRANSECTION_ACTION = "DEL";
const UPDATE_TRANSECTION_ACTION = "UPDATE";

const TOTAL_INCOME_ACTION = "TOTAL_INCOME";

export const TransectionsReducer = (state, action) => {
  var totalBalance = 0;
  switch (action.type) {
    case ADD_TRANSECTION_ACTION:
      return [action.payload, ...state];
    case DEL_TRANSECTION_ACTION:
      return state.filter((v, i) => i !== action.payload.transID);
    case UPDATE_TRANSECTION_ACTION:
      return;
    case TOTAL_INCOME_ACTION:
      totalBalance = 20;
      return totalBalance;
    default:
      return state;
  }
};
