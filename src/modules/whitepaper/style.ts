import styled from 'styled-components';
import {
  Theme,
  CustomStyle,
  MarginPadding,
  CustomFlex,
  FlexStyle
} from '../../utils';

interface CustomStyleProps {
  type?: string;
  bgColor?: any;
  border?: any;
  borderRadius?: any;
  textAlign?: any;
  letterSpacing?: any;
  fontSize?: string;
  lineHeight?: any;
  marginTop?: any;
  textFillColor?: any;
}

export const MainImgs = styled.div`
  height: 100%;
  /* z-index: 2; */

  img {
    &:first-child {
      position: absolute;
      top: 0;
      right: 0;

      @media screen and (max-width: 1500px) {
        width: 40%;
        height: 50%;
      }

      @media screen and (max-width: 650px) {
        display: none;
      }
    }

    &:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 18px;
      width: 406.85px;
      height: 488.13px;

      @media screen and (max-width: 1500px) {
        width: 15%;
        height: 20%;
      }

      @media screen and (max-width: 1135px) {
        display: none;
      }
    }

    &:nth-child(3) {
      width: 734.9px;
      height: 881.72px;
      position: absolute;
      top: 100%;
      right: 0;

      @media screen and (max-width: 1500px) {
        width: 30%;
        height: 35%;
      }

      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;

export const WhitepaperWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    margin: 40px auto;
  }
`;

export const HeaderConainer = styled.div`
  width: 100%;
  height: 800px;
  background: radial-gradient(
    43.73% 70.86% at 52.79% 70.77%,
    #23272e 2.1%,
    #0b1014 84.11%
  );
  background-blend-mode: overlay, normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhitepaperContainer = styled.div`
  margin-top: -17vh;
  background: ${Theme.primaryPageBg};
  max-width: 1024px;
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

export const RoyaleConatiner = styled.div`
  background: ${Theme.primaryPageBg};
  border-radius: ${Theme.componentBorderRadius};
  padding: 99px 65px 81px 68px;
`;

export const Title = styled.div`
  color: ${Theme.whiteText};
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
`;

export const Container = styled(FlexStyle)`
  color: ${Theme.whiteText};
  margin-top: 40px;
`;

export const SubTitle = styled.div`
  color: ${Theme.whiteText};
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.01em;
`;

export const DeatilInfo = styled.div`
  color: ${Theme.textColorPrimary};
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  strong {
    color: ${Theme.whiteText};
  }
`;

export const DetailInfoGroup = styled.div`
  display: flex;

  span + span {
    padding-left: 12px;
  }

  .first-num {
    padding-left: 16px;
  }
`;
