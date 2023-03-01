import { SET_VARIABLE_DATA } from "../constants/cityConstants";


const initialState = {
    variableData: null
  };
  
  export const variableReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VARIABLE_DATA:
        return {
          ...state,
          cityitem: action.payload
        };
      default:
        return state;
    }
  };