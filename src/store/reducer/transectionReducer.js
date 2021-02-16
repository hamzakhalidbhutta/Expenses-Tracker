const ADD_TRANSECTION_ACTION = "ADD";
const DEL_TRANSECTION_ACTION = "DEL";
const UPDATE_TRANSECTION_ACTION = "UPDATE";
export const TransectionsReducer = (state,action) => {
  switch (action.type) {
    case ADD_TRANSECTION_ACTION:
      return [action.payload, ...state];
      case DEL_TRANSECTION_ACTION:
        return state.filter((v,i) => i !== action.payload.transID);
      case UPDATE_TRANSECTION_ACTION:
        return; 
      
    default:
      return state;
  }
};

