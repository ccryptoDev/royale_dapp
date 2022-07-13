import styled from 'styled-components';
import {
  Theme,
  FlexStyle,
  PrimaryGradientButton,
  SecondaryGradientButton
} from '../../utils';

export const MainImgs = styled.div`
  height: 100%;

  img {
    &:first-child {
      position: absolute;
      top: 0;
      right: 0;

      @media screen and (max-width: 1500px) {
        width: 40%;
        height: 40%;
      }

      @media screen and (max-width: 650px) {
        display: none;
      }
    }

    &:nth-child(2) {
      position: absolute;
      right: 0;
      bottom: 0;
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
  }
`;

export const MainWrapper = styled.div`
  margin: 10% 0;
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
  width: 100%;

  @media screen and (max-width: 780px) {
    margin-top: 40px;
    border-radius: 12px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 86px;
`;

export const Tab = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: ${Theme.whiteText};
  opacity: 0.5;
  margin-right: 78px;
  cursor: pointer;

  &.active {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    opacity: 1;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const MainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1203px;
  margin: 125px auto;
`;

export const HashTags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HashTag = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: ${Theme.whiteText};
  opacity: 0.5;
  padding: 28px 70px 29px 52px;
  cursor: pointer;
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }

  &.active {
    background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 2px #6e8a9f,
      inset 0px 0px 0px 4px #1b3352,
      inset 0px 0px 0px 5px rgba(255, 255, 255, 0.25),
      inset 0px 0px 10px 10px #000000;
    border-radius: 16px;
    opacity: 1;
  }
`;

export const BorderFirst = styled(FlexStyle)`
  padding: 2px;
  border-radius: 18px;
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

export const BorderSecond = styled.div`
  padding: 2px;
  background-color: #394151;
  border-radius: 18px;
  border: 2px solid #6e8a9f;
`;

export const MainBg = styled.div`
  padding: 48px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  border-radius: 16px;
  width: 578px;
  height: 377px;
  border: 5px solid black;
  position: relative;

  @media screen and (max-width: 780px) {
    width: 100%;
    border-radius: 12px;
  }
`;

export const Container = styled.div`
  position: relative;

  div:first-child {
    position: relative;

    div:first-child {
      background: linear-gradient(
        270.13deg,
        rgba(38, 54, 87, 0.6) 11.41%,
        rgba(7, 16, 35, 0.6) 90.96%
      ) !important;

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
          ) !important;
        background-blend-mode: screen, difference, normal;
        mix-blend-mode: normal;
      }
    }
    span {
      margin-top: -50px;
      margin-right: -100px;
      position: absolute;
    }
  }
`;

export const ProgressDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Target = styled.div`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: ${Theme.whiteText};
  opacity: 0.4;
  background: transparent !important;
`;

export const Remaining = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: ${Theme.whiteText};
  background: transparent !important;
  display: flex;
  align-items: center;

  span {
    margin-right: 12px;
  }
`;

export const SocialDetail = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialBg = styled.div`
  width: 40%;
  height: 51px;
  border-radius: 200px;
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
  box-shadow: 2px 2px 0px rgba(66, 80, 92, 0.82);
  border: 0;
  color: ${Theme.sidebarBg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Followers = styled.div`
  color: ${Theme.whiteText};
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.04em;
`;

export const SocialTotal = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin-right: 34px;

  span {
    margin-left: 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: ${Theme.whiteText};
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: ${Theme.whiteText};
  }
`;

export const IDOMainDetails = styled.div`
  margin: 125px auto;
  padding: 0 27px;

  .icon-slider {
    margin: auto 40px;
    cursor: pointer;
  }
  .slick-next {
    width: 40px;
    height: 40px;
  }
  .slick-prev {
    width: 40px;
    height: 40px;
    z-index: 2;
  }

  .slick-active {
    margin: 0 80px;
  }
  .slick-list {
    margin: 0 -80px;
  }
  /*
  & > div:first-child {
    width: 521px;
    height: 619px;
  }
  & > div:nth-child(2) {
    width: 521px;
    height: 745px;
  }
  & > div:last-child {
    width: 521px;
    height: 619px;
  } */
`;

