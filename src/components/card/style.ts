import styled from 'styled-components';
import { CustomStyle, Theme, CustomFlex, MarginPadding } from '../../utils';

interface CustomStyleProps {
  type?: string;
  bgColor?: any;
  border?: any;
  borderRadius?: any;
  textAlign?: any;
  letterSpacing?: any;
  fontSize?: any;
  lineHeight?: any;
  marginTop?: any;
  textFillColor?: any;
}

export const CardContainer = styled(CustomStyle)<CustomStyleProps>`
  width: ${(props) => props.type === 'rarity' && '410px'};
  height: ${(props) => props.type === 'rarity' && '690px'};

  & > img {
    &:hover {
      /* transform: ${(props) =>
        props.type === 'staking' && 'scale(1.2) translateY(-13%)'}; */
      transition: 300ms all;
    }
  }
`;

export const CardTitle = styled(MarginPadding)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '40px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
`;

export const SubTitle = styled(MarginPadding)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '40px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
  background: ${(props) => props.bgColor && props.bgColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) =>
    props.textFillColor && props.textFillColor};
  text-transform: capitalize;
  background-blend-mode: screen, difference, normal;
  mix-blend-mode: normal;
`;

export const CardDescription = styled(CustomFlex)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '16px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
  opacity: ${(props) => (props.opacity ? props.opacity : '0.5')};
  height: ${(props) => props.height && props.height};

  p {
    color: ${Theme.whiteText};
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
