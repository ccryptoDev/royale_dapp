import {
  Header,
  LotsFormContainer,
  StakingLotsField,
  ErrorText,
  BtnContainerSecondary,
  BuyLotButton,
  CancelLotButton,
  MaxButton,
  LotName,
  RightArrowContainer,
  RoyaAmount,
  LotAmountText,
  LoadingText
} from '../style';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RightArrow } from '../../images';
import { useSelector, useDispatch } from 'react-redux';
import { sellMoroyaLot } from '../../logic/actions';
import { Loader } from '..';
import { getConfig, StakingLotModals, LotsPrice } from '../../utils';

const initialValues = {
  lotAmount: '1',
  nftDiscount: ''
};

interface Props {
  closeModal: () => void;
}

const SellMoroya = (props: Props) => {
  const { walletConnected, userAddress } = useSelector(
    (state: any) => state.user
  );

  const { lotOperation, totalMoroyaLot, totalDiscountedKnightLot } =
    useSelector((state: any) => state.stakingLots);

  const dispatch = useDispatch();

  const { closeModal } = props;

  const handleSellMoRoya = (values: any) => {
    const { lotAmount, nftDiscount } = values;

    if (walletConnected) {
      dispatch(sellMoroyaLot(userAddress, parseInt(lotAmount), nftDiscount));
    }
  };

  const renderRoyaText = (value: string): string => {
    if (!isNaN(parseInt(value))) {
      const lotAmount = parseInt(value);
      if (lotAmount >= 1) {
        return `${(lotAmount * LotsPrice.monarchLot).toLocaleString()} ROYA`;
      }

      return '0 ROYA';
    } else {
      return '0 ROYA';
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
        `Insufficient Lot`,
        (val) =>
          //@ts-ignore
          parseInt(val) <=
          parseInt(totalMoroyaLot) - parseInt(totalDiscountedKnightLot)
      ),
    nftDiscount: Yup.string()
  });

  const renderTotalMoroyaLots = () => {
    if (parseInt(totalMoroyaLot) - parseInt(totalDiscountedKnightLot) >= 0) {
      return parseInt(totalMoroyaLot) - parseInt(totalDiscountedKnightLot);
    }

    return 0;
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSellMoRoya}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Header>UNSTAKE moROYA</Header>
          <LotsFormContainer>
            <StakingLotsField
              name="lotAmount"
              value={values.lotAmount}
              onValueChange={(vals: any) =>
                setFieldValue('lotAmount', vals.value)
              }
              decimalScale={'0'}
            />

            <LotName>moROYA</LotName>
            <RightArrowContainer>
              <img src={RightArrow.default} alt="arrow" />
            </RightArrowContainer>

            <RoyaAmount className="notranslate">
              {renderRoyaText(values.lotAmount)}
            </RoyaAmount>

            <MaxButton
              type="button"
              onClick={() =>
                setFieldValue('lotAmount', renderTotalMoroyaLots().toString())
              }
            >
              MAX
            </MaxButton>
          </LotsFormContainer>
          <ErrorText>
            <ErrorMessage name="lotAmount" />
          </ErrorText>
          <LotAmountText>
            Your Balance:{' '}
            <span className="notranslate">
              {`${renderTotalMoroyaLots()} moROYA`}
            </span>
          </LotAmountText>

          <BtnContainerSecondary>
            <BuyLotButton
              type="submit"
              disabled={lotOperation > StakingLotModals.closed}
            >
              {lotOperation === StakingLotModals.sellQueen ? (
                <Loader />
              ) : (
                'Unstake'
              )}
            </BuyLotButton>
            <CancelLotButton type="button" onClick={closeModal}>
              Cancel
            </CancelLotButton>
          </BtnContainerSecondary>
          {lotOperation === StakingLotModals.sellQueen && (
            <LoadingText>{getConfig().transactionText}</LoadingText>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SellMoroya;
