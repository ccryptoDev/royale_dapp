import {
  GET_POOL_CONTRACT_START,
  GET_POOL_CONTRACT_SUCCESS,
  GET_POOL_CONTRACT_FAILURE
} from '../actions';

import { SuccessMsgType } from '../../utils';

const initialState = {
  poolAddrs: [],
  swapErrMessage: null
};

const swapReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POOL_CONTRACT_START:
      return {
        ...state,
        swapErrMessage: null
      };

    case GET_POOL_CONTRACT_SUCCESS:
      return {
        ...state,
        swapErrMessage: action.data,
        data: action.data
      };

    case GET_POOL_CONTRACT_FAILURE:
      return {
        ...state,
        swapErrMessage: action.data
      };

    default:
      return state;
  }
};

export default swapReducer;
