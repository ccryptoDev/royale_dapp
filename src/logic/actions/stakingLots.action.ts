import {
  SELL_KROYA_LOT_START,
  SELL_KROYA_LOT_SUCCESS,
  SELL_KROYA_LOT_FAILURE,
  SELL_AROYA_LOT_START,
  SELL_AROYA_LOT_SUCCESS,
  SELL_AROYA_LOT_FAILURE,
  SELL_MoROYA_LOT_START,
  SELL_MoROYA_LOT_SUCCESS,
  SELL_MoROYA_LOT_FAILURE,
  SELL_MROYA_LOT_START,
  SELL_MROYA_LOT_SUCCESS,
  SELL_MROYA_LOT_FAILURE,
  SELL_SROYA_LOT_START,
  SELL_SROYA_LOT_SUCCESS,
  SELL_SROYA_LOT_FAILURE,
  BUY_KROYA_LOT_SUCCESS,
  BUY_KROYA_LOT_START,
  BUY_KROYA_LOT_FAILURE,
  BUY_AROYA_LOT_START,
  BUY_AROYA_LOT_SUCCESS,
  BUY_AROYA_LOT_FAILURE,
  BUY_MOROYA_LOT_START,
  BUY_MOROYA_LOT_SUCCESS,
  BUY_MOROYA_LOT_FAILURE,
  BUY_MROYA_LOT_START,
  BUY_MROYA_LOT_SUCCESS,
  BUY_MROYA_LOT_FAILURE,
  BUY_SROYA_LOT_START,
  BUY_SROYA_LOT_SUCCESS,
  BUY_SROYA_LOT_FAILURE,
  GET_USER_TOTAL_LOTS_SUCCESS,
  GET_USER_LOT_REWARD,
  CLOSE_SUCCESS_MSG,
  CLAIM_KLOT_REWARD_START,
  CLAIM_KLOT_REWARD_SUCCESS,
  CLAIM_KLOT_REWARD_FAILURE,
  CLAIM_ALOT_REWARD_START,
  CLAIM_ALOT_REWARD_SUCCESS,
  CLAIM_ALOT_REWARD_FAILURE,
  CLAIM_MoLOT_REWARD_START,
  CLAIM_MoLOT_REWARD_SUCCESS,
  CLAIM_MoLOT_REWARD_FAILURE,
  CLAIM_MLOT_REWARD_START,
  CLAIM_MLOT_REWARD_SUCCESS,
  CLAIM_MLOT_REWARD_FAILURE,
  CLAIM_SLOT_REWARD_START,
  CLAIM_SLOT_REWARD_SUCCESS,
  CLAIM_SLOT_REWARD_FAILURE,
  GET_NFT_BALANCE_SUCCESS,
  SET_NFT_ID,
  BUY_DISCOUNTED_KROYA_LOT_START,
  GET_LOCKED_NFT_SUCCESS,
  SELL_LOCKED_KNIGHT_NFT_START,
  GET_DISCOUNTED_KNIGHT_LOT_SUCCESS
} from '../actions';
import {
  toRoya,
  LotsPrice,
  getArchonLotContract,
  getKnightLotContract,
  getMonarchLotContract,
  getMerchantLotContract,
  getSettlerLotContract,
  getRoyaNftContract,
  getApiEndpoint,
  getRoyaTokenContract,
  getKnightLotContractAddress,
  getArchonLotContractAddress,
  getMonarchLotContractAddress,
  getMerchanLotContractAddress,
  getSettlerLotContractAddress
} from '../../utils';
import { getRoyaBalance } from '../actions';
import axios from 'axios';

export const setNftId = (nftId: number) => ({
  type: SET_NFT_ID,
  nftId
});

export const closeSuccessMsg = () => ({
  type: CLOSE_SUCCESS_MSG
});

const buyKroyaLotStart = () => ({
  type: BUY_KROYA_LOT_START
});

const buyKroyaLotSuccess = (lotAmount: number) => ({
  type: BUY_KROYA_LOT_SUCCESS,
  lotAmount
});

