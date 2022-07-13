import axios from 'axios';
import {
  GET_SWAP_DATA_START,
  GET_SWAP_DATA_SUCCESS,
  GET_SWAP_DATA_FAILURE
} from '.';
import { Networks, baseURL } from '../../utils';

interface poolContracts {
  poolAddrs: [];
}

const getSwapDataStart = () => ({
  type: GET_SWAP_DATA_START
});

const getSwapDataSuccess = (data: string) => ({
  type: GET_SWAP_DATA_SUCCESS,
  data
});

const getSwapDataFailure = (data: string) => ({
  type: GET_SWAP_DATA_FAILURE,
  data
});

export const getSwap =
  (userAddress: string, amount: string, poolContract: string) =>
  async (dispatch: any, getState: () => any) => {
    dispatch(getSwapDataStart());

    const { network } = getState().user;
    console.log('get pool address', userAddress);
    if (network === Networks.bscTestnet || network === Networks.bscMainnet) {
      try {
        await axios
          .post(`${baseURL}/swap`, {
            userAddress,
            amount,
            poolContract
          })
          .then(function (response) {
            let success = response?.data.success;
            if (success) {
              const data = response?.data.data;
              console.log('get response from backend', data);
              dispatch(getSwapDataSuccess(data));

              return data;
            }
          })
          .catch(function (error) {
            if (error.response.data.error) {
              dispatch(getSwapDataFailure(error.response.data.error));
            } else {
              dispatch(
                getSwapDataFailure(
                  'There is internal server error, please try again later!'
                )
              );
            }
          });
      } catch (e) {
        dispatch(
          getSwapDataFailure(
            'There is internal server error, please try again later!'
          )
        );
      }
    } else {
      dispatch(
        getSwapDataFailure(
          'This feature is only working thru Binance Smart Chain!'
        )
      );
    }
  };
