import styled from 'styled-components';
import { Theme, SecondaryGradientButton, LayoutProps } from '../../../utils';

export const TierContainer = styled.div`
  width: 242px;
  display: flex;
  flex-direction: column;
`;

export const TierTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlackBg = styled.div<LayoutProps>`
  background: ${Theme.blackText};
  border-radius: ${Theme.compOutBorderRadius};
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.padding ? props.padding : '2px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GrayBg = styled.div<LayoutProps>`
  background: #191e25;
  border-radius: ${Theme.compOutBorderRadius};
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.padding ? props.padding : '2px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 133px;
    height: 196px;

    &:hover {
      transform: scale(1.2) translateY(-13%);
      transition: 300ms all;
    }
  }

  img + img {
    position: absolute;
    width: 190px;
    height: 198px;
    bottom: 7px;
    right: 20px;
    transform: rotate(17deg);

    &:hover {
      transform: none;
    }
  }

  .inactive {
    opacity: 0.2;
  }
`;

export const BtnDiscount = styled(SecondaryGradientButton)`
  width: 101px;
  height: 27px;
  position: absolute;
  top: 50%;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #0e0f13;
`;

export const DiscountDetail = styled.div`
  position: absolute;
  bottom: 6px;
  width: 122px;
  height: 48px;
  padding: 8px 14px;
  background: rgba(35, 39, 46, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

export const MarketPlace = styled.span`
  text-decoration: underline;
`;

export const TierDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TieDetailTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  cursor: pointer;

  img {
    margin-left: 8px;

    &.active {
      transform: rotate(180deg);
    }
  }
`;

export const Description = styled.p`
  margin-top: -8px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;

  span {
    font-size: 16px;
  }
`;

export const TierDetailBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const BottomDescription = styled.div`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
`;

export const BottomLists = styled.div`
  margin-top: 14px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
`;

export const TierBottom = styled.div`
  margin: 25px auto;
  max-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Discounted = styled.div`
  padding: 8px 36px;

  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }

  p + p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
`;

export const NonDiscounted = styled.div`
  margin-top: 8px;

  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }

  p + p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }

  p + p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
`;

export const BtnEle = styled(SecondaryGradientButton)`
  width: 95px;
  height: 32px;
  margin-top: 11px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;