const buyKroyaLotFailure = () => ({
  type: BUY_KROYA_LOT_FAILURE
});

const buyDiscountQroyaLotStart = () => ({
  type: BUY_DISCOUNTED_KROYA_LOT_START
});

export const buyKroyaLot =
  (
    userAddress: string,
    lot: number,
    nftDiscount: string,
    closeModal?: () => void
  ) =>
  (dispatch: any) => {
    if (!!nftDiscount) {
      dispatch(buyDiscountQroyaLotStart());

      getRoyaTokenContract()
        .methods.approve(
          getKnightLotContractAddress(),
          toRoya(((LotsPrice.knightLot - 2800) * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve knightLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve knightLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve knightLot', error);
          dispatch(buyKroyaLotFailure());
        })
        .then(() => {
          getRoyaNftContract()
            .methods.setApprovalForAll(getKnightLotContractAddress(), true)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash approve knightLot nft', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt approve knightLot nft', receipt);
            })
            .on('error', (error: any) => {
              console.log('error approve knightLot nft', error);
              dispatch(buyKroyaLotFailure());
            })
            .then(() => {
              getKnightLotContract()
                .methods.buyWithNFT(lot, parseInt(nftDiscount))
                .send({
                  from: userAddress
                })
                .on('transactionHash', (hash: string) => {
                  console.log('transactionHash buy  knightLot nft', hash);
                })
                .on('receipt', (receipt: string) => {
                  console.log('receipt buy knightLot nft', receipt);
                  dispatch(buyKroyaLotSuccess(lot));
                  dispatch(getUserTotalLots(userAddress));
                  dispatch(getRoyaBalance(userAddress));
                  dispatch(getUSerLotReward(userAddress));
                  dispatch(getNftBalance(userAddress));
                  dispatch(getLockedNFTs(userAddress));
                  dispatch(getDiscountedQueenLots(userAddress));

                  if (closeModal) {
                    closeModal();
                  }
                })
                .on('error', (error: any) => {
                  console.log('error buy knightLot nft', error);
                  dispatch(buyKroyaLotFailure());
                });
            });
        });
    } else {
      dispatch(buyKroyaLotStart());

      getRoyaTokenContract()
        .methods.approve(
          getKnightLotContractAddress(),
          toRoya((LotsPrice.knightLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve knightLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve knightLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve knightLot', error);
          dispatch(buyKroyaLotFailure());
        })
        .then(() => {
          getKnightLotContract()
            .methods.buy(lot)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash buy  knightLot', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt buy knightLot', receipt);
              dispatch(buyKroyaLotSuccess(lot));
              dispatch(getUserTotalLots(userAddress));
              dispatch(getRoyaBalance(userAddress));
              dispatch(getUSerLotReward(userAddress));
            })
            .on('error', (error: any) => {
              console.log('error buy knightLot', error);
              dispatch(buyKroyaLotFailure());
            });
        });
    }
  };

const buyAroyaLotStart = () => ({
  type: BUY_AROYA_LOT_START
});

const buyAroyaLotSuccess = (lotAmount: number) => ({
  type: BUY_AROYA_LOT_SUCCESS,
  lotAmount
});

const buyAroyaLotFailure = () => ({
  type: BUY_AROYA_LOT_FAILURE
});

