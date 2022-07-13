import { useSelector } from 'react-redux';
import {
  RptStatsContainer,
  RptStatsHeader,
  RptInfoContainer,
  TotalRptBox,
  RptGraphBox,
  TotalRptHeader,
  TotalRptVal,
  RptGraphWrapper,
  RptInfoIndicator,
  RptInfoIndicatorItem,
  RptInfoIndicatorText
} from './style';
import { renderTokenAmountText, renderStats } from '../../../../utils';
import { PieChart } from 'react-minimal-pie-chart';
import { CircleGreen, CirclePurple } from '../../../../images';

interface Props {
  network: string;
}

const RptStats = (props: Props) => {
  const { network } = props;

  const {
    ethereumStakedRpt,
    binanceStakedRpt,
    maticStakedRpt,
    ethereumSupplyRpt,
    binanceSupplyRpt,
    maticSupplyRpt
  } = useSelector((state: any) => state.royaAnalytics);

  const { rptBalance, stakedRptBalance } = useSelector(
    (state: any) => state.rptStaking
  );

  const getStakedRptPercent = () => {
    const result =
      (parseFloat(
        renderStats(
          network,
          ethereumStakedRpt,
          binanceStakedRpt,
          maticStakedRpt
        )
      ) /
        parseFloat(
          renderStats(
            network,
            ethereumSupplyRpt,
            binanceSupplyRpt,
            maticSupplyRpt
          )
        )) *
      100;

    if (isFinite(result)) return result.toFixed(2);

    return '0';
  };

  const getUnstakedRptPercent = () => {
    return 100 - parseFloat(getStakedRptPercent());
  };

  const renderStakedPercent = () => {
    const balance = parseFloat(rptBalance.replace(/,/g, ''));
    const stakedBalance = parseFloat(stakedRptBalance.replace(/,/g, ''));

    const percent = (stakedBalance / (balance + stakedBalance)) * 100;

    if (!isNaN(percent)) return percent.toFixed(1);

    return '0';
  };

  const renderUnStakedPercent = () => {
    const balance = parseFloat(rptBalance.replace(/,/g, ''));
    const stakedBalance = parseFloat(stakedRptBalance.replace(/,/g, ''));

    const percent = (balance / (balance + stakedBalance)) * 100;

    if (!isNaN(percent)) return percent.toFixed(1);

    return '0';
  };

  return (
    <RptStatsContainer>
      <RptStatsHeader>RPT Stats</RptStatsHeader>
      <RptInfoContainer>
        <TotalRptBox>
          <TotalRptVal>
            {`${renderTokenAmountText(
              renderStats(
                network,
                ethereumSupplyRpt,
                binanceSupplyRpt,
                maticSupplyRpt
              )
            )} RPT`}
          </TotalRptVal>
          <TotalRptHeader>Total RPT</TotalRptHeader>
        </TotalRptBox>
        <RptGraphWrapper>
          <RptGraphBox>
            <PieChart
              lineWidth={100}
              segmentsShift={(index) => (index === 1 ? 6 : 0)}
              radius={45}
              data={[
                {
                  title: 'Staked',
                  value: parseFloat(getStakedRptPercent()),
                  color: 'url(#gradient1)'
                },
                {
                  title: 'Unstaked',
                  value: getUnstakedRptPercent(),
                  color: 'url(#gradient2)'
                }
              ]}
            >
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="0%" stopColor="rgba(255, 186, 255, 0.850701)" />
                  <stop offset="45%" stopColor="#576DFF" />
                  <stop
                    offset="55%"
                    stopColor="rgba(255, 186, 255, 0.850701)"
                  />
                  <stop offset="100%" stopColor="#576DFF" />
                </linearGradient>
                <linearGradient id="gradient2">
                  <stop offset="0%" stopColor="#FFE978" />
                  {/* <stop offset="0%" stopColor="#2CFEE1" /> */}
                  <stop offset="45%" stopColor="#2CFEE1" />
                  <stop offset="55%" stopColor="#FFE978" />
                  <stop offset="100%" stopColor="#2CFEE1" />
                </linearGradient>
              </defs>
            </PieChart>
          </RptGraphBox>
          <RptInfoIndicator>
            <RptInfoIndicatorItem>
              <img src={CircleGreen.default} alt="circle green" />
              <RptInfoIndicatorText>
                {`${renderStakedPercent()}% - `} Staked RPT
              </RptInfoIndicatorText>
            </RptInfoIndicatorItem>
            <RptInfoIndicatorItem>
              <img src={CirclePurple.default} alt="circle purple" />
              <RptInfoIndicatorText>
                {`${renderUnStakedPercent()}% - `} Unstaked RPT
              </RptInfoIndicatorText>
            </RptInfoIndicatorItem>
          </RptInfoIndicator>
        </RptGraphWrapper>
      </RptInfoContainer>
    </RptStatsContainer>
  );
};

export default RptStats;
