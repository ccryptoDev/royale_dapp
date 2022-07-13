import styled from 'styled-components';
import {
  Theme,
  SecondaryGradientButton,
  PrimaryGradientButton,
  FlexStyle
} from '../../utils';
import { CustomNumberInput } from '../../components';

export const Container = styled.div`
  max-width: 1032px;
  margin: 10% auto;
  padding-top: 30px;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const WhiteHeader = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${Theme.linkColor};
  padding-top: 32px;
`;

export const SubHeader = styled.div`
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${Theme.textColorPrimary};

  span {
    text-decoration: underline;
  }
`;

export const RoyaContainer = styled.div`
  margin-top: 32px;
  position: relative;

  form {
    width: 62.61%;
  }

  @media (max-width: 1000px) {
    form {
      width: 100%;
    }
  }
`;

export const StakeRoyaContainer = styled.div`
  background-color: ${Theme.sidebarBg};
  padding: 46px 73px 117px 49px;
  width: 100%;
  border-radius: ${Theme.componentBorderRadius};

  @media screen and (max-width: 860px) {
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    padding: 24px 12px 32px 12px;
  }
`;

export const RoyaContainerHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${Theme.linkColor};
`;

export const RoyaContainerSubHeader = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.textColorPrimary};
  margin-top: 13px;
`;

export const RoyaInfoContainer = styled.div`
  margin-top: 24px;
  width: 100%;

  @media (max-width: 1000px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const RoyaInfoBox = styled.div`
  width: 100%;
  min-height: 240px;
  padding: 48px 28px 24px 28px;
  background-color: ${Theme.sidebarBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${Theme.componentBorderRadius};

  @media (max-width: 1355px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 100%;

    &:last-child {
      margin-left: 0 !important;
      margin-top: 12px !important;
    }
  }
`;

export const RoyaInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -48px;
  /* @media screen and (max-width: 1355px) {
    flex-direction: column;
  } */

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const RoyaInfoLeft = styled.div`
  div:first-child {
    margin-right: 18px;
  }

  div:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const RoyaInfoDetail = styled.div`
  margin-top: 128px;
  width: 100%;
  background-color: ${Theme.sidebarBg};
  border-radius: ${Theme.componentBorderRadius};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1355px) {
    margin-top: 12px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const RoyaInfoBoxText = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  color: ${Theme.whiteText};
  margin-top: 20px;
  min-height: 38px;
  text-align: center;
  word-break: break-all;
`;

export const Border = styled(FlexStyle)`
  padding: 1px;
  background-image: conic-gradient(
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
  border-radius: 12px;
`;

export const RoyaInfoBoxHeader = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${Theme.whiteText};
`;

export const RoyaInfoSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  padding: 90px 25px 60px 25px;
  position: relative;

  div {
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: ${Theme.whiteText};
  }

  span {
    margin-top: 22px;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    color: ${Theme.whiteText};
    word-break: break-all;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    span {
      margin-top: 10px;
    }
  }
`;

export const RoyaInfoBottom = styled.div`
  width: 100%;
  background-color: ${Theme.headerBackground};
  margin-top: 20px;
  padding: 25px 30px 90px 30px;

  ${RoyaInfoSummary}:not(:first-child) {
    margin-top: 14px;
  }

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;

export const BorderBtn = styled.div`
  padding: 1px;
  border-radius: 6px;
  margin-top: 24px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
`;

export const MaxBorderBtn = styled.div`
  padding: 1px;
  border-radius: 6px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
`;

export const RoyaInfoButton = styled(SecondaryGradientButton)`
  width: 175px;
  height: 40px;
  margin-top: 20px;
`;

export const StakeButton = styled(SecondaryGradientButton)`
  width: 156px;
  height: 40px;
  margin-left: 43px;

  @media screen and (max-width: 950px) {
    padding: 7px 8px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 12px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const InputWrapper = styled.div`
  margin-top: 28px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 80%;
  background: ${Theme.inputTextBg};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AmountText = styled.div`
  margin-top: 28px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${Theme.whiteText};

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const InputField = styled(CustomNumberInput)`
  width: 100%;
  height: 48px;
  background: ${Theme.inputTextBg};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputText = styled.div`
  margin: 0 8px;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  background: ${Theme.inputTextBg};

  @media (max-width: 600px) {
    margin: 15px;
  }
`;

export const MaxButton = styled(PrimaryGradientButton)`
  width: 56px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  background: transparent;
  position: absolute;
  right: 0;
  text-decoration: underline;

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const ErrorText = styled.div`
  color: ${Theme.error};
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
`;

export const UnstakeBtnContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.textColorTertiary};
  min-height: 16px;
`;

export const ToUsd = styled.div`
  margin-top: 15px;
  font-size: 16px;
  line-height: 18px;
  color: ${Theme.textColorTertiary};
  text-align: center;
  padding-bottom: 13px;
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -50px;

  img {
    width: 48px;
    height: 48px;
  }
`;