export const buyAroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(buyAroyaLotStart());

    if (!!nftDiscount) {
      console.log('with nft discount');

      getRoyaTokenContract()
        .methods.approve(
          getArchonLotContractAddress(),
          toRoya((LotsPrice.archonLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve archonLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve archonLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve archonLot', error);
          dispatch(buyAroyaLotFailure());
        })
        .then(() => {
          getRoyaNftContract()
            .methods.setApprovalForAll(getArchonLotContractAddress(), true)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash approve archonLot nft', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt approve archonLot nft', receipt);
            })
            .on('error', (error: any) => {
              console.log('error approve archonLot nft', error);
              dispatch(buyAroyaLotFailure());
            })
            .then(() => {
              getArchonLotContract()
                .methods.buyWithNFT(lot, parseInt(nftDiscount))
                .send({
                  from: userAddress
                })
                .on('transactionHash', (hash: string) => {
                  console.log('transactionHash buy  archonLot nft', hash);
                })
                .on('receipt', (receipt: string) => {
                  console.log('receipt buy archonLot nft', receipt);
                  dispatch(buyAroyaLotSuccess(lot));
                  dispatch(getUserTotalLots(userAddress));
                  dispatch(getRoyaBalance(userAddress));
                  dispatch(getUSerLotReward(userAddress));
                })
                .on('error', (error: any) => {
                  console.log('error buy archonLot nft', error);
                  dispatch(buyAroyaLotFailure());
                });
            });
        });
    } else {
      console.log('without nft discount');

      getRoyaTokenContract()
        .methods.approve(
          getArchonLotContractAddress(),
          toRoya((LotsPrice.archonLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve archonLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve archonLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve archonLot', error);
          dispatch(buyAroyaLotFailure());
        })
        .then(() => {
          getArchonLotContract()
            .methods.buy(lot)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash buy archonLot', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt buy archonLot', receipt);
              dispatch(buyAroyaLotSuccess(lot));
              dispatch(getUserTotalLots(userAddress));
              dispatch(getRoyaBalance(userAddress));
              dispatch(getUSerLotReward(userAddress));
            })
            .on('error', (error: any) => {
              console.log('error buy archonLot', error);
              dispatch(buyAroyaLotFailure());
            });
        });
    }
  };

const buyMoroyaLotStart = () => ({
  type: BUY_MOROYA_LOT_START
});

const buyMoroyaLotSuccess = (lotAmount: number) => ({
  type: BUY_MOROYA_LOT_SUCCESS,
  lotAmount
});

const buyMoroyaLotFailure = () => ({
  type: BUY_MOROYA_LOT_FAILURE
});

export const buyMoroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(buyMoroyaLotStart());

    if (!!nftDiscount) {
      console.log('with discount');

      getRoyaTokenContract()
        .methods.approve(
          getMonarchLotContractAddress(),
          toRoya((LotsPrice.monarchLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve monarchLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve monarchLot', error);
          dispatch(buyMoroyaLotFailure());
        })
        .then(() => {
          getRoyaNftContract()
            .methods.setApprovalForAll(getMonarchLotContractAddress(), true)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash approve monarchLot nft', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt approve monarchLot nft', receipt);
            })
            .on('error', (error: any) => {
              console.log('error approve monarchLot nft', error);
              dispatch(buyMoroyaLotFailure());
            })
            .then(() => {
              getMonarchLotContract()
                .methods.buyWithNFT(lot, parseInt(nftDiscount))
                .send({
                  from: userAddress
                })
                .on('transactionHash', (hash: string) => {
                  console.log('transactionHash buy  monarchLot nft', hash);
                })
                .on('receipt', (receipt: string) => {
                  console.log('receipt buy monarchLot nft', receipt);
                  dispatch(buyMoroyaLotSuccess(lot));
                  dispatch(getUserTotalLots(userAddress));
                  dispatch(getRoyaBalance(userAddress));
                  dispatch(getUSerLotReward(userAddress));
                })
                .on('error', (error: any) => {
                  console.log('error buy monarchLot nft', error);
                  dispatch(buyMoroyaLotFailure());
                });
            });
        });
    } else {
      console.log('without discount');

      getRoyaTokenContract()
        .methods.approve(
          getMonarchLotContractAddress(),
          toRoya((LotsPrice.monarchLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve monarchLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve monarchLot', error);
          dispatch(buyMoroyaLotFailure());
        })
        .then(() => {
          getMonarchLotContract()
            .methods.buy(lot)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash buy monarchLot', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt buy monarchLot', receipt);
              dispatch(buyMoroyaLotSuccess(lot));
              dispatch(getUserTotalLots(userAddress));
              dispatch(getRoyaBalance(userAddress));
              dispatch(getUSerLotReward(userAddress));
            })
            .on('error', (error: any) => {
              console.log('error buy monarchLot', error);
              dispatch(buyMoroyaLotFailure());
            });
        });
    }
  };

