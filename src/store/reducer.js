import {nationalities} from '../constants';
import {CHANGE_NAT} from './actionTypes';

const initState = {
  nationality: nationalities.CH,
};

const reducer = (state = initState, action) => {
  if (action.type === CHANGE_NAT) {
    return {
      ...state,
      nationality: action.payload,
    };
  }
  return state;
};
export default reducer;
