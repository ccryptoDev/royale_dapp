import styled from 'styled-components';
import { SecondaryGradientButton, Theme, SecondaryButton } from '../../utils';

export const StakingWrapper = styled.div`
  max-width: 1418px;
  margin: 10% auto;
  color: ${Theme.whiteText};
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Tab = styled.div`
  cursor: pointer;
  margin-right: 40px;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: ${Theme.grayText};
  padding: 25px 33px;

  &.active {
    background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 2px #6e8a9f,
      inset 0px 0px 0px 4px #1b3352,
      inset 0px 0px 0px 5px rgba(255, 255, 255, 0.25),
      inset 0px 0px 10px 10px #000000;
    border-radius: 16px;
    color: #ffffff;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

export const StakingContainer = styled.div`
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
`;

export const PieCharts = styled.div`
  margin-top: 90px;
  position: relative;

  & > div {
    position: relative;

    & > div {
      background: linear-gradient(
        270.13deg,
        rgba(38, 54, 87, 0.6) 11.41%,
        rgba(7, 16, 35, 0.6) 90.96%
      );

      & > div {
        background: conic-gradient(
            from 180deg at 50% 50%,
            #ffffff 0deg,
            #000000 51.64deg,
            #ffffff 79.77deg,
            #000000 141.65deg,
            #ffffff 194.15deg,
            #000000 254.15deg,
            #ffffff 286.03deg,
            #000000 331.03deg,
            #ffffff 360deg
          ),
          conic-gradient(
            from 180deg at 50% 50%,
            #ffffff 0deg,
            #000000 51.64deg,
            #ffffff 79.77deg,
            #000000 141.65deg,
            #ffffff 194.15deg,
            #000000 254.15deg,
            #ffffff 286.03deg,
            #000000 331.03deg,
            #ffffff 360deg
          ),
          radial-gradient(
            95% 95% at 36.4% 1.4%,
            #f7d4cb 0%,
            #fffae2 20.64%,
            rgba(255, 186, 255, 0.850701) 42.07%,
            #ffd5b7 62.26%,
            #fffee2 80.49%,
            #79a2f2 100%
          );
        background-blend-mode: screen, difference, normal;
        mix-blend-mode: normal;
      }
    }
    aàZ span {
      display: none !important;
    }
  }
`;

export const BtnContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const BtnBuy = styled(SecondaryGradientButton)`
  width: 164px;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const GetLots = styled(SecondaryGradientButton)`
  height: 100%;
  width: 206px;
  margin-left: 28px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const Header = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${Theme.textColorPrimary};
  text-transform: capitalize;
`;

export const ClaimRoyaContainer = styled.div`
  border-radius: ${Theme.componentBorderRadius};
  padding: 27px 20px 23px 31px;
  background-color: ${Theme.headerBackground};
`;

export const ClaimRoyaLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Theme.primaryPageBg};
`;

export const ClaimRoyaBottom = styled.div`
  padding: 12px 0 12px 31px;
  background-color: ${Theme.headerBackground};
`;

export const ClaimRoyaBottomText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${Theme.textColorTertiary};
`;

export const RewardRowDetail = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const RewardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const RewardsContainer = styled.div`
  margin-top: 44px;

  ${RewardRow}:not(:first-child) {
    margin-top: 32px;
  }
`;

export const RewardType = styled.div`
  width: 60px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${Theme.linkColor};
  text-align: left;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const RewardDash = styled.div`
  width: 16px;
  height: 2px;
  margin-left: 32px;
  background-color: ${Theme.textColorPrimary};

  @media (max-width: 800px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const RewardAmount = styled.div`
  margin-left: 32px;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${Theme.linkColor};

  @media (max-width: 800px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const ClaimBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClaimAmount = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${Theme.textColorPrimary};
  word-break: break-all;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const BorderClaimBtn = styled.div`
  padding: 1px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
  border-radius: ${Theme.elementBorderRadius};

  @media screen and (max-width: 1000px) {
    margin-top: 8px;
  }
`;

export const ClaimButton = styled(SecondaryButton)`
  width: 120px;
  font-size: 12px;
  line-height: 16px;
  float: right;
  background: #0a0f12;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.textColorTertiary};
`;