export const IDOMainBg = styled.div`
  padding: 48px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  border-radius: 16px;
  /* max-width: 521px; */
  /* height: 745px; */
  border: 5px solid black;
  position: relative;

  @media screen and (max-width: 780px) {
    width: 100%;
    border-radius: 12px;
  }
`;

export const IDO = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IDOProgress = styled.div`
  width: 100%;
  position: relative;
  margin-top: 32px;

  div:first-child {
    position: relative;
    height: 10px;

    div:first-child {
      background: linear-gradient(
        270.13deg,
        rgba(38, 54, 87, 0.6) 11.41%,
        rgba(7, 16, 35, 0.6) 90.96%
      ) !important;

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
          ) !important;
        background-blend-mode: screen, difference, normal;
        mix-blend-mode: normal;
      }
    }
    span {
      color: transparent !important;
    }
  }
`;

export const PrimaryBorder = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 23px;
  width: 134px;
  height: 38px;
  padding: 3px;
`;

export const Status = styled.div`
  color: ${Theme.whiteText};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2e30;
  width: 100%;
  height: 100%;
  border-radius: 17px;
`;

export const OrionText = styled.div`
  margin-top: 21px;
  color: ${Theme.whiteText};
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.01em;
`;

export const AmountText = styled.div`
  margin-top: 35px;
`;

export const ColorText = styled.div`
  span:first-child {
    font-weight: 600;
    font-size: 52px;
    line-height: 32px;
    color: ${Theme.whiteText};
    opacity: 1 !important;
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
        #ffaf9b 0%,
        #ffe978 20.64%,
        rgba(255, 186, 255, 0.850701) 42.07%,
        #ffd5b7 62.26%,
        #fffee2 80.49%,
        #79a2f2 100%
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: capitalize;
    background-blend-mode: screen, difference, normal;
    mix-blend-mode: normal;
  }

  span:last-child {
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.01em;
    color: ${Theme.whiteText};
    opacity: 0.5;
  }

  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
`;

export const CustomBorder = styled(FlexStyle)`
  margin-top: 51px;
  padding: 1px;
  border-radius: 16px 16px 6px 6px;
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

export const CountDownContainer = styled.div`
  width: 100%;
  height: 85px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  background-blend-mode: overlay, normal;
  border-radius: 16px 16px 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #ffffff;
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: 100%;
    border-radius: 18px;
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
`;

export const SocialBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  img {
    margin-left: 24px;

    &:first-child {
      margin-left: 0;
    }
  }

  span {
    position: relative;
    margin-left: 24px;

    img + img {
      position: absolute;
      top: 25%;
      left: 30%;
      z-index: 2;
      height: 28px;
      width: 28px;
      margin-left: 0;
    }
  }
`;

export const LearnMoreBtn = styled(SecondaryGradientButton)`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
  width: 184px;
  height: 40px;
  margin: 40px auto auto;
`;

export const InvestContainer = styled.div`
  margin-top: 35px;
`;

export const InvestText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
`;

export const InvestInputContainer = styled.div`
  margin-top: 17px;
`;

export const InvestInput = styled.div`
  background: linear-gradient(186.68deg, #374252 3.86%, #242b34 96.44%);
  background-blend-mode: overlay, normal;
  border-radius: 6px;
  position: relative;
  height: 56px;

  input {
    background-color: transparent !important;
    width: 100%;
    height: 100%;
    border: none;
    padding: 20px;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;

    ::-webkit-input-placeholder {
      /* Edge */
      color: #ffffff;
      opacity: 0.3;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ffffff;
      opacity: 0.3;
    }

    ::placeholder {
      color: #ffffff;
      opacity: 0.3;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 106px;
    height: 56px;
  }
`;

export const InvestBtn = styled(SecondaryGradientButton)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const InputBorder = styled(FlexStyle)`
  padding: 1px;
  border-radius: 6px;
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