const buyMroyaLotStart = () => ({
  type: BUY_MROYA_LOT_START
});

const buyMroyaLotSuccess = (lotAmount: number) => ({
  type: BUY_MROYA_LOT_SUCCESS,
  lotAmount
});

const buyMroyaLotFailure = () => ({
  type: BUY_MROYA_LOT_FAILURE
});

export const buyMroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(buyMroyaLotStart());

    if (!!nftDiscount) {
      console.log('with discount');

      getRoyaTokenContract()
        .methods.approve(
          getMerchanLotContractAddress(),
          toRoya((LotsPrice.merchantLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve merchantLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve merchantLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve merchantLot', error);
          dispatch(buyMroyaLotFailure());
        })
        .then(() => {
          getRoyaNftContract()
            .methods.setApprovalForAll(getMerchanLotContractAddress(), true)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash approve merchantLot nft', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt approve merchantLot nft', receipt);
            })
            .on('error', (error: any) => {
              console.log('error approve merchantLot nft', error);
              dispatch(buyMroyaLotFailure());
            })
            .then(() => {
              getMerchantLotContract()
                .methods.buyWithNFT(lot, parseInt(nftDiscount))
                .send({
                  from: userAddress
                })
                .on('transactionHash', (hash: string) => {
                  console.log('transactionHash buy  merchantLot nft', hash);
                })
                .on('receipt', (receipt: string) => {
                  console.log('receipt buy merchantLot nft', receipt);
                  dispatch(buyMroyaLotSuccess(lot));
                  dispatch(getUserTotalLots(userAddress));
                  dispatch(getRoyaBalance(userAddress));
                  dispatch(getUSerLotReward(userAddress));
                })
                .on('error', (error: any) => {
                  console.log('error buy merchantLot nft', error);
                  dispatch(buyMroyaLotFailure());
                });
            });
        });
    } else {
      console.log('without discount');

      getRoyaTokenContract()
        .methods.approve(
          getMerchanLotContractAddress(),
          toRoya((LotsPrice.merchantLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve merchantLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve merchantLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve merchantLot', error);
          dispatch(buyMroyaLotFailure());
        })
        .then(() => {
          getMerchantLotContract()
            .methods.buy(lot)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash buy merchantLot', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt buy merchantLot', receipt);
              dispatch(buyMroyaLotSuccess(lot));
              dispatch(getUserTotalLots(userAddress));
              dispatch(getRoyaBalance(userAddress));
              dispatch(getUSerLotReward(userAddress));
            })
            .on('error', (error: any) => {
              console.log('error buy merchantLot', error);
              dispatch(buyMroyaLotFailure());
            });
        });
    }
  };

const buySroyaLotStart = () => ({
  type: BUY_SROYA_LOT_START
});

const buySroyaLotSuccess = (lotAmount: number) => ({
  type: BUY_SROYA_LOT_SUCCESS,
  lotAmount
});

const buySroyaLotFailure = () => ({
  type: BUY_SROYA_LOT_FAILURE
});

