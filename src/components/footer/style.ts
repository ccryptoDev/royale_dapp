import styled from 'styled-components';
import { Theme } from '../../utils';

export const FooterContainer = styled.div`
  color: white;
  padding: 50px 0;
  background-color: ${Theme.primaryPageBg};
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const FooterTitle = styled.p`
  padding-top: 60px;
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
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: 0.01em;

  @media screen and (max-width: 780px) {
    text-align: center;
    font-size: 30px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: center;
`;

export const Icon = styled.div`
  margin: 0 20px;
  transition: 300ms all;
  position: relative;

  &:last-child {
    margin-left: 0;
    margin-right: 0;
  }

  img + img {
    position: absolute;
    top: 20%;
    left: 40%;
    z-index: 2;
    height: 27px;
    width: 27px;
  }
  @media (max-width: 600px) {
    margin: 20px 12px;
  }

  :hover {
    transform: translateY(-10px);
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  img {
    width: 75px;

    @media (max-width: 600px) {
      width: 40px;
    }
  }
`;

export const LinkText = styled.div`
  margin-top: 10px;
  color: ${Theme.linkColor};
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
`;
