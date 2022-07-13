import styled from 'styled-components';
import { Theme, SecondaryGradientButton } from '../../../../utils';

export const OpenseaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    &:first-child {
      width: 106px;
      height: 106px;
      margin-bottom: 22px;
    }
    &:last-child {
      width: 826px;
      height: 491px;
    }
  }

  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 72px;
    letter-spacing: 0.01em;
    color: ${Theme.whiteText};
  }
`;

export const BuyButton = styled(SecondaryGradientButton)`
  width: 225px;
  height: 58px;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;
