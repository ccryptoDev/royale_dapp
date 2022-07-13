import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';

import { TokenHolderLayout } from '../../layouts';
import Tier from './components';
import { Loader } from '../../components';
import {
  Modal,
  BuyAroya,
  BuyKroya,
  BuyMoroya,
  BuyMroya,
  BuySroya,
  SellAroya,
  SellKroya,
  SellMoroya,
  SellMroya,
  SellSroya
} from '../../components';

import {
  StakingWrapper,
  Tabs,
  Tab,
  StakingContainer,
  PieCharts,
  BtnContainer,
  BtnBuy,
  GetLots,
  Header,
  ClaimRoyaContainer,
  ClaimRoyaLine,
  ClaimRoyaBottom,
  ClaimRoyaBottomText,
  RewardRowDetail,
  RewardRow,
  RewardsContainer,
  RewardType,
  RewardDash,
  RewardAmount,
  ClaimBtnContainer,
  ClaimAmount,
  BorderClaimBtn,
  ClaimButton,
  LoadingText
} from './style';

import { Settler, Merchant, Knight, Archon, Monarch } from '../../images';

import {
  StakingLotsModals,
  renderTokenAmountText,
  fromUsdc,
  LotRewardProcess,
  getConfig,
  BorderSecond
} from '../../utils';

import {
  getUSerLotReward,
  getUserTotalLots,
  getRoyaBalance,
  closeSuccessMsg,
  claimKroyaRewards,
  claimAroyaRewards,
  claimMoroyaRewards,
  claimMroyaRewards,
  claimSroyaRewards,
  getNftBalance,
  setNftId,
  getLockedNFTs,
  sellKroyaLot,
  getDiscountedQueenLots
} from '../../logic/actions';