export const buySroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(buySroyaLotStart());

    if (!!nftDiscount) {
      console.log('with discount');

      getRoyaTokenContract()
        .methods.approve(
          getSettlerLotContractAddress(),
          toRoya((LotsPrice.settlerLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve settlerLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve settlerLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve settlerLot', error);
          dispatch(buySroyaLotFailure());
        })
        .then(() => {
          getRoyaNftContract()
            .methods.setApprovalForAll(getSettlerLotContractAddress(), true)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash approve settlerLot nft', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt approve settlerLot nft', receipt);
            })
            .on('error', (error: any) => {
              console.log('error approve settlerLot nft', error);
              dispatch(buySroyaLotFailure());
            })
            .then(() => {
              getSettlerLotContract()
                .methods.buyWithNFT(lot, parseInt(nftDiscount))
                .send({
                  from: userAddress
                })
                .on('transactionHash', (hash: string) => {
                  console.log('transactionHash buy  settlerLot nft', hash);
                })
                .on('receipt', (receipt: string) => {
                  console.log('receipt buy settlerLot nft', receipt);
                  dispatch(buySroyaLotSuccess(lot));
                  dispatch(getUserTotalLots(userAddress));
                  dispatch(getRoyaBalance(userAddress));
                  dispatch(getUSerLotReward(userAddress));
                })
                .on('error', (error: any) => {
                  console.log('error buy settlerLot nft', error);
                  dispatch(buySroyaLotFailure());
                });
            });
        });
    } else {
      console.log('without discount');

      getRoyaTokenContract()
        .methods.approve(
          getSettlerLotContractAddress(),
          toRoya((LotsPrice.settlerLot * lot).toString())
        )
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash approve settlerLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt approve settlerLot', receipt);
        })
        .on('error', (error: any) => {
          console.log('error approve settlerLot', error);
          dispatch(buySroyaLotFailure());
        })
        .then(() => {
          getSettlerLotContract()
            .methods.buy(lot)
            .send({
              from: userAddress
            })
            .on('transactionHash', (hash: string) => {
              console.log('transactionHash buy settlerLot', hash);
            })
            .on('receipt', (receipt: string) => {
              console.log('receipt buy settlerLot', receipt);
              dispatch(buySroyaLotSuccess(lot));
              dispatch(getUserTotalLots(userAddress));
              dispatch(getRoyaBalance(userAddress));
              dispatch(getUSerLotReward(userAddress));
            })
            .on('error', (error: any) => {
              console.log('error buy settlerLot', error);
              dispatch(buySroyaLotFailure());
            });
        });
    }
  };

const sellKroyaLotStart = () => ({
  type: SELL_KROYA_LOT_START
});

const sellKroyaLotSuccess = (lotAmount: number) => ({
  type: SELL_KROYA_LOT_SUCCESS,
  lotAmount
});

const sellKroyaLotFailure = () => ({
  type: SELL_KROYA_LOT_FAILURE
});

const sellLockedQueenNftStart = (nftId: string) => ({
  type: SELL_LOCKED_KNIGHT_NFT_START,
  nftId
});

export const sellKroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    if (!!nftDiscount) {
      console.log('sell with nftdiscount qroya');

      dispatch(sellLockedQueenNftStart(nftDiscount));

      getKnightLotContract()
        .methods.sellWithNFT(lot, parseFloat(nftDiscount))
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell knightlot nftid', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell knightlot nftid', receipt);
          dispatch(sellKroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
          dispatch(getNftBalance(userAddress));
          dispatch(getLockedNFTs(userAddress));
          dispatch(getDiscountedQueenLots(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell knightlot nftid', error);
          dispatch(sellKroyaLotFailure());
        });
    } else {
      dispatch(sellKroyaLotStart());

      getKnightLotContract()
        .methods.sell(lot)
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell knightlot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell knightlot', receipt);
          dispatch(sellKroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell knightlot', error);
          dispatch(sellKroyaLotFailure());
        });
    }
  };

const sellAroyaLotStart = () => ({
  type: SELL_AROYA_LOT_START
});

const sellAroyaLotSuccess = (lotAmount: number) => ({
  type: SELL_AROYA_LOT_SUCCESS,
  lotAmount
});

const sellAroyaLotFailure = () => ({
  type: SELL_AROYA_LOT_FAILURE
});

export const sellAroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(sellAroyaLotStart());

    if (!!nftDiscount) {
      console.log('sell with nftdiscount kroya');

      getArchonLotContract()
        .methods.sellWithNFT(lot, parseFloat(nftDiscount))
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell archonLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell archonLot', receipt);
          dispatch(sellAroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell archonLot', error);
          dispatch(sellAroyaLotFailure());
        });
    } else {
      getArchonLotContract()
        .methods.sell(lot)
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell archonLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell archonLot', receipt);
          dispatch(sellAroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell archonLot', error);
          dispatch(sellAroyaLotFailure());
        });
    }
  };

const sellMoroyaLotStart = () => ({
  type: SELL_MROYA_LOT_START
});

