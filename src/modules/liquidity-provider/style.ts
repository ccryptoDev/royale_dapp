import styled from 'styled-components';
import {
  Theme,
  PrimaryButton,
  SecondaryButton,
  PrimaryGradientButton,
  SecondaryGradientButton,
  FlexStyle
} from '../../utils';
import { CustomNumberInput } from '../../components';

export const ErrorText = styled.div`
  color: ${Theme.error};
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
`;

export const DashboardPage = styled.div`
  /* min-height: 100%; */
  background-color: ${Theme.primaryPageBg};
`;

export const PageContainer = styled.div`
  max-width: 1032px;
  margin: 10% auto;
  padding-top: 30px;

  @media (max-width: 1250px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  width: 48%;
`;

export const TokenContainer = styled.div`
  border-radius: ${Theme.componentBorderRadius};
  padding: 63px 63px 80px 49px;
  background: ${Theme.primaryPageBg};
`;

export const DepositWrapper = styled.div`
  width: 100%;
  margin-top: 57px;
  /* border: 1px solid ${Theme.linkColor}; */

  @media (max-width: 1050px) {
    padding: 24px 49px 56px 24px;
  }
`;

export const DepositContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${TokenContainer}:not(:first-child) {
    margin-left: 45px;
  }

  @media (max-width: 1050px) {
    flex-direction: column;

    ${TokenContainer}:not(:first-child) {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

export const PrimaryHeaderText = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${Theme.whiteText};
`;

export const InputContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PositionDiv = styled.div`
  position: relative;
  display: flex;
  width: 80%;
`;

export const InputField = styled(CustomNumberInput)`
  width: 100%;
  height: 48px;
  background: ${Theme.inputTextBg};
`;

export const CustomDropdown = styled.div`
  margin-left: 8px;
  height: 48px;

  @media (max-width: 650px) {
    margin: 15px 0 15px 0;
  }
`;

export const RtpToken = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  margin-left: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 28%;

  @media (max-width: 650px) {
    margin: 15px 0 0 0;
  }
`;

export const BalanceText = styled.div`
  margin-top: 32px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.textColorTertiary};
`;

export const HistoryContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const HistoryPrimaryHeader = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: ${Theme.linkColor};
  text-transform: capitalize;
`;

export const HistoryBoxItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 22px;
`;

export const HistoryBoxItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  padding: 90px 25px 60px 25px;
  position: relative;
  height: 100%;

  @media (max-width: 985px) {
    margin-top: 16px;
  }
`;

export const HistoryBoxItemAmount = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  min-height: 38px;
  margin-left: 16px;
  color: ${Theme.linkColor};
  word-break: break-all;
`;

export const HistoryBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -23%;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const HistoryBoxText = styled.div`
  margin-top: 16px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: ${Theme.textColorPrimary};
  text-transform: capitalize;

  @media (max-width: 985px) {
    margin-top: 8px;
  }
`;

export const HistoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 110px;

  @media (max-width: 1000px) {
    flex-direction: column;

    ${HistoryBoxItem}:not(:first-child) {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;

export const MidContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const RewardsAndTable = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RewardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;

  border-radius: ${Theme.componentBorderRadius};

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const RewardsTop = styled.div`
  padding: 46px 10px 44px 49px;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  display: flex;
  justify-content: flex-start;
`;

export const RewardsBottom = styled.div`
  padding: 46px 10px 44px 51px;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  display: flex;
  flex-direction: column;
  align-items: self-start;
`;

export const RewardLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #23272e;
`;

export const RewardValue = styled.div`
  margin-top: 17px;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${Theme.textColorPrimary};
`;

export const TableContainer = styled.div`
  width: 100%;
  background: ${Theme.headerBackground};
  border-radius: ${Theme.componentBorderRadius};
  padding: 24px 40px 0 36px;

  @media (max-width: 1100px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const HistoryTable = styled.div`
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 275px;
  margin-top: 24px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
    background-color: ${Theme.primaryPageBg};
    border-radius: 20px;
  }
`;

interface ApyTdProps {
  operation: string;
}

const setApyTdColor = (operation: string): string => {
  if (operation === 'Contribution') {
    return Theme.textColorSecondary;
  }

  return Theme.error;
};

export const ApyTd = styled.td<ApyTdProps>`
  color: ${(props) => setApyTdColor(props.operation)} !important;
  word-break: break-all;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5em;
  width: 100%;
  min-width: 490px;
  table-layout: fixed;

  thead tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Theme.primaryPageBg};
  }

  thead th {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${Theme.textColorPrimary};
    padding: 0px 0px 7px 15px;
    text-align: left;

    &:first-child {
      padding: 0px 0px 0px 0px !important;
    }
  }

  tbody tr td {
    font-size: 14px;
    line-height: 19px;
    color: #ffffff !important;
    padding: 6.5px 15px 7.5px 15px;
    background: ${Theme.primaryPageBg};
  }

  tbody tr td:first-child {
    border-top-left-radius: ${Theme.componentBorderRadius};
    border-bottom-left-radius: ${Theme.componentBorderRadius};
  }

  tbody tr td:last-child {
    border-top-right-radius: ${Theme.componentBorderRadius};
    border-bottom-right-radius: ${Theme.componentBorderRadius};
  }
`;

export const ClaimRoya = styled.div`
  margin-top: 11px;
  display: flex;
  justify-content: center;
`;

export const ClaimRoyaBtn = styled(PrimaryButton)`
  width: 174px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

export const Withdraw = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: center;
  border-radius: ${Theme.componentBorderRadius};
  background-color: ${Theme.headerBackground};
  padding: 39px 0;
`;

export const WithdrawBtn = styled(PrimaryButton)``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const PrimaryHeader = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${Theme.linkColor};

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const ClaimRewardCont = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const WithdrawsBtn = styled(SecondaryGradientButton)`
  width: 156px;
  height: 40px;
  border-radius: ${Theme.elementBorderRadius};
  margin-right: 16px;
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
`;

export const ClaimRewardsBtn = styled(SecondaryGradientButton)`
  width: 156px;
  height: 40px;
  border-radius: ${Theme.elementBorderRadius};
`;

export const RightArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 47.5%;

  img + img {
    position: absolute;
  }

  @media (max-width: 650px) {
    margin: 15px 0 0 0;
  }
`;

export const DepositBtn = styled(SecondaryGradientButton)`
  width: 146px;
  font-size: 14px;
  line-height: 19px;
  height: 40px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: 0;

  @media (max-width: 650px) {
    height: 40px;
    margin: 15px 0 0 0;
  }
`;

export const TotalRpt = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  min-height: 38px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  word-break: break-all;
  margin-top: 20px;
`;

export const AvailableRpt = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  min-height: 38px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  word-break: break-all;
  margin-top: 20px;
`;

export const BorderMaxBtn = styled.div`
  padding: 1px;
  border-radius: 6px;
  margin-left: 8px;
  border: 1px solid;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
`;

export const MaxButton = styled.button`
  width: 56px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 0;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  background: ${Theme.inputTextBg};
  position: absolute;
  right: 2px;
  top: 2px;
  text-decoration: underline;

  @media (max-width: 650px) {
    margin-left: 0;
  }
`;

export const ProgressContainer = styled.div`
  width: 68px;
  height: 2px;
  border-radius: 4px;
  background-color: ${Theme.headerBackground};
  margin: 0 auto;
`;

interface ProgressBarProps {
  days: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${(props) => `${(props.days / 14) * 100}%`};
  height: 2px;
  border-radius: 4px;
  background-color: ${Theme.linkColor};
`;

export const Days = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-align: center;
  margin-bottom: 3px;
  color: ${Theme.textColorPrimary};
`;

export const ClaimButton = styled(SecondaryButton)`
  width: 76px;
  height: 22px;
  margin: 0 auto;
`;

export const RptToUsd = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: ${Theme.whiteText};
  opacity: 0.5;
`;

export const Border = styled(FlexStyle)`
  padding: 1px;
  border-radius: 12px;
  border: 1px solid;
  background: conic-gradient(
    from 180deg at 50% 50%,
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
    #ffe978 222.78deg,
    #ffffff 247.79deg,
    #51555e 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
`;
