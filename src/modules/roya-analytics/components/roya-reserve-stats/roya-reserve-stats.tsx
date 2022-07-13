import { useSelector } from 'react-redux';
import {
  RoyaReserveInfoContainer,
  RoyaReserveHeader,
  RoyaReserveValue,
  RoyaReserveSubHeader,
  RoyaReserveInfoBox,
  RoyaReserveInfoBoxVal,
  RoyaReserveInfoBoxHeader,
  RoyaReserveValueInfo,
  RoyaReserMain
} from './style';
import {
  renderTokenAmountText,
  renderStats,
  calculateRoyaApy,
  thousandSeparator
} from '../../../../utils';

interface Props {
  network: string;
}

const RoyaReserveStats = (props: Props) => {
  const { network } = props;

  const {
    ethereumRoyaStaked,
    binanceRoyaStaked,
    maticRoyaStaked,
    currentPrice
  } = useSelector((state: any) => state.royaAnalytics);

  const calculatePrice = (): string => {
    const result =
      currentPrice *
      parseFloat(
        renderStats(
          network,
          ethereumRoyaStaked,
          binanceRoyaStaked,
          maticRoyaStaked
        )
      );

    if (isFinite(result)) return result.toFixed(2);

    return '0';
  };

  return (
    <RoyaReserveInfoContainer>
      <RoyaReserveHeader>ROYA Reserve</RoyaReserveHeader>
      <RoyaReserMain>
        <RoyaReserveValueInfo>
          <RoyaReserveValue>
            {`${renderTokenAmountText(
              renderStats(
                network,
                ethereumRoyaStaked,
                binanceRoyaStaked,
                maticRoyaStaked
              )
            )} ROYA`}
          </RoyaReserveValue>
          <RoyaReserveSubHeader>Total ROYA Staked</RoyaReserveSubHeader>
        </RoyaReserveValueInfo>
        <RoyaReserveInfoBox>
          <RoyaReserveInfoBoxVal>
            {thousandSeparator(
              calculateRoyaApy(
                renderStats(
                  network,
                  ethereumRoyaStaked,
                  binanceRoyaStaked,
                  maticRoyaStaked
                )
              )
            )}
          </RoyaReserveInfoBoxVal>
          <RoyaReserveInfoBoxHeader>ROYA APY</RoyaReserveInfoBoxHeader>
        </RoyaReserveInfoBox>
        <RoyaReserveInfoBox>
          <RoyaReserveInfoBoxVal>
            {`${renderTokenAmountText(calculatePrice())} USD`}
          </RoyaReserveInfoBoxVal>
          <RoyaReserveInfoBoxHeader>ROYA Value Locked</RoyaReserveInfoBoxHeader>
        </RoyaReserveInfoBox>
      </RoyaReserMain>
    </RoyaReserveInfoContainer>
  );
};

export default RoyaReserveStats;
