import {
  GET_POOL_CONTRACT_START,
  GET_POOL_CONTRACT_SUCCESS,
  GET_POOL_CONTRACT_FAILURE
} from '../actions';

import { SuccessMsgType } from '../../utils';

const initialState = {
  poolAddrs: [],
  errMessage: null
};

const getPoolContractsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POOL_CONTRACT_START:
      return {
        ...state,
        errMessage: null
      };

    case GET_POOL_CONTRACT_SUCCESS:
      return {
        ...state,
        poolAddrs: action.poolAddrs,
        data: action.data
      };

    case GET_POOL_CONTRACT_FAILURE:
      return {
        ...state,
        errMessage: action.data
      };

    default:
      return state;
  }
};

export default getPoolContractsReducer;
