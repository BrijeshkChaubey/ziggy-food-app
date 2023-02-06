import {ISUSER_LOGIN} from '../ActionType/ActionType';

const initialstate = {
  islogin:null,
};
export const Authreducer = (state = initialstate, action) => {
  switch (action.type) {
    case ISUSER_LOGIN:
      return {
        ...state,
        islogin: action.payload,
      };
    default:
      return state;
  }
};
