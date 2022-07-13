import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getMroyaBalance, swapMroyaToken } from '../../logic/actions';
import { Loader } from '../../components';
import { RightArrowWhite } from '../../images';
import { TokenHolderLayout } from '../../layouts';
import {
  renderTokenAmountText,
  fromMroya,
  SwapProcess,
  toMroya
} from '../../utils';
import {
  MroyaWrapper,
  MroyaContainer,
  MroyaHeader,
  BorderInfoContainer,
  InfoContainer,
  BalanceContainer,
  BalanceContainerHeader,
  BalanceContainerVal,
  RightArrowWrapper,
  ArrowLine,
  RightArrowContainer,
  RightArrowBorder,
  RoyaEquivalentContainer,
  SwapContainer,
  SwapContainerRight,
  SwapContainerHeader,
  SwapContainerHeaderText,
  BorderMaxBtn,
  MaxButton,
  ErrorText,
  BtnContainer,
  SwapBtn,
  MyNumberInput
} from './style';
import { useEffect } from 'react';

const initialValues = {
  mRoyaAmount: '',
  stakeRoya: true
};

const ConvertMroya = () => {
  const dispatch = useDispatch();

  const { walletConnected, userAddress, mRoyaBalance, process } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    if (walletConnected) {
      dispatch(getMroyaBalance(userAddress));
    }
  }, [walletConnected, userAddress, dispatch]);

  const schema = Yup.object().shape({
    mRoyaAmount: Yup.string()
      .required('Enter value of token')
      .test(
        'lowAmount',
        `Should be greater than 0`, //@ts-ignore
        (val) => parseFloat(val) > 0
      )
      .test(
        'InsufficientFunds',
        `Insufficient Funds`, //@ts-ignore
        (val) => BigInt(toMroya(!!val ? val : '0')) <= BigInt(mRoyaBalance)
      )
  });

  const handleSubmit = (values: any) => {
    if (mRoyaBalance === '0' || process > SwapProcess.idle) return;
    const { mRoyaAmount, stakeRoya } = values;

    if (walletConnected) {
      dispatch(swapMroyaToken(userAddress, mRoyaAmount, stakeRoya));
    }
  };

  return (
    <TokenHolderLayout>
      <MroyaWrapper>
        <MroyaContainer>
          <MroyaHeader>Swap mROYA for ROYA</MroyaHeader>
          <BorderInfoContainer>
            <InfoContainer>
              <BalanceContainer>
                <BalanceContainerHeader>mROYA Balance</BalanceContainerHeader>
                <BalanceContainerVal className="no-translate">
                  {renderTokenAmountText(fromMroya(mRoyaBalance))}
                </BalanceContainerVal>
              </BalanceContainer>
              <RightArrowWrapper>
                <ArrowLine />
                <RightArrowContainer>
                  <RightArrowBorder>
                    <img src={RightArrowWhite.default} alt="arrow" />
                  </RightArrowBorder>
                </RightArrowContainer>
                <ArrowLine />
              </RightArrowWrapper>
              <BalanceContainer>
                <RoyaEquivalentContainer>
                  <BalanceContainerHeader>ROYA</BalanceContainerHeader>
                  <BalanceContainerVal className="no-translate">
                    {renderTokenAmountText(fromMroya(mRoyaBalance))}
                  </BalanceContainerVal>
                </RoyaEquivalentContainer>
              </BalanceContainer>
            </InfoContainer>
          </BorderInfoContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values, handleSubmit }) => {
              const handleMaxButton = () => {
                setFieldValue('mRoyaAmount', fromMroya(mRoyaBalance));
              };

              return (
                <Form>
                  <BorderInfoContainer>
                    <SwapContainer>
                      <SwapContainerRight>
                        <SwapContainerHeader>
                          <SwapContainerHeaderText>
                            Transfer Amount
                          </SwapContainerHeaderText>
                          <BorderMaxBtn>
                            <MaxButton type="button" onClick={handleMaxButton}>
                              MAX
                            </MaxButton>
                          </BorderMaxBtn>
                        </SwapContainerHeader>
                        <MyNumberInput
                          placeholder="0"
                          name="mRoyaAmount"
                          value={values.mRoyaAmount}
                          onValueChange={(vals: any) =>
                            setFieldValue('mRoyaAmount', vals.value)
                          }
                          decimalScale={'18'}
                        />
                        <ErrorText>
                          <ErrorMessage name="mRoyaAmount" />
                        </ErrorText>
                      </SwapContainerRight>
                    </SwapContainer>
                  </BorderInfoContainer>
                  <BtnContainer>
                    <SwapBtn
                      type="button"
                      //   disabled={
                      //     mRoyaBalance === "0" || process > SwapProcess.idle
                      //   }
                      onClick={() => {
                        setFieldValue('stakeRoya', true, false);
                        handleSubmit();
                      }}
                    >
                      {process === SwapProcess.stakeRoya ? (
                        <Loader />
                      ) : (
                        <span data-text="Stake in ROYA Reserve">
                          Stake in ROYA Reserve
                        </span>
                      )}
                    </SwapBtn>
                    <SwapBtn
                      type="button"
                      //   disabled={
                      //     mRoyaBalance === "0" || process > SwapProcess.idle
                      //   }
                      onClick={() => {
                        setFieldValue('stakeRoya', false, false);
                        handleSubmit();
                      }}
                    >
                      {process === SwapProcess.inWallet ? (
                        <Loader />
                      ) : (
                        <span data-text="Withdraw to Wallet">
                          Withdraw to Wallet
                        </span>
                      )}
                    </SwapBtn>
                  </BtnContainer>
                </Form>
              );
            }}
          </Formik>
        </MroyaContainer>
      </MroyaWrapper>
    </TokenHolderLayout>
  );
};

export default ConvertMroya;
