import { SET_VARIABLE_DATA } from "../constants/cityConstants";

export const setVariableData = (data) => {
    return {
      type: SET_VARIABLE_DATA,
      payload: data
    };
  };