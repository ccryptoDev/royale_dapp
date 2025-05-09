import styled from 'styled-components';
import {
  Theme,
  SecondaryGradientButton,
  PrimaryGradientButton
} from '../../../../utils';

export const AmountContainer = styled.div`
  margin-top: 31px;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.textColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 38px;
`;

export const TextContainer = styled.div`
  margin-top: 29px;
  font-size: 12px;
  line-height: 18px;
  color: ${Theme.textColorPrimary};
`;

export const WaringText = styled.div`
  margin-top: 14px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: ${Theme.warning};
`;

export const BtnContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ConfirmBtn = styled(SecondaryGradientButton)`
  width: 144px;
  font-size: 14px;
  line-height: 19px;
  height: 48px;
`;

export const BorderCancelBtn = styled.div`
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

export const CancelBtn = styled(PrimaryGradientButton)`
  width: 144px;
  height: 48px;
  background-color: #0a0f12;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
