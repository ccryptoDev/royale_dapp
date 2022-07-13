import { TokenHolderLayout } from '../../layouts';
import { useEffect, useState } from 'react';
import {
  Container,
  WhiteHeader,
  SubHeader,
  RoyaContainer,
  StakeRoyaContainer,
  RoyaInfoContainer,
  RoyaInfo,
  RoyaInfoDetail,
  RoyaInfoBox,
  RoyaInfoBoxHeader,
  RoyaInfoSummary,
  RoyaInfoBoxText,
  RoyaInfoButton,
  RoyaContainerHeader,
  StakeButton,
  InputContainer,
  InputField,
  InputText,
  MaxButton,
  ErrorText,
  InputWrapper,
  AmountText,
  LoadingText,
  ToUsd,
  Border,
  BorderBtn,
  MaxBorderBtn,
  RoyaInfoLeft,
  BoxIcon
} from './style';
import { IGetMoney, IGaming, IAPY } from '../../images';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  stakeRoya,
  getRoyaReserveStakeBalance,
  getRoyaBalance,
  getRoyaRewards,
  activateCoolDown,
  claimRoyaRewards,
  getCoolDownStatus,
  openRoyaReserveModal,
  closeRoyaReserveModal,
  getStakerCooldown,
  getTotalStakedRoya,
  getRoyaStats
} from '../../logic/actions';
import {
  Loader,
  Modal,
  RoyaReserveUnstake,
  CooldownActivated
} from '../../components';
import {
  RoyaReserveModal,
  renderTokenAmountText,
  fromMroya,
  fromRoya,
  toRoya,
  getConfig,
  thousandSeparator,
  calculateRoyaApy,
  renderTokenText,
  FlexRowSpace,
  CircleBorder,
  CircleBlackBg
} from '../../utils';

const initialValues = {
  royaAmount: ''
};

