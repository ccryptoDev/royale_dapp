import styled from 'styled-components';
import { Theme } from '../../../utils';

interface HeaderTextProps {
  textAlign?: string;
  margin?: string;
  maxWidth?: string;
  width?: string;
}

export const MainContainer = styled.div<HeaderTextProps>`
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  max-width: ${(props) => props.maxWidth && props.maxWidth};

  .card-rarity {
    margin-right: 21px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderTitle = styled.div<HeaderTextProps>`
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  letter-spacing: 0.01em;
  color: ${Theme.whiteText};

  span {
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

  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 40px;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: ${Theme.grayText};
  text-align: center;

  span {
    font-weight: bold;
  }
`;

export const InputContainer = styled.div`
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  border-radius: 16px;
  width: 661px;
  position: relative;

  @media screen and (max-width: 780px) {
    width: 100%;
    border-radius: 12px;
  }

  img {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 38%;
    left: 32px;
  }

  input {
    padding: 32px 64px;
    height: 48px;
    width: 100%;
    background: ${Theme.inputTextBg};
    border-radius: 12px;
    border: 0;
    color: ${Theme.whiteText};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;

    &::placeholder {
      opacity: ${Theme.inputTextOpacity};
    }
  }
`;
