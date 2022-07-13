import {
  Header,
  BuyLotButton,
  CancelLotButton,
  BtnContainerSecondary,
  LotSelect,
  ImgSignContainer,
  LotSelectContainer,
  LotText,
  LotTextSecondary,
  ErrorText,
  LotAmountText,
  WarningTextCenter,
  LoadingText
} from '../style';
import { MinusIcon, PlusIcon } from '../../images';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '..';
import { buyMroyaLot } from '../../logic/actions';
import {
  StakingLotModals,
  renderTokenAmountText,
  fromRoya,
  toRoya,
  getConfig,
  LotsPrice,
  thousandSeparator,
  BorderForBtn
} from '../../utils';

interface Props {
  closeModal: () => void;
}

const initialValues = {
  lotAmount: 1,
  nftDiscount: ''
};

const BuyMroya = (props: Props) => {
  const { closeModal } = props;

  const { lotOperation } = useSelector((state: any) => state.stakingLots);

  const { walletConnected, userAddress } = useSelector(
    (state: any) => state.user
  );

  const { userRoyaBalance } = useSelector((state: any) => state.royaReserve);

  const dispatch = useDispatch();

  const handleBuyMroya = (values: any) => {
    const { lotAmount, nftDiscount } = values;

    if (walletConnected) {
      dispatch(buyMroyaLot(userAddress, lotAmount, nftDiscount));
    }
  };

  const schema = Yup.object().shape({
    lotAmount: Yup.string()
      .required('Enter value')
      .test(
        'lowAmount',
        `Should be greater than or equal to 1`, //@ts-ignore
        (val) => parseFloat(val) >= 1
      )
      .test(
        'InsufficientFunds',
        `Insufficient Funds`, //@ts-ignore
        (val) =>
          BigInt(userRoyaBalance) >=
          BigInt(
            toRoya((parseInt(val as string) * LotsPrice.merchantLot).toString())
          )
      ),
    nftDiscount: Yup.string()
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleBuyMroya}
    >
      {({ values, setFieldValue }) => {
        const handleIncrement = () => {
          setFieldValue('lotAmount', values.lotAmount + 1);
        };

        const handleDecrement = () => {
          const { lotAmount } = values;
          if (lotAmount > 1) {
            setFieldValue('lotAmount', lotAmount - 1);
          }
        };

        const { lotAmount } = values;

        return (
          <Form>
            <Header>mROYA Staking Lot</Header>
            <LotSelectContainer>
              <LotSelect>
                <ImgSignContainer onClick={handleDecrement}>
                  <img src={MinusIcon.default} alt="subtract" />
                </ImgSignContainer>
                <div>{lotAmount}</div>
                <ImgSignContainer onClick={handleIncrement}>
                  <img src={PlusIcon.default} alt="add" />
                </ImgSignContainer>
              </LotSelect>

              <LotText>x</LotText>
              <LotTextSecondary className="notranslate">
                {thousandSeparator(LotsPrice.merchantLot.toString())} ROYA
              </LotTextSecondary>
              <LotTextSecondary>=</LotTextSecondary>
              <LotTextSecondary className="notranslate">
                {thousandSeparator(
                  (LotsPrice.merchantLot * lotAmount).toString()
                )}{' '}
                ROYA
              </LotTextSecondary>
            </LotSelectContainer>
            <LotAmountText>
              Available:{' '}
              <span className="notranslate">
                {`${
                  !!userRoyaBalance &&
                  renderTokenAmountText(fromRoya(userRoyaBalance))
                } ROYA`}
              </span>
            </LotAmountText>

            <ErrorText>
              <ErrorMessage name="lotAmount" />
            </ErrorText>

            <WarningTextCenter>
              Disclaimer: <br /> There is an 8 day lockup period
            </WarningTextCenter>

            <BtnContainerSecondary>
              <BuyLotButton
                type="submit"
                // disabled={lotOperation > StakingLotModals.closed}
              >
                {lotOperation === StakingLotModals.buyQueen ? (
                  <Loader />
                ) : (
                  <span data-text="Stake">Stake</span>
                )}
              </BuyLotButton>
              <BorderForBtn>
                <CancelLotButton type="button" onClick={closeModal}>
                  Cancel
                </CancelLotButton>
              </BorderForBtn>
            </BtnContainerSecondary>
            {lotOperation === StakingLotModals.buyQueen && (
              <LoadingText>{getConfig().transactionText}</LoadingText>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default BuyMroya;