const StakingLots = () => {
  const [modalStatus, setModalStatus] = useState(StakingLotsModals.closed);

  const {
    totalKroyaLot,
    totalAroyaLot,
    totalMoroyaLot,
    claimingProcess,
    knightLotReward,
    archonLotReward,
    monarchLotReward,
    merchantLotReward,
    settlerLotReward,
    lotTypeBought,
    lotAmountBought,
    lotTypeSold,
    lotAmountSold,
    successMsgType,
    queenNft,
    lockedNfts,
    lotOperation,
    sellQueenLotNftId,
    totalDiscountedKnightLot
  } = useSelector((state: any) => state.stakingLots);

  const { userAddress, walletConnected } = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (walletConnected) {
      dispatch(getUSerLotReward(userAddress));
      dispatch(getUserTotalLots(userAddress));
      dispatch(getRoyaBalance(userAddress));
      dispatch(getNftBalance(userAddress));
      dispatch(getLockedNFTs(userAddress));
      dispatch(getDiscountedQueenLots(userAddress));
    }
  }, [userAddress, dispatch, walletConnected]);

  const openModal = (modalType: number) => {
    setModalStatus(modalType);
  };

  const closeModal = () => {
    setModalStatus(StakingLotsModals.closed);
  };

  const handleSettlerReward = () => {
    if (walletConnected) {
      dispatch(claimSroyaRewards(userAddress));
    }
  };

  const handleMerchantReward = () => {
    if (walletConnected) {
      dispatch(claimMroyaRewards(userAddress));
    }
  };

  const handleKnightReward = () => {
    if (walletConnected) {
      dispatch(claimKroyaRewards(userAddress));
    }
  };

  const handleArchonReward = () => {
    if (walletConnected) {
      dispatch(claimAroyaRewards(userAddress));
    }
  };

  const handleMonarchReward = () => {
    if (walletConnected) {
      dispatch(claimMoroyaRewards(userAddress));
    }
  };

  const handleSubmitStake = (tierName: string) => {
    if (tierName === 'Settler') {
      openModal(StakingLotsModals.buySettler);
    } else if (tierName === 'Merchant') {
      openModal(StakingLotsModals.buyMerchant);
    } else if (tierName === 'Knight') {
      openModal(StakingLotsModals.buyKnight);
    } else if (tierName === 'Archon') {
      openModal(StakingLotsModals.buyArchon);
    } else if (tierName === 'Monarch') {
      openModal(StakingLotsModals.buyMonarch);
    }
  };

  const handleSubmitUnstake = (tierName: string) => {
    if (tierName === 'Settler') {
      openModal(StakingLotsModals.sellSettler);
    } else if (tierName === 'Merchant') {
      openModal(StakingLotsModals.sellMerchant);
    } else if (tierName === 'Knight') {
      openModal(StakingLotsModals.sellKnight);
    } else if (tierName === 'Archon') {
      openModal(StakingLotsModals.sellArchon);
    } else if (tierName === 'Monarch') {
      openModal(StakingLotsModals.sellMonarch);
    }
  };

  const tiers = [
    {
      img: Settler.default,
      name: 'Settler',
      amount: '100'
    },
    {
      img: Merchant.default,
      name: 'Merchant',
      amount: '1,000'
    },
    {
      img: Knight.default,
      name: 'Knight',
      amount: '10,000'
    },
    {
      img: Archon.default,
      name: 'Archon',
      amount: '100,000'
    },
    {
      img: Monarch.default,
      name: 'Monarch',
      amount: '1000,000'
    }
  ];

  console.log(
    'sttler and merchant reaward value',
    merchantLotReward,
    settlerLotReward,
    archonLotReward,
    monarchLotReward,
    knightLotReward
  );

  return (
    <TokenHolderLayout pageTitle="Staking Lots">
      <StakingWrapper>
        <Tabs>
          <Tab className="active">Staking Lots</Tab>
          {/* <Tab>Royale NFT Collection</Tab> */}
        </Tabs>
        <StakingContainer>
          {tiers.map((tier, index) => (
            <Tier
              tierInfo={tier}
              key={index}
              handleStake={(tierName: string) => handleSubmitStake(tierName)}
              handleUnstake={(tierName: string) =>
                handleSubmitUnstake(tierName)
              }
            />
          ))}
        </StakingContainer>

        <PieCharts>
          <ProgressBar completed={50} />
        </PieCharts>
        <BorderSecond marginTop="60px !important">
          <ClaimRoyaContainer>
            <Header>Earning From Staking Lots</Header>
            <RewardsContainer>
              <RewardRow>
                <RewardRowDetail>
                  <RewardType>sROYA</RewardType>
                  <RewardDash />
                  <RewardAmount className="notranslate">
                    {`${renderTokenAmountText(
                      fromUsdc(settlerLotReward)
                    )} USDC`}
                  </RewardAmount>
                </RewardRowDetail>
                <BorderClaimBtn>
                  <ClaimButton
                    onClick={() => handleSettlerReward()}
                    disabled={
                      claimingProcess > LotRewardProcess.idle ||
                      settlerLotReward === '0'
                    }
                  >
                    {claimingProcess === LotRewardProcess.slotReward ? (
                      <Loader />
                    ) : (
                      'Claim'
                    )}
                  </ClaimButton>
                </BorderClaimBtn>
              </RewardRow>
              <RewardRow>
                <RewardRowDetail>
                  <RewardType>mROYA</RewardType>
                  <RewardDash />
                  <RewardAmount className="notranslate">
                    {`${renderTokenAmountText(
                      fromUsdc(merchantLotReward)
                    )} USDC`}
                  </RewardAmount>
                </RewardRowDetail>
                <BorderClaimBtn>
                  <ClaimButton
                    onClick={() => handleMerchantReward()}
                    disabled={
                      claimingProcess > LotRewardProcess.idle ||
                      merchantLotReward === '0'
                    }
                  >
                    {claimingProcess === LotRewardProcess.mlotReward ? (
                      <Loader />
                    ) : (
                      'Claim'
                    )}
                  </ClaimButton>
                </BorderClaimBtn>
              </RewardRow>
              <RewardRow>
                <RewardRowDetail>
                  <RewardType>kROYA</RewardType>
                  <RewardDash />
                  <RewardAmount className="notranslate">
                    {`${renderTokenAmountText(fromUsdc(knightLotReward))} USDC`}
                  </RewardAmount>
                </RewardRowDetail>
                <BorderClaimBtn>
                  <ClaimButton
                    onClick={() => handleKnightReward()}
                    disabled={
                      claimingProcess > LotRewardProcess.idle ||
                      knightLotReward === '0'
                    }
                  >
                    {claimingProcess === LotRewardProcess.klotReward ? (
                      <Loader />
                    ) : (
                      'Claim'
                    )}
                  </ClaimButton>
                </BorderClaimBtn>
              </RewardRow>
              <RewardRow>
                <RewardRowDetail>
                  <RewardType>aROYA</RewardType>
                  <RewardDash />
                  <RewardAmount className="notranslate">
                    {`${renderTokenAmountText(fromUsdc(archonLotReward))} USDC`}
                  </RewardAmount>
                </RewardRowDetail>
                <BorderClaimBtn>
                  <ClaimButton
                    onClick={() => handleArchonReward()}
                    disabled={
                      claimingProcess > LotRewardProcess.idle ||
                      archonLotReward === '0'
                    }
                  >
                    {claimingProcess === LotRewardProcess.alotReward ? (
                      <Loader />
                    ) : (
                      'Claim'
                    )}
                  </ClaimButton>
                </BorderClaimBtn>
              </RewardRow>
              <RewardRow>
                <RewardRowDetail>
                  <RewardType>moROYA</RewardType>
                  <RewardDash />
                  <RewardAmount className="notranslate">
                    {`${renderTokenAmountText(
                      fromUsdc(monarchLotReward)
                    )} USDC`}
                  </RewardAmount>
                </RewardRowDetail>
                <BorderClaimBtn>
                  <ClaimButton
                    onClick={() => handleMonarchReward()}
                    disabled={
                      claimingProcess > LotRewardProcess.idle ||
                      monarchLotReward === '0'
                    }
                  >
                    {claimingProcess === LotRewardProcess.molotReward ? (
                      <Loader />
                    ) : (
                      'Claim'
                    )}
                  </ClaimButton>
                </BorderClaimBtn>
              </RewardRow>
              {claimingProcess > LotRewardProcess.idle && (
                <LoadingText>{getConfig().transactionText}</LoadingText>
              )}
            </RewardsContainer>
          </ClaimRoyaContainer>
        </BorderSecond>
        <BtnContainer>
          <BtnBuy>Buy ROYA</BtnBuy>
          {/* <GetLots>
						Get Staking lots
					</GetLots> */}
        </BtnContainer>
      </StakingWrapper>
      <Modal
        show={modalStatus === StakingLotsModals.buySettler}
        closeModal={closeModal}
      >
        <BuySroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.buyMerchant}
        closeModal={closeModal}
      >
        <BuyMroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.buyKnight}
        closeModal={closeModal}
      >
        <BuyKroya closeModal={closeModal} />
      </Modal>

      <Modal
        show={modalStatus === StakingLotsModals.buyArchon}
        closeModal={closeModal}
      >
        <BuyAroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.buyMonarch}
        closeModal={closeModal}
      >
        <BuyMoroya closeModal={closeModal} />
      </Modal>

      <Modal
        show={modalStatus === StakingLotsModals.sellSettler}
        closeModal={closeModal}
      >
        <SellSroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.sellMerchant}
        closeModal={closeModal}
      >
        <SellMroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.sellKnight}
        closeModal={closeModal}
      >
        <SellKroya closeModal={closeModal} />
      </Modal>

      <Modal
        show={modalStatus === StakingLotsModals.sellArchon}
        closeModal={closeModal}
      >
        <SellAroya closeModal={closeModal} />
      </Modal>
      <Modal
        show={modalStatus === StakingLotsModals.sellMonarch}
        closeModal={closeModal}
      >
        <SellMoroya closeModal={closeModal} />
      </Modal>
    </TokenHolderLayout>
  );
};

export default StakingLots;
