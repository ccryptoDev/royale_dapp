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
  //DiscountBox,
  //DiscountBoxText,
  //DiscountField,
  LotAmountText,
  WarningTextCenter,
  LoadingText
} from '../style';
import { MinusIcon, PlusIcon } from '../../images';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components';
import { buyKroyaLot } from '../../logic/actions';
import {
  getConfig,
  fromRoya,
  renderTokenAmountText,
  StakingLotModals,
  toRoya,
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

const BuyKroya = (props: Props) => {
  const { closeModal } = props;

  const { lotOperation } = useSelector((state: any) => state.stakingLots);

  const { walletConnected, userAddress } = useSelector(
    (state: any) => state.user
  );

  const { userRoyaBalance } = useSelector((state: any) => state.royaReserve);

  const dispatch = useDispatch();

  const handleBuyKroya = (values: any) => {
    const { lotAmount, nftDiscount } = values;

    if (walletConnected) {
      dispatch(buyKroyaLot(userAddress, lotAmount, nftDiscount));
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
            toRoya((parseInt(val as string) * LotsPrice.knightLot).toString())
          )
      ),
    nftDiscount: Yup.string()
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleBuyKroya}
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
            <Header>kROYA Staking Lot</Header>

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
                {thousandSeparator(LotsPrice.knightLot.toString())} ROYA
              </LotTextSecondary>
              <LotTextSecondary>=</LotTextSecondary>
              <LotTextSecondary className="notranslate">
                {thousandSeparator(
                  (LotsPrice.knightLot * lotAmount).toString()
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
                disabled={lotOperation > StakingLotModals.closed}
              >
                {lotOperation === StakingLotModals.buyKing ? (
                  <Loader />
                ) : (
                  'Stake'
                )}
              </BuyLotButton>
              <BorderForBtn>
                <CancelLotButton type="button" onClick={closeModal}>
                  Cancel
                </CancelLotButton>
              </BorderForBtn>
            </BtnContainerSecondary>
            {lotOperation === StakingLotModals.buyKing && (
              <LoadingText>{getConfig().transactionText}</LoadingText>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default BuyKroya;