const sellMoroyaLotSuccess = (lotAmount: number) => ({
  type: SELL_MROYA_LOT_SUCCESS,
  lotAmount
});

const sellMoroyaLotFailure = () => ({
  type: SELL_MROYA_LOT_FAILURE
});

export const sellMoroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(sellMoroyaLotStart());

    if (!!nftDiscount) {
      console.log('sell with nftdiscount froya');

      getMonarchLotContract()
        .methods.sellWithNFT(lot, parseFloat(nftDiscount))
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell monarchLot', receipt);
          dispatch(sellMoroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell monarchLot', error);
          dispatch(sellMoroyaLotFailure());
        });
    } else {
      getMonarchLotContract()
        .methods.sell(lot)
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell monarchLot', receipt);
          dispatch(sellMoroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell monarchLot', error);
          dispatch(sellMoroyaLotFailure());
        });
    }
  };

const sellMroyaLotStart = () => ({
  type: SELL_MROYA_LOT_START
});

const sellMroyaLotSuccess = (lotAmount: number) => ({
  type: SELL_MROYA_LOT_SUCCESS,
  lotAmount
});

const sellMroyaLotFailure = () => ({
  type: SELL_MROYA_LOT_FAILURE
});

export const sellMroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(sellMroyaLotStart());

    if (!!nftDiscount) {
      console.log('sell with nftdiscount froya');

      getMonarchLotContract()
        .methods.sellWithNFT(lot, parseFloat(nftDiscount))
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell merchantLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell merchantLot', receipt);
          dispatch(sellMroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell merchantLot', error);
          dispatch(sellMroyaLotFailure());
        });
    } else {
      getMonarchLotContract()
        .methods.sell(lot)
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell merchantLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell merchantLot', receipt);
          dispatch(sellMroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell merchantLot', error);
          dispatch(sellMroyaLotFailure());
        });
    }
  };

const sellSroyaLotStart = () => ({
  type: SELL_SROYA_LOT_START
});

const sellSroyaLotSuccess = (lotAmount: number) => ({
  type: SELL_SROYA_LOT_SUCCESS,
  lotAmount
});

const sellSroyaLotFailure = () => ({
  type: SELL_SROYA_LOT_FAILURE
});

export const sellSroyaLot =
  (userAddress: string, lot: number, nftDiscount: string) =>
  (dispatch: any) => {
    dispatch(sellSroyaLotStart());

    if (!!nftDiscount) {
      console.log('sell with nftdiscount froya');

      getMonarchLotContract()
        .methods.sellWithNFT(lot, parseFloat(nftDiscount))
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell monarchLot', receipt);
          dispatch(sellSroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell monarchLot', error);
          dispatch(sellSroyaLotFailure());
        });
    } else {
      getMonarchLotContract()
        .methods.sell(lot)
        .send({
          from: userAddress
        })
        .on('transactionHash', (hash: string) => {
          console.log('transactionHash sell monarchLot', hash);
        })
        .on('receipt', (receipt: string) => {
          console.log('receipt sell monarchLot', receipt);
          dispatch(sellSroyaLotSuccess(lot));
          dispatch(getUserTotalLots(userAddress));
          dispatch(getRoyaBalance(userAddress));
          dispatch(getUSerLotReward(userAddress));
        })
        .on('error', (error: any) => {
          console.log('error sell monarchLot', error);
          dispatch(sellSroyaLotFailure());
        });
    }
  };

const getUserTotalLotsSuccess = (
  kLot: string,
  aLot: string,
  moLot: string,
  mLot: string,
  sLot: string
) => ({
  type: GET_USER_TOTAL_LOTS_SUCCESS,
  kLot,
  aLot,
  moLot,
  mLot,
  sLot
});

