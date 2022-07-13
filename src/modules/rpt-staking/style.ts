import styled from 'styled-components';
import {
  Theme,
  SecondaryGradientButton,
  PrimaryGradientButton,
  SecondaryButton,
  FlexStyle
} from '../../utils';

export const PrimaryHeader = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: ${Theme.linkColor};
`;

export const RtpContainer = styled.div`
  max-width: 1032px;
  margin: 10% auto;
  padding-top: 30px;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const StatsBox = styled.div`
  width: 270px;
  background: radial-gradient(
    67.74% 76% at 50.01% 49.98%,
    rgba(30, 166, 198, 0) 0%,
    rgba(33, 167, 199, 0.1384) 27.69%,
    rgba(41, 169, 200, 0.2221) 44.43%,
    rgba(55, 174, 202, 0.2913) 58.25%,
    rgba(75, 180, 204, 0.3525) 70.5%,
    rgba(101, 188, 208, 0.4085) 81.69%,
    rgba(132, 198, 211, 0.4599) 91.98%,
    rgba(162, 207, 215, 0.5) 100%
  );
  border: 1px solid #76c9df;
  border-radius: ${Theme.componentBorderRadius};
  padding: 27px 0 20px 0;
  align-self: flex-start;
`;

export const StatsBoxHeader = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  text-transform: capitalize;
  color: ${Theme.linkColor};
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px auto 0 auto;
`;

export const TextContainer = styled.div`
  margin-top: 7px;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: ${Theme.textColorPrimary};
`;

export const StableCoins = styled.div`
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  color: ${Theme.textColorPrimary};
`;

export const RtpInfoBox = styled.div`
  width: 100%;
  background-color: ${Theme.headerBackground};
`;

export const RtpInfoContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Value = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  color: ${Theme.linkColor};

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const Border = styled(FlexStyle)`
  background: conic-gradient(
    from 215deg at 50% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #20282e 122.18deg,
    #29353c 138.07deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #85839c 222.78deg,
    #ffffff 247.79deg,
    #51555e 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
  border-radius: ${Theme.componentBorderRadius};
  padding: 1px;
`;

export const RptTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RtpBoxButton = styled(SecondaryGradientButton)`
  width: 156px;
  height: 40px;
  margin-top: 40px;
`;

export const RptTotalTop = styled.div`
  padding: 24px 5px 32px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};

  ${Value} {
    margin-top: 16px;
    text-align: center;
    word-break: break-all;
  }

  ${RtpBoxButton} {
    margin-top: 19px;
  }
`;

export const RptTotalBottom = styled.div`
  padding: 24px 5px 32px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};

  ${Value} {
    margin-top: 19px;
    text-align: center;
    word-break: break-all;
  }
`;

export const BorderBtn = styled.div`
  padding: 1px;
  margin-top: 19px;
  border-radius: 6px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
`;

export const UnstakeRptButton = styled(SecondaryGradientButton)`
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  width: 160px;
  margin-top: 19px;
`;

export const RptDynamics = styled.div`
  position: relative;
  margin-top: 76px;

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;

export const RptDynamicsTop = styled.div`
  @media (max-width: 1000px) {
    padding: 27px 30px;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  position: relative;
  padding: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PercentageWrapper = styled.div`
  ${PercentContainer}:not(:first-child) {
    margin-top: 14px;
  }
`;

interface PercentCircleProps {
  color: string;
}

export const PercentCircle = styled.div<PercentCircleProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  /* background-color: ${(props) => props.color}; */

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PercentText = styled.div`
  font-size: 14px;
  line-height: 19px;
  margin-left: 16px;
  margin-top: 2px;
  color: ${Theme.linkColor};
`;

export const Graph = styled.div`
  width: 160px;
  height: 160px;
  position: absolute;
  left: 10%;

  @media (max-width: 1000px) {
    margin: 30px 0 0 0;
  }
`;

export const RptDynamicsBottom = styled.div`
  position: absolute;
  bottom: 24px;
  padding: 0px 30px 0px 30px;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.textColorPrimary};
`;

export const TotalMRoyaBox = styled.div`
  margin-top: 120px;

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;

export const TotalMRoyaBoxTop = styled.div``;

export const RtpTopBox = styled.div`
  padding: 24px 33px 32px 24px;
`;

export const RtpBoxHeader = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: ${Theme.whiteText};
  text-transform: capitalize;
`;

export const BtnContainer = styled.div`
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  padding: 66px 88px;

  @media (max-width: 1000px) {
    flex-direction: column;

    button {
      margin-top: 30px;
    }
    #claim-mroya-value {
      text-align: center;
      word-break: break-all;
      font-size: 18px;
    }
  }
`;

export const RtpBoxBottom = styled.div`
  padding: 19px 30px 22px 30px;
  height: 76px;
  font-size: 12px;
  line-height: 18px;
  color: ${Theme.textColorTertiary};
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Theme.primaryPageBg};
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 96px;
  background-color: ${Theme.primaryPageBg};
`;

export const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.textColorTertiary};
`;

export const ApyPercentAge = styled.div`
  margin-top: 10px;
`;

export const ToUsd = styled.div`
  margin-top: 6px;
  font-size: 16px;
  line-height: 20px;
  color: ${Theme.textColorPrimary};
`;
