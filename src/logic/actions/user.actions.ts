import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  GET_ETH_BALANCE_SUCCESS,
  GET_MROYA_BALANCE_SUCCESS,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from './constant';
import wallet from '../../utils/wallet';
import {
  fromEth,
  Networks,
  getMroyaTokenContract,
  baseURL,
  getPoolFactoryContract,
  getSettlerLotContract,
  getMerchantLotContract,
  getMonarchLotContract,
  getKnightLotContract,
  getArchonLotContract
} from '../../utils';

interface User {
  address: string;
}

export const login = (user: User, network: string) => {
  return {
    type: LOGIN_SUCCESS,
    address: user.address,
    network
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const getEthBalanceSuccess = (ethBalance: string) => {
  return {
    type: GET_ETH_BALANCE_SUCCESS,
    ethBalance
  };
};

export const getEthBalance = (userAddress: string) => async (dispatch: any) => {
  try {
    const balance = await wallet.web3.eth.getBalance(userAddress);

    dispatch(getEthBalanceSuccess(fromEth(balance)));
  } catch (e) {
    console.log('error in get eth balance ', e);
  }
};

const getMroyaBalanceSuccess = (mRoyaBalance: string) => {
  return {
    type: GET_MROYA_BALANCE_SUCCESS,
    mRoyaBalance
  };
};

export const getMroyaBalance =
  (userAddress: string) => async (dispatch: any, getState: () => any) => {
    const { network } = getState().user;

    if (network === Networks.ropsten || network === Networks.mainnet) {
      try {
        const balance = await getMroyaTokenContract()
          .methods.balanceOf(userAddress)
          .call();

        dispatch(getMroyaBalanceSuccess(balance));
      } catch (e) {
        console.log('error in get mRoya balance ', e);
      }
    }
  };

const userRegisterStart = () => ({
  type: USER_REGISTER_START
});

const userRegisterSuccess = (data: string) => {
  return {
    type: USER_REGISTER_SUCCESS,
    data
  };
};

const userRegisterFailure = (data: string) => ({
  type: USER_REGISTER_FAILURE,
  data
});

export const userRegister =
  (userAddress: string) => async (dispatch: any, getState: () => any) => {
    dispatch(userRegisterStart());

    const { network } = getState().user;

    if (network === Networks.bscTestnet || network === Networks.bscMainnet) {
      const isAuthorized = await getPoolFactoryContract().methods.authorized(
        userAddress
      );
      if (isAuthorized) {
        const settlerAmount = parseInt(
          await getSettlerLotContract().methods.balanceOf(userAddress)
        );
        const merchantAmount = parseInt(
          await getMerchantLotContract().methods.balanceOf(userAddress)
        );
        const monarchAmount = parseInt(
          await getMonarchLotContract().methods.balanceOf(userAddress)
        );
        const knightAmount = parseInt(
          await getKnightLotContract().methods.balanceOf(userAddress)
        );
        const archonAmount = parseInt(
          await getArchonLotContract().methods.balanceOf(userAddress)
        );
        let tierLevel = 0;
        let tierAmount = 0;

        if (settlerAmount > 0) {
          tierLevel = 1;
          tierAmount = settlerAmount;
        }
        if (merchantAmount > 0) {
          tierLevel = 2;
          tierAmount = merchantAmount;
        }
        if (knightAmount > 0) {
          tierAmount = knightAmount;
          tierLevel = 3;
        }
        if (archonAmount > 0) {
          tierLevel = 4;
          tierAmount = archonAmount;
        }
        if (monarchAmount > 0) {
          tierLevel = 5;
          tierAmount = monarchAmount;
        }

        if (tierLevel > 0) {
          try {
            await axios
              .post(`${baseURL}/register`, {
                userAddress,
                tierLevel,
                tierAmount
              })
              .then(function (response) {
                let success = response?.data.success;
                if (success) {
                  const data = response?.data.data;
                  // console.log('get response from backend', data);
                  dispatch(userRegisterSuccess(data));

                  return data;
                }
              })
              .catch(function (error) {
                if (error.response.data.error) {
                  dispatch(userRegisterFailure(error.response.data.error));
                } else {
                  dispatch(
                    userRegisterFailure(
                      'There is internal server error, please try again later!'
                    )
                  );
                }
              });
          } catch (e) {
            dispatch(
              userRegisterFailure(
                'There is internal server error, please try again later!'
              )
            );
          }
        } else {
          dispatch(
            userRegisterFailure(
              "You didn't purchase any tiers before on Binance Smart Chain, Ethereum and Matic are not supported yet."
            )
          );
        }
      } else {
        dispatch(userRegisterFailure('Your wallet address is not authorized'));
      }
    } else {
      dispatch(
        userRegisterFailure(
          'This feature is only working thru Binance Smart Chain!'
        )
      );
    }
  };