const RoyaReserve = () => {
  const dispatch = useDispatch();

  const { walletConnected, userAddress } = useSelector(
    (state: any) => state.user
  );

  const { currentPrice } = useSelector((state: any) => state.royaAnalytics);

  useEffect(() => {
    if (walletConnected) {
      dispatch(getRoyaReserveStakeBalance(userAddress));
      dispatch(getRoyaBalance(userAddress));
      dispatch(getRoyaRewards());
      dispatch(getCoolDownStatus());
      dispatch(getStakerCooldown(userAddress));
      dispatch(getTotalStakedRoya());
      dispatch(getRoyaStats());
    }
  }, [walletConnected, userAddress, dispatch]);

  useEffect(() => {
    const fetchCoolDownStatus = () => {
      dispatch(getCoolDownStatus());
    };

    const fetchRoyaRewards = () => {
      dispatch(getRoyaRewards());
    };

    const fetchCoolDownId = setInterval(fetchCoolDownStatus, 10000);

    const fetchRoyaRewardsId = setInterval(fetchRoyaRewards, 10000);

    return () => {
      clearInterval(fetchCoolDownId);
      clearInterval(fetchRoyaRewardsId);
    };
  }, [userAddress, dispatch]);

  const [cooldownTime, setCooldownTime] = useState(0);

  const {
    isStaking,
    stakedRoyaBalance,
    userRoyaBalance,
    rewardBalance,
    isActivating,
    isClaiming,
    activeModal,
    coolDownStatus,
    totalRoyaStaked,
    stakersCooldown
  } = useSelector((state: any) => state.royaReserve);

  const handleStakeRoya = (values: any) => {
    const { royaAmount } = values;

    if (walletConnected) {
      dispatch(stakeRoya(royaAmount, userAddress));
    }
  };

  useEffect(() => {
    let updateId = setInterval(() => {
      if (coolDownStatus === '1' && stakersCooldown > 0) {
        setCooldownTime(stakersCooldown + 864000 - Date.now() / 1000);
      }
    }, 1000);

    return () => {
      clearInterval(updateId);
    };
  }, [stakersCooldown, coolDownStatus]);

  useEffect(() => {
    let updateId = setInterval(() => {
      if (coolDownStatus === '2' && stakersCooldown > 0) {
        setCooldownTime(stakersCooldown + 172800 - Date.now() / 1000);
      }
    }, 1000);

    return () => {
      clearInterval(updateId);
    };
  }, [stakersCooldown, coolDownStatus]);

  const handleActivateCooldown = () => {
    if (
      isActivating ||
      coolDownStatus === '1' ||
      coolDownStatus === '' ||
      stakedRoyaBalance === '' ||
      stakedRoyaBalance === '0'
    )
      return;
    if (walletConnected) {
      dispatch(activateCoolDown(userAddress));
      setCooldownTime(0);
    }
  };

  const handleClaim = () => {
    if (isClaiming || rewardBalance === '0' || rewardBalance === '') return;
    if (walletConnected) {
      dispatch(claimRoyaRewards(userAddress, rewardBalance));
    }
  };

  const openModal = (modalType: number) => {
    dispatch(openRoyaReserveModal(modalType));
  };

  const closeModal = () => {
    dispatch(closeRoyaReserveModal());
  };

  const renderButton = () => {
    if (stakedRoyaBalance === '' || stakedRoyaBalance === '0') {
      return (
        <RoyaInfoButton
          onClick={handleActivateCooldown}
          // disabled={
          //   isActivating ||
          //   coolDownStatus === '1' ||
          //   coolDownStatus === '' ||
          //   stakedRoyaBalance === '' ||
          //   stakedRoyaBalance === '0'
          // }
        >
          {isActivating ? <Loader /> : <span>Activate Cooldown</span>}
        </RoyaInfoButton>
      );
    } else {
      if (
        coolDownStatus === '' ||
        coolDownStatus === '0' ||
        coolDownStatus === '1'
      ) {
        return (
          <RoyaInfoButton
            onClick={handleActivateCooldown}
            disabled={
              isActivating || coolDownStatus === '1' || coolDownStatus === ''
            }
          >
            {isActivating ? <Loader /> : <span>Activate Cooldown</span>}
          </RoyaInfoButton>
        );
      } else {
        return (
          <RoyaInfoButton onClick={() => openModal(RoyaReserveModal.unstake)}>
            <span>Unstake</span>
          </RoyaInfoButton>
        );
      }
    }
  };

  const schema = Yup.object().shape({
    royaAmount: Yup.string()
      .required('Enter value')
      .test(
        'lowAmount',
        `Should be greater than 0`, //@ts-ignore
        (val) => parseFloat(val) > 0
      )
      .test(
        'InsufficientFunds',
        `Insufficient Funds`, //@ts-ignore
        (val) => BigInt(toRoya(!!val ? val : '0')) <= BigInt(userRoyaBalance)
      )
  });

  const renderTime = () => {
    if (coolDownStatus === '1' && cooldownTime > 0) {
      let days = Math.floor(cooldownTime / 86400);
      let hours = Math.floor((cooldownTime % (3600 * 24)) / 3600);
      let minutes = Math.floor((cooldownTime % 3600) / 60);
      let seconds = Math.floor(cooldownTime % 60);

      if (days >= 1) {
        return `${days} d ${hours} h ${minutes} m ${seconds} s`;
      }

      if (hours >= 1) {
        return `${hours} h ${minutes} m ${seconds} s`;
      }

      if (minutes >= 1) {
        return `${minutes} m ${seconds} s`;
      }

      if (seconds >= 1) {
        return `${seconds} s`;
      }

      return '';
    }

    return '';
  };

  const renderUnstakeTime = () => {
    if (coolDownStatus === '2' && cooldownTime > 0) {
      let days = Math.floor(cooldownTime / 86400);
      let hours = Math.floor((cooldownTime % (3600 * 24)) / 3600);
      let minutes = Math.floor((cooldownTime % 3600) / 60);
      let seconds = Math.floor(cooldownTime % 60);

      if (days >= 1) {
        return `${days} d ${hours} h ${minutes} m ${seconds} s`;
      }

      if (hours >= 1) {
        return `${hours} h ${minutes} m ${seconds} s`;
      }

      if (minutes >= 1) {
        return `${minutes} m ${seconds} s`;
      }

      if (seconds >= 1) {
        return `${seconds} s`;
      }

      return '';
    }

    return '';
  };

  const renderMRoyaToDollar = () => {
    const result = currentPrice * parseFloat(fromMroya(rewardBalance));

    if (isFinite(result)) return result.toFixed(2);

    return '0';
  };

  return (
    <TokenHolderLayout pageTitle={'ROYA Reserve'}>
      <Container>
        <WhiteHeader>ROYA Reserve</WhiteHeader>
        <SubHeader>
          ROYA Reserve is an additional way to earn yield on your ROYA.
        </SubHeader>
        <RoyaContainer>
          <Border>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleStakeRoya}
            >
              {({ setFieldValue, values }) => (
                <Form style={{ width: '100%', height: '100%' }}>
                  <StakeRoyaContainer>
                    <RoyaContainerHeader>
                      How much would you like to stake?
                    </RoyaContainerHeader>
                    {/* <RoyaContainerSubHeader>
											You can stake ROYA and earn ROYA
											</RoyaContainerSubHeader> */}
                    <InputWrapper>
                      <FlexRowSpace>
                        <InputContainer>
                          <InputField
                            name="royaAmount"
                            value={values.royaAmount}
                            onValueChange={(vals: any) =>
                              setFieldValue('royaAmount', vals.value)
                            }
                            decimalScale={'18'}
                          />
                          {/* <InputText>ROYA</InputText> */}
                          <MaxButton
                            type="button"
                            onClick={() =>
                              setFieldValue(
                                'royaAmount',
                                fromRoya(userRoyaBalance)
                              )
                            }
                          >
                            MAX
                          </MaxButton>
                        </InputContainer>
                        <StakeButton
                          type="submit"
                          // disabled={isStaking || userRoyaBalance === "0"}
                        >
                          {isStaking ? (
                            <Loader />
                          ) : (
                            <span data-text="Stake">Stake</span>
                          )}
                        </StakeButton>
                      </FlexRowSpace>
                      <AmountText className="notranslate">
                        Available to stake:{' '}
                        {renderTokenAmountText(fromRoya(userRoyaBalance))}
                      </AmountText>
                      {isStaking && (
                        <LoadingText>{getConfig().transactionText}</LoadingText>
                      )}
                      <ErrorText>
                        <ErrorMessage name="royaAmount" />
                      </ErrorText>
                    </InputWrapper>
                  </StakeRoyaContainer>
                </Form>
              )}
            </Formik>
          </Border>

          <RoyaInfo>
            <Border width={'374px'}>
              <RoyaInfoBox>
                <RoyaInfoBoxHeader>ROYA Staked</RoyaInfoBoxHeader>
                <RoyaInfoBoxText className="notranslate">
                  {!!stakedRoyaBalance &&
                    renderTokenAmountText(fromRoya(stakedRoyaBalance))}
                </RoyaInfoBoxText>

                {renderButton()}
                {isActivating && (
                  <LoadingText>{getConfig().transactionText}</LoadingText>
                )}

                <LoadingText>{renderTime()}</LoadingText>
                <LoadingText>{renderUnstakeTime()}</LoadingText>
              </RoyaInfoBox>
            </Border>
            <Border width={'374px'} marginLeft={'18px'}>
              <RoyaInfoBox>
                <RoyaInfoBoxHeader>
                  Claimable {renderTokenText()}
                </RoyaInfoBoxHeader>
                <RoyaInfoBoxText className="notranslate">
                  {!!rewardBalance &&
                    renderTokenAmountText(fromMroya(rewardBalance))}
                </RoyaInfoBoxText>
                <RoyaInfoButton
                  onClick={handleClaim}
                  // disabled={
                  //   isClaiming ||
                  //   rewardBalance === '0' ||
                  //   rewardBalance === ''
                  // }
                >
                  {isClaiming ? <Loader /> : <span>Claim</span>}
                </RoyaInfoButton>
                <ToUsd>$ {thousandSeparator(renderMRoyaToDollar())}</ToUsd>
                {isClaiming && (
                  <LoadingText>{getConfig().transactionText}</LoadingText>
                )}
              </RoyaInfoBox>
            </Border>
          </RoyaInfo>
        </RoyaContainer>
        <RoyaInfoDetail>
          <Border width={'33%'}>
            <RoyaInfoSummary>
              <BoxIcon>
                <CircleBorder width="107px" height="107px">
                  <CircleBlackBg>
                    <CircleBorder padding="1px" width="100%" height="100%">
                      <CircleBlackBg>
                        <img src={IGetMoney.default} alt="ether icon" />
                      </CircleBlackBg>
                    </CircleBorder>
                  </CircleBlackBg>
                </CircleBorder>
              </BoxIcon>
              <div>ROYA Staked</div>
              <span className="notranslate">
                {!!stakedRoyaBalance &&
                  renderTokenAmountText(fromRoya(stakedRoyaBalance))}
              </span>
            </RoyaInfoSummary>
          </Border>
          <Border width={'33%'}>
            <RoyaInfoSummary>
              <BoxIcon>
                <CircleBorder width="107px" height="107px">
                  <CircleBlackBg>
                    <CircleBorder padding="1px" width="100%" height="100%">
                      <CircleBlackBg>
                        <img src={IGaming.default} alt="ether icon" />
                      </CircleBlackBg>
                    </CircleBorder>
                  </CircleBlackBg>
                </CircleBorder>
              </BoxIcon>
              <div>Cooldown Period</div>
              <span className="notranslate">10 days</span>
            </RoyaInfoSummary>
          </Border>
          <Border width={'33%'}>
            <RoyaInfoSummary>
              <BoxIcon>
                <CircleBorder width="107px" height="107px">
                  <CircleBlackBg>
                    <CircleBorder padding="1px" width="100%" height="100%">
                      <CircleBlackBg>
                        <img src={IAPY.default} alt="ether icon" />
                      </CircleBlackBg>
                    </CircleBorder>
                  </CircleBlackBg>
                </CircleBorder>
              </BoxIcon>
              <div>Staking APY</div>
              <span className="notranslate">
                {thousandSeparator(calculateRoyaApy(fromRoya(totalRoyaStaked)))}
              </span>
            </RoyaInfoSummary>
          </Border>
        </RoyaInfoDetail>
      </Container>

      <Modal
        show={activeModal === RoyaReserveModal.unstake}
        closeModal={() => closeModal()}
      >
        <RoyaReserveUnstake closeModal={() => closeModal()} />
      </Modal>

      <Modal
        show={activeModal === RoyaReserveModal.cooldownActivated}
        closeModal={() => closeModal()}
      >
        <CooldownActivated closeModal={closeModal} />
      </Modal>
    </TokenHolderLayout>
  );
};

export default RoyaReserve;