export const getUserTotalLots =
  (userAddress: string) => async (dispatch: any) => {
    try {
      const requests = [
        getKnightLotContract().methods.balanceOf(userAddress).call(),
        getArchonLotContract().methods.balanceOf(userAddress).call(),
        getMonarchLotContract().methods.balanceOf(userAddress).call(),
        getMerchantLotContract().methods.balanceOf(userAddress).call(),
        getSettlerLotContract().methods.balanceOf(userAddress).call()
      ];

      const responses = await Promise.all(requests);

      const [knightLot, archonLot, monarchLot, merchantLot, settlerLot] =
        responses;

      dispatch(
        getUserTotalLotsSuccess(
          knightLot,
          archonLot,
          monarchLot,
          merchantLot,
          settlerLot
        )
      );
    } catch (e) {
      console.log('error in get user total lots', e);
    }
  };

const getUserLotRewardSuccess = (
  knightLotReward: string,
  archonLotReward: string,
  monarchLotReward: string,
  merchantLotReward: string,
  settlerLotReward: string
) => ({
  type: GET_USER_LOT_REWARD,
  knightLotReward,
  archonLotReward,
  monarchLotReward,
  merchantLotReward,
  settlerLotReward
});

export const getUSerLotReward =
  (userAddress: string) => async (dispatch: any) => {
    try {
      const requests = [
        getKnightLotContract().methods.profitOf(userAddress).call(),
        getArchonLotContract().methods.profitOf(userAddress).call(),
        getMonarchLotContract().methods.profitOf(userAddress).call(),
        getMerchantLotContract().methods.profitOf(userAddress).call(),
        getSettlerLotContract().methods.profitOf(userAddress).call()
      ];

      const responses = await Promise.all(requests);

      const [
        knightLotReward,
        archonLotReward,
        monarchLotReward,
        merchantLotReward,
        settlerLotReward
      ] = responses;

      dispatch(
        getUserLotRewardSuccess(
          knightLotReward,
          archonLotReward,
          monarchLotReward,
          merchantLotReward,
          settlerLotReward
        )
      );
    } catch (e) {
      console.log('error in get user lot reward');
    }
  };

const claimKroyaRewardStart = () => ({
  type: CLAIM_KLOT_REWARD_START
});

const claimKroyaRewardSuccess = () => ({
  type: CLAIM_KLOT_REWARD_SUCCESS
});

const claimKroyaRewardFailure = () => ({
  type: CLAIM_KLOT_REWARD_FAILURE
});

export const claimKroyaRewards = (userAddress: string) => (dispatch: any) => {
  dispatch(claimKroyaRewardStart());

  getKnightLotContract()
    .methods.claimProfit()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claimProfit knightlot', hash);
    })
    .on('receipt', (receipt: string) => {
      console.log('receipt claimProfit knightlot', receipt);
      dispatch(claimKroyaRewardSuccess());
      dispatch(getUSerLotReward(userAddress));
    })
    .on('error', (error: any) => {
      console.log('error claimProfit knightlot', error);
      dispatch(claimKroyaRewardFailure());
    });
};

const claimAroyaRewardStart = () => ({
  type: CLAIM_ALOT_REWARD_START
});

const claimAroyaRewardSuccess = () => ({
  type: CLAIM_ALOT_REWARD_SUCCESS
});

const claimAroyaRewardFailure = () => ({
  type: CLAIM_ALOT_REWARD_FAILURE
});

export const claimAroyaRewards = (userAddress: string) => (dispatch: any) => {
  dispatch(claimAroyaRewardStart());

  getArchonLotContract()
    .methods.claimProfit()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claimProfit archonlot', hash);
    })
    .on('receipt', (receipt: string) => {
      console.log('receipt claimProfit archonlot', receipt);
      dispatch(claimAroyaRewardSuccess());
      dispatch(getUSerLotReward(userAddress));
    })
    .on('error', (error: any) => {
      console.log('error claimProfit archonlot', error);
      dispatch(claimAroyaRewardFailure());
    });
};

const claimMoroyaRewardStart = () => ({
  type: CLAIM_MoLOT_REWARD_START
});

const claimMoroyaRewardSuccess = () => ({
  type: CLAIM_MoLOT_REWARD_SUCCESS
});

const claimMoroyaRewardFailure = () => ({
  type: CLAIM_MoLOT_REWARD_FAILURE
});

