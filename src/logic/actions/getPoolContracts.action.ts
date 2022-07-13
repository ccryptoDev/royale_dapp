import axios from 'axios';
import {
  GET_POOL_CONTRACT_START,
  GET_POOL_CONTRACT_SUCCESS,
  GET_POOL_CONTRACT_FAILURE
} from '.';
import { Networks, baseURL } from '../../utils';

interface poolContracts {
  poolAddrs: [];
}

const getPoolAddrsStart = () => ({
  type: GET_POOL_CONTRACT_START
});

const getPoolAddrsSuccess = (data: []) => ({
  type: GET_POOL_CONTRACT_SUCCESS,
  data
});

const getPoolAddrsFailure = (data: string) => ({
  type: GET_POOL_CONTRACT_FAILURE,
  data
});

export const getPoolAddrs =
  (userAddress: string) => async (dispatch: any, getState: () => any) => {
    dispatch(getPoolAddrsStart());

    const { network } = getState().user;
    console.log('baseURL -------', baseURL);
    if (!network) {
      getPoolAddrsFailure('Pleaes connect your Wallet');
    } else {
      if (network === Networks.bscTestnet || network === Networks.bscMainnet) {
        try {
          await axios
            .post(`${baseURL}/get-pools`, {
              userAddress
            })
            .then(function (response) {
              let success = response?.data.success;
              if (success) {
                const data = response?.data.data;
                console.log('get pool addresses from backend', data);
                dispatch(getPoolAddrsSuccess(data));

                return data;
              }
            })
            .catch(function (error) {
              if (error.response.data.error) {
                dispatch(getPoolAddrsFailure(error.response.data.error));
              } else {
                dispatch(
                  getPoolAddrsFailure(
                    'There is internal server error, please try again later!'
                  )
                );
              }
            });
        } catch (e) {
          dispatch(
            getPoolAddrsFailure(
              'There is internal server error, please try again later!'
            )
          );
        }
      } else {
        dispatch(
          getPoolAddrsFailure(
            'This feature is only working thru Binance Smart Chain!'
          )
        );
      }
    }
  };
