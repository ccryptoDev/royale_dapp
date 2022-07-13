import styled from 'styled-components';
import {
  Theme,
  SecondaryGradientButton,
  Networks,
  Color,
  PrimaryText
} from '../../utils';

interface WalletProps {
  walletConnected: boolean;
}

export const HeaderWrapper = styled.div`
  background-color: ${Theme.headerBackground};
  padding: 34px 0;
  /* height: 72px; */
  position: fixed;
  top: 0;
  width: 100vw;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const HeaderContainer = styled.div<WalletProps>`
  margin: 0 auto;
  width: 98%;
  /* max-width: 1920px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) =>
      props.walletConnected ? '1460px' : '1000px'}) {
    flex-direction: column;
    align-items: center;

    & > div:nth-child(2) {
      margin-top: 12px;
    }

    & > div:last-child {
      margin-top: 12px;
    }
  }
`;

interface LinkProps {
  active: boolean;
}

export const Links = styled.div<LinkProps>`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.textColorPrimary};
  padding-top: 7px;
  padding-bottom: 7px;
  border-bottom: 2px solid
    ${(props) => (props.active ? Theme.linkColor : 'transparent')};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 300ms all;

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${Theme.textColorPrimary};
    text-decoration: none;
  }
`;

export const LinkContainers = styled.div`
  display: flex;
  align-items: center;

  ${Links}:not(:first-child) {
    margin-left: 40px;
  }

  @media screen and (max-width: 1100px) {
    /* display: none; */
    margin: 20px 0 0 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin: 0;

    ${Links} {
      margin: 15px 0 0 0;
    }

    ${Links}:not(:first-child) {
      margin-left: 0px;
    }
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 568px) {
    flex-direction: column;

    & > div {
      margin: 0;
      margin-top: 8px;
    }

    & > a {
      margin: 0;
      margin-top: 8px;
    }
  }
`;

export const Defi = styled.div`
  display: flex;
  align-items: center;
  margin-right: 58px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: ${Theme.whiteText};
  text-decoration: none;
  position: relative;

  img {
    margin-left: 8px;

    &.active {
      transform: rotate(180deg);
    }
  }
`;

export const DropdownWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  text-align: left;
  background: ${Theme.primaryPageBg};
  border-radius: 12px;
  width: 200px;
`;

export const DropdownContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${Theme.primaryPageBg};
  border-radius: 12px;
  padding: 10px;

  a {
    color: ${Theme.whiteText};
    text-decoration: none;

    &:hover {
      color: ${Theme.grayText};
    }
  }
`;

export const DropdownItem = styled.div``;

interface ActiveStatus {
  status?: boolean;
}

export const LinkText = styled.div<ActiveStatus>`
  margin-right: 58px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${(props) => props.status && '1px solid white'};
  display: flex;
  align-items: center;

  a {
    color: ${Theme.whiteText};
    text-decoration: none;
  }

  img {
    margin-right: 8px;
  }
`;

export const Docs = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: ${Theme.whiteText};
  text-decoration: none;
`;

interface ConnectBtnProps {
  connected: boolean;
}

export const RightSideContent = styled.div`
  /* margin-left: auto; */
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;

    & > div {
      margin: 0;
      margin-top: 8px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ConnectBtn = styled(SecondaryGradientButton)<ConnectBtnProps>`
  width: ${(props) => (props.connected ? '156px' : '170px')};
  height: 40px;
  background: linear-gradient(189deg, #2c2f35 6.83%, #0b1014 97.87%);
  border-radius: ${Theme.componentBorderRadius};
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.whiteText};
`;

interface UserIconProps {
  connected: boolean;
}

export const UserIconContainer = styled.div<UserIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.connected ? '18px' : '24px')};

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

export const UserAddress = styled.div`
  background: rgba(45, 210, 255, 0.1);
  border-left: 1px solid ${Theme.linkColor};
  box-sizing: border-box;
  border-radius: ${Theme.elementBorderRadius};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.linkColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
`;

export const EthBalance = styled(PrimaryText)`
  margin: 0 24px;
  /* width: 100px; */
  color: ${Theme.buttonPrimaryColor};
  font-size: 14px;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

export const EthBalanceText = styled.div`
  margin: 0 10px 0 24px;
`;

export const RoyaBalance = styled(PrimaryText)`
  width: 100px;
  color: ${Theme.buttonPrimaryColor};
  font-size: 14px;
  margin-left: 24px;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

interface NetworkProps {
  network: string;
}

const setBackgroundColor = (network: string): string => {
  switch (network) {
    case Networks.ropsten:
    case Networks.mainnet:
      return Color.ethereumColor;

    case Networks.bscTestnet:
    case Networks.bscMainnet:
      return Color.binanceColor;

    case Networks.maticTestnet:
    case Networks.maticMainnet:
      return Color.maticColor;

    default:
      return Theme.buttonPrimaryBg;
  }
};

const setFontColor = (network: string): string => {
  switch (network) {
    case Networks.ropsten:
    case Networks.mainnet:
      return Theme.textColorPrimary;

    case Networks.bscTestnet:
    case Networks.bscMainnet:
      return Theme.buttonPrimaryColor;

    case Networks.maticTestnet:
    case Networks.maticMainnet:
      return Theme.textColorPrimary;

    default:
      return Theme.buttonPrimaryColor;
  }
};

export const Network = styled.div<NetworkProps>`
  height: 40px;
  background: ${(props) => setBackgroundColor(props.network)};
  color: ${(props) => setFontColor(props.network)};
  font-weight: 600;
  font-size: 12px;
  border-radius: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms all;
`;

export const MenuIconEl = styled.div`
  margin-left: 32px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
