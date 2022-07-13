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
  GET_USER_LOT_REWARD,
  GET_USER_TOTAL_LOTS_SUCCESS,
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
  CLOSE_SUCCESS_MSG,
  LOGOUT_SUCCESS,
  GET_NFT_BALANCE_SUCCESS,
  SET_NFT_ID,
  BUY_DISCOUNTED_KROYA_LOT_START,
  GET_LOCKED_NFT_SUCCESS,
  SELL_LOCKED_KNIGHT_NFT_START,
  GET_DISCOUNTED_KNIGHT_LOT_SUCCESS
} from '../actions';

import {
  SuccessMsgType,
  StakingLotsModals,
  LotRewardProcess
} from '../../utils';

const initialState = {
  totalKroyaLot: '0',
  totalAroyaLot: '0',
  totalMoroyaLot: '0',
  totalMroyaLot: '0',
  totalSroyaLot: '0',
  knightLotReward: '0',
  archonLotReward: '0',
  monarchLotReward: '0',
  merchantLotReward: '0',
  settlerLotReward: '0',
  lotTypeBought: '',
  lotAmountBought: 0,
  lotTypeSold: '',
  lotAmountSold: 0,
  successMsgType: SuccessMsgType.hide,
  lotOperation: StakingLotsModals.closed,
  claimingProcess: LotRewardProcess.idle,
  queenNft: [],
  nftId: 0,
  lockedNfts: [],
  sellQueenLotNftId: '',
  totalDiscountedKnightLot: '0'
};

const stakingLotsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELL_KROYA_LOT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.sellKnight
      };

    case SELL_LOCKED_KNIGHT_NFT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.knightLockedNft,
        sellQueenLotNftId: action.nftId
      };

    case SELL_KROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeSold: 'kROYA',
        lotAmountSold: action.lotAmount,
        successMsgType: SuccessMsgType.showSellSuccess,
        lotOperation: StakingLotsModals.closed,
        sellQueenLotNftId: ''
      };

    case SELL_KROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed,
        sellQueenLotNftId: ''
      };

    case SELL_AROYA_LOT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.sellArchon
      };

    case SELL_AROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeSold: 'aROYA',
        lotAmountSold: action.lotAmount,
        successMsgType: SuccessMsgType.showSellSuccess,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_AROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_MoROYA_LOT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.sellMonarch
      };

    case SELL_MoROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeSold: 'moROYA',
        lotAmountSold: action.lotAmount,
        successMsgType: SuccessMsgType.showSellSuccess,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_MoROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_MROYA_LOT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.sellMerchant
      };

    case SELL_MROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeSold: 'mROYA',
        lotAmountSold: action.lotAmount,
        successMsgType: SuccessMsgType.showSellSuccess,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_MROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_SROYA_LOT_START:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.sellSettler
      };

    case SELL_SROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeSold: 'sROYA',
        lotAmountSold: action.lotAmount,
        successMsgType: SuccessMsgType.showSellSuccess,
        lotOperation: StakingLotsModals.closed
      };

    case SELL_SROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeSold: '',
        lotAmountSold: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_KROYA_LOT_START:
      return {
        ...state,
        lotTypeBought: '',
        lotAmountBought: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.buyKnight
      };

    case BUY_DISCOUNTED_KROYA_LOT_START:
      return {
        ...state,
        lotTypeBought: '',
        lotAmountBought: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.knightDiscount
      };

    case BUY_KROYA_LOT_SUCCESS:
      return {
        ...state,
        lotTypeBought: 'kROYA',
        lotAmountBought: action.lotAmount,
        successMsgType: SuccessMsgType.showBuySuccess,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_KROYA_LOT_FAILURE:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_AROYA_LOT_START:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.buyArchon
      };

    case BUY_AROYA_LOT_SUCCESS:
      return {
        ...state,
        successMsgType: SuccessMsgType.showBuySuccess,
        lotTypeBought: 'aROYA',
        lotAmountBought: action.lotAmount,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_AROYA_LOT_FAILURE:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_MOROYA_LOT_START:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.buyMonarch
      };

    case BUY_MOROYA_LOT_SUCCESS:
      return {
        ...state,
        successMsgType: SuccessMsgType.showBuySuccess,
        lotTypeBought: 'moROYA',
        lotAmountBought: action.lotAmount,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_MOROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeBought: '',
        lotAmountBought: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_MROYA_LOT_START:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.buyMerchant
      };

    case BUY_MROYA_LOT_SUCCESS:
      return {
        ...state,
        successMsgType: SuccessMsgType.showBuySuccess,
        lotTypeBought: 'moROYA',
        lotAmountBought: action.lotAmount,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_MROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeBought: '',
        lotAmountBought: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_SROYA_LOT_START:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide,
        lotTypeBought: '',
        lotAmountBought: 0,
        lotOperation: StakingLotsModals.buySettler
      };

    case BUY_SROYA_LOT_SUCCESS:
      return {
        ...state,
        successMsgType: SuccessMsgType.showBuySuccess,
        lotTypeBought: 'moROYA',
        lotAmountBought: action.lotAmount,
        lotOperation: StakingLotsModals.closed
      };

    case BUY_SROYA_LOT_FAILURE:
      return {
        ...state,
        lotTypeBought: '',
        lotAmountBought: 0,
        successMsgType: SuccessMsgType.hide,
        lotOperation: StakingLotsModals.closed
      };

    case GET_USER_LOT_REWARD:
      return {
        ...state,
        knightLotReward: action.knightLotReward,
        archonLotReward: action.archonLotReward,
        monarchLotReward: action.monarchLotReward,
        merchantLotReward: action.merchantLotReward,
        settlerLotReward: action.settlerLotReward
      };

    case GET_USER_TOTAL_LOTS_SUCCESS:
      return {
        ...state,
        totalKroyaLot: action.kLot,
        totalAroyaLot: action.aLot,
        totalMoroyaLot: action.moLot,
        totalMroyaLot: action.mLot,
        totalSroyaLot: action.sLot
      };

    case CLOSE_SUCCESS_MSG:
      return {
        ...state,
        successMsgType: SuccessMsgType.hide
      };

    case CLAIM_KLOT_REWARD_START:
      return {
        ...state,
        claimingProcess: LotRewardProcess.klotReward
      };

    case CLAIM_KLOT_REWARD_SUCCESS:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_KLOT_REWARD_FAILURE:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_ALOT_REWARD_START:
      return {
        ...state,
        claimingProcess: LotRewardProcess.alotReward
      };

    case CLAIM_ALOT_REWARD_SUCCESS:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_ALOT_REWARD_FAILURE:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_MoLOT_REWARD_START:
      return {
        ...state,
        claimingProcess: LotRewardProcess.molotReward
      };

    case CLAIM_MoLOT_REWARD_SUCCESS:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_MoLOT_REWARD_FAILURE:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_MLOT_REWARD_START:
      return {
        ...state,
        claimingProcess: LotRewardProcess.mlotReward
      };

    case CLAIM_MLOT_REWARD_SUCCESS:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_MLOT_REWARD_FAILURE:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_SLOT_REWARD_START:
      return {
        ...state,
        claimingProcess: LotRewardProcess.slotReward
      };

    case CLAIM_SLOT_REWARD_SUCCESS:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case CLAIM_SLOT_REWARD_FAILURE:
      return {
        ...state,
        claimingProcess: LotRewardProcess.idle
      };

    case GET_NFT_BALANCE_SUCCESS:
      return {
        ...state,
        queenNft: action.queenNft
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        totalKroyaLot: '0',
        totalAroyaLot: '0',
        totalMoroyaLot: '0',
        totalMroyaLot: '0',
        totalSroyaLot: '0',
        queenLotReward: '0',
        kinglotReward: '0',
        flushLotReward: '0',
        queenNft: [],
        nftId: 0
      };

    case SET_NFT_ID:
      return {
        ...state,
        nftId: action.nftId
      };

    case GET_LOCKED_NFT_SUCCESS:
      return {
        ...state,
        lockedNfts: action.lockedNfts
      };

    case GET_DISCOUNTED_KNIGHT_LOT_SUCCESS:
      return {
        ...state,
        totalDiscountedKnightLot: action.totalDiscountedKnightLot
      };

    default:
      return state;
  }
};

export default stakingLotsReducer;
