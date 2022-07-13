import styled from 'styled-components';
import { Theme, SecondaryGradientButton } from '../../utils';

export const BuySellContainer = styled.div`
  max-width: 1032px;
  margin: 10% auto;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const PrimaryHeader = styled.div`
  margin-top: 32px;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: ${Theme.linkColor};
`;

export const Text = styled.div`
  margin-top: 13px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${Theme.textColorPrimary};
  margin-bottom: 24px;
`;

export const Border = styled.div`
  background-image: conic-gradient(
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
  border: 0;
  margin: 20px auto;
  position: relative;
  padding: 1px;
  border-radius: 10px;
  width: 594px;

  @media screen and (max-width: 594px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

export const Uniswap = styled.iframe`
  border: 0;
  display: block;
  border-radius: 10px;
  max-width: 592px;
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const GoToBtn = styled(SecondaryGradientButton)`
  height: 40px;
  padding: 8px 12px;
`;
