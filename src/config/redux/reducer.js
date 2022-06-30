import { ActionTypes } from "@mui/base";

const INITIAL_STATE = {
  user: null
};
export default (state = INITIAL_STATE, action) => {
  if (action.type == "DataFromFirebase") {
    return { ...state, user: action.user };
  }
  return state;
};