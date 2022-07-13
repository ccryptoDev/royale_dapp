import styled from 'styled-components';
import { SecondaryButton, SecondaryGradientButton, Theme } from '../../utils';
import { CustomNumberInput } from '../../components';

export const MroyaWrapper = styled.div`
  max-width: 1032px;
  margin: 10% auto;
  padding-top: 30px;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const MroyaContainer = styled.div`
  width: 946px;
  max-width: 90%;
  margin: 0 auto 0 35px;
  padding-top: 46px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

export const MroyaHeader = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
  color: ${Theme.linkColor};
  font-family: 'Mulish', sans-serif;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const BorderInfoContainer = styled.div`
  margin-top: 26px;
  padding: 1px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
  border-radius: ${Theme.componentBorderRadius};
`;

export const InfoContainer = styled.div`
  padding: 21px 79px;
  background-color: ${Theme.headerBackground};
  box-shadow: 0px 0px 5px #9aa1ac;
  border-radius: ${Theme.componentBorderRadius};
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SwapContainer = styled.div`
  padding: 25px 79px 21px 79px;
  box-shadow: 0px 0px 5px #9aa1ac;
  border-radius: ${Theme.componentBorderRadius};
  background-color: ${Theme.headerBackground};
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

export const SwapContainerRight = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SwapContainerLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SwapContainerHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SwapContainerHeaderText = styled.div`
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${Theme.linkColor};
`;

export const BorderMaxBtn = styled.div`
  margin-left: 27%;
  padding: 1px;
  border-radius: 8px;
  /* margin-left: 8px; */
  border: 1px solid;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const MaxButton = styled(SecondaryButton)`
  width: 56px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.linkColor};
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  background: #0a0f12;
`;

export const SwapBtn = styled(SecondaryGradientButton)`
  width: 318px;
  height: 47px;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 500px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const EnterAmountText = styled.div`
  font-family: 'Mulish', sans-serif;
  margin-top: 17px;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: ${Theme.linkColor};
`;

export const RightArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: row;
    margin-top: 45px;
    justify-content: center;
  }
`;

export const ArrowLine = styled.div`
  width: 1px;
  height: 37px;
  @media (max-width: 1000px) {
    width: 37px;
    height: 1px;
  }
`;

//background-color: ${Colors.greyPrimary};

export const RightArrowContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
      transform: rotate(90deg);
    }
  }
`;

export const RightArrowBorder = styled(SecondaryButton)`
  background: ${Theme.headerBackground};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 15%;
`;

export const BalanceContainer = styled.div`
  flex: 1;
  padding-top: 45px;
`;

export const RoyaEquivalentContainer = styled.div`
  padding-left: 135px;

  @media (max-width: 1000px) {
    padding-left: 0;
  }
`;

export const BalanceContainerHeader = styled.div`
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${Theme.linkColor};

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const BalanceContainerVal = styled.div`
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: ${Theme.textColorPrimary};
  margin-top: 14px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const ErrorText = styled.div`
  font-family: 'Mulish', sans-serif;
  color: ${Theme.error};
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
`;

export const BtnContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;

    ${SwapBtn}:not(:first-child) {
      margin-top: 15px;
    }
  }
`;

export const MyNumberInput = styled(CustomNumberInput)`
  font-family: 'Mulish', sans-serif;
  width: 100%;
  height: 38px;
  padding: 6px 0px;
  background-color: ${Theme.headerBackground};
  border: 0;
  box-sizing: border-box;
  outline: 0;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: ${Theme.textColorPrimary};
  transition: 300ms all;
  margin-top: 17px;
  border: 0;
  height: 40px;
  background: #23272e;
  border: 1px solid #3d3f43;
  padding: 24px 12px;

  ::placeholder {
    color: ${Theme.textColorPrimary};
  }

  /* :focus {
    border: 0;
  } */

  @media (max-width: 1000px) {
    font-size: 18px;
    text-align: center;
  }
`;
