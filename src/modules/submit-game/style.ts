import styled from 'styled-components';
import { SecondaryGradientButton, Theme } from '../../utils';

export const MainImgs = styled.div`
  height: 100%;

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

export const MainWrapper = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    padding: 40px 0;
  }
`;

export const MainTitle = styled.div`
  margin-top: 40px;
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${Theme.whiteText};

  span {
    background: radial-gradient(
      95% 95% at 36.4% 1.4%,
      #ffaf9b 0%,
      #ffe978 20.64%,
      rgba(255, 186, 255, 0.850701) 42.07%,
      #ffd5b7 62.26%,
      #fffee2 80.49%,
      #79a2f2 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 40px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: ${Theme.grayText};
  text-align: center;

  span {
    font-weight: bold;
  }
`;

export const MainContainer = styled.div`
  margin-top: 80px;
  border-radius: 16px;

  @media screen and (max-width: 780px) {
    margin-top: 40px;
    border-radius: 12px;
  }
`;

export const BorderFirst = styled.div`
  padding: 2px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 2px #6e8a9f,
    inset 0px 0px 0px 4px #1b3352,
    inset 0px 0px 0px 5px rgba(255, 255, 255, 0.25),
    inset 0px 0px 10px 10px #000000;
  border-radius: 18px; ;
`;

export const BorderSecond = styled.div`
  margin: 2px;
  padding: 2px;
  border: 2px solid;
  border-radius: 16px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #ffe978 122.18deg,
    rgba(255, 186, 255, 0.850701) 138.07deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #ffe978 222.78deg,
    #ffffff 247.79deg,
    rgba(133, 174, 255, 0.109315) 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
`;

export const MainBg = styled.div`
  padding: 48px 46px 0 48px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  border-radius: 16px;
  width: 735px;

  @media screen and (max-width: 780px) {
    width: 100%;
    border-radius: 12px;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  input {
    padding: 12px 15px;
    height: 48px;
    background: ${Theme.inputTextBg};
    border-radius: 6px;
    border: 0;
    color: ${Theme.whiteText};
    font-size: 12px;
    line-height: 16px;

    &::placeholder {
      opacity: ${Theme.inputTextOpacity};
    }
  }

  textarea {
    height: 82px;
    padding: 12px 15px;
    background: ${Theme.inputTextBg};
    border-radius: 6px;
    border: 0;
    color: ${Theme.whiteText};
    font-size: 12px;
    line-height: 16px;

    &::placeholder {
      opacity: ${Theme.inputTextOpacity};
    }
  }

  span {
    color: ${Theme.error};
  }
`;

export const InputLabel = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: ${Theme.whiteText};
  margin-bottom: 16px;
`;

export const BottomContainer = styled.div`
  margin-top: 36px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.whiteText};
`;

export const BottomBtn = styled(SecondaryGradientButton)`
  margin-top: 36px;
  width: 202px;
  height: 49px;
  color: black;
`;