export const claimMoroyaRewards = (userAddress: string) => (dispatch: any) => {
  dispatch(claimMoroyaRewardStart());

  getMonarchLotContract()
    .methods.claimProfit()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claimProfit monarchLot', hash);
    })
    .on('receipt', (receipt: string) => {
      console.log('receipt claimProfit monarchLot', receipt);
      dispatch(claimMoroyaRewardSuccess());
      dispatch(getUSerLotReward(userAddress));
    })
    .on('error', (error: any) => {
      console.log('error claimProfit monarchLot', error);
      dispatch(claimMoroyaRewardFailure());
    });
};

const claimMroyaRewardStart = () => ({
  type: CLAIM_MLOT_REWARD_START
});

const claimMroyaRewardSuccess = () => ({
  type: CLAIM_MLOT_REWARD_SUCCESS
});

const claimMroyaRewardFailure = () => ({
  type: CLAIM_MLOT_REWARD_FAILURE
});

export const claimMroyaRewards = (userAddress: string) => (dispatch: any) => {
  dispatch(claimMroyaRewardStart());

  getMerchantLotContract()
    .methods.claimProfit()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claimProfit merchantLot', hash);
    })
    .on('receipt', (receipt: string) => {
      console.log('receipt claimProfit merchantLot', receipt);
      dispatch(claimMroyaRewardSuccess());
      dispatch(getUSerLotReward(userAddress));
    })
    .on('error', (error: any) => {
      console.log('error claimProfit merchantLot', error);
      dispatch(claimMroyaRewardFailure());
    });
};

const claimSroyaRewardStart = () => ({
  type: CLAIM_SLOT_REWARD_START
});

const claimSroyaRewardSuccess = () => ({
  type: CLAIM_SLOT_REWARD_SUCCESS
});

const claimSroyaRewardFailure = () => ({
  type: CLAIM_SLOT_REWARD_FAILURE
});

export const claimSroyaRewards = (userAddress: string) => (dispatch: any) => {
  dispatch(claimSroyaRewardStart());

  getSettlerLotContract()
    .methods.claimProfit()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claimProfit settlerLot', hash);
    })
    .on('receipt', (receipt: string) => {
      console.log('receipt claimProfit settlerLot', receipt);
      dispatch(claimSroyaRewardSuccess());
      dispatch(getUSerLotReward(userAddress));
    })
    .on('error', (error: any) => {
      console.log('error claimProfit settlerLot', error);
      dispatch(claimSroyaRewardFailure());
    });
};

const getNftBalanceSuccess = (queenNft: number[]) => ({
  type: GET_NFT_BALANCE_SUCCESS,
  queenNft
});

export const getNftBalance = (userAddress: string) => async (dispatch: any) => {
  try {
    const {
      data: {
        queen: { ids }
      }
    } = await axios.get(`${getApiEndpoint()}/getNFTBalances/${userAddress}`);

    dispatch(getNftBalanceSuccess(ids));
  } catch (e) {
    console.log('error in get nft balance ', e);
  }
};

const getLockedNftSuccess = (lockedNfts: Array<string>) => ({
  type: GET_LOCKED_NFT_SUCCESS,
  lockedNfts
});

export const getLockedNFTs = (userAddress: string) => async (dispatch: any) => {
  try {
    const response = await getKnightLotContract()
      .methods.getLockedNFTs(userAddress)
      .call();

    const lockedNfts = response.filter((v: string) => v !== '0');

    dispatch(getLockedNftSuccess(lockedNfts));
  } catch (e) {
    console.log('error in get discounted lots ', e);
  }
};

const getDiscountedQueenLotSuccess = (totalDiscountedKnightLot: string) => ({
  type: GET_DISCOUNTED_KNIGHT_LOT_SUCCESS,
  totalDiscountedKnightLot
});

export const getDiscountedQueenLots =
  (userAddress: string) => async (dispatch: any) => {
    try {
      const response = await getKnightLotContract()
        .methods.discountedLots(userAddress)
        .call();

      dispatch(getDiscountedQueenLotSuccess(response));

      console.log('discountedLots ', response);
    } catch (e) {
      console.log('error in get discounted lots ', e);
    }
  };
