import { useState, useEffect, useRef } from 'react';
import { Dropdown } from '..';
import {
  HeaderWrapper,
  HeaderContainer,
  LinkContainers,
  Links,
  ConnectBtn,
  UserAddress,
  RightSideContent,
  EthBalance,
  EthBalanceText,
  RoyaBalance,
  Network,
  MiddleContainer,
  Defi,
  LinkText,
  Docs,
  MenuIconEl,
  DropdownWrapper,
  DropdownContainer,
  DropdownItem
} from './style';
import { useHistory, Link, useLocation } from 'react-router-dom';
import {
  fromRoya,
  renderTokenAmountText,
  StoreageKey,
  fromMroya,
  getConfig,
  getNetwork,
  getMainTokenSymbol,
  Networks,
  SocialLinks,
  Paths,
  PrimaryBorder,
  BorderPrimaryButton,
  BorderFirst,
  BorderSecond
} from '../../utils';
import { RoyaleLogo, IDropDown, CircleYellow, IMenu } from '../../images';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal';
import LoginModalContainer from '../login-modal';
import wallet from '../../utils/wallet';
import {
  getRoyaBalance,
  getEthBalance,
  getMroyaBalance
} from '../../logic/actions';

const Header = () => {
  const { walletConnected, userAddress, ethBalance, network, mRoyaBalance } =
    useSelector((state: any) => state.user);

  const { userRoyaBalance } = useSelector((state: any) => state.royaReserve);

  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const closeModal = () => {
    setShow(false);
  };

  const handleWalletConnect = async () => {
    if (walletConnected) {
      try {
        await wallet.disconnect();
        localStorage.removeItem(StoreageKey.walletType);
      } catch (e) {
        console.log('something went wrong in logout wallet ', e);
      }
    } else {
      setShow(true);
    }
  };

  const renderMroyaSwapLink = () => {
    switch (network) {
      case Networks.ropsten:
      case Networks.mainnet:
        return (
          <DropdownItem onClick={() => handleLink(Paths.convertMroya)}>
            mROYA
          </DropdownItem>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    if (walletConnected) {
      dispatch(getRoyaBalance(userAddress));
      dispatch(getEthBalance(userAddress));
      dispatch(getMroyaBalance(userAddress));
    }
  }, [walletConnected, dispatch, userAddress]);

  useEffect(() => {
    if (pathname.includes('staking-lots')) setStatus(1);
    else if (pathname.includes('roya-swap')) setStatus(2);
    else if (pathname.includes('whitepaper')) setStatus(3);
  }, [pathname]);

  const rendermRoyaBalance = () => {
    switch (network) {
      case Networks.mainnet:
      case Networks.ropsten:
        return (
          <RoyaBalance className="notranslate">
            {`${renderTokenAmountText(fromMroya(mRoyaBalance))} mROYA`}
          </RoyaBalance>
        );

      default:
        return null;
    }
  };

  const handleLink = (path: string) => {
    setStatus(0);
    history.push(path);
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <HeaderWrapper>
      <HeaderContainer walletConnected={walletConnected}>
        <LinkContainers>
          <Links active={false}>
            <a
              href={getConfig().iGamingOperator}
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <img
              onClick={() => handleLink(Paths.homepage)}
              src={RoyaleLogo.default}
              alt="Roya logo"
            />
          </Links>
        </LinkContainers>

        <MiddleContainer>
          <Defi onClick={() => setDropdown(!dropdown)}>
            <span>Defi</span>
            <img
              className={dropdown ? 'active' : ''}
              src={IDropDown.default}
              alt="dropdown"
            />
            {dropdown && (
              <DropdownWrapper ref={wrapperRef}>
                <BorderSecond>
                  <DropdownContainer>
                    <DropdownItem
                      onClick={() => handleLink(Paths.liquidityProvider)}
                    >
                      Liquidity Provider
                    </DropdownItem>
                    <DropdownItem onClick={() => handleLink(Paths.rptStaking)}>
                      Rpt Staking
                    </DropdownItem>
                    <DropdownItem onClick={() => handleLink(Paths.royaReserve)}>
                      Roya Reserve
                    </DropdownItem>
                    {renderMroyaSwapLink()}
                    <DropdownItem
                      onClick={() => handleLink(Paths.royaAnalytics)}
                    >
                      Network Stats
                    </DropdownItem>
                  </DropdownContainer>
                </BorderSecond>
              </DropdownWrapper>
            )}
          </Defi>

          <LinkText status={status === 1 && true}>
            {status === 1 && (
              <img src={CircleYellow.default} alt="select tab img" />
            )}
            <Link to={Paths.stakingLots}>Staking Lots</Link>
          </LinkText>
          <LinkText status={status === 2 && true}>
            {status === 2 && (
              <img src={CircleYellow.default} alt="select tab img" />
            )}
            <Link to={Paths.buySellRoya}>Swap</Link>
          </LinkText>
          <LinkText status={status === 3 && true}>
            {status === 3 && (
              <img src={CircleYellow.default} alt="select tab img" />
            )}
            <Link to={Paths.whitepaper}>Docs</Link>
          </LinkText>
        </MiddleContainer>

        <RightSideContent>
          {!!network && (
            <Network network={network}>{getNetwork(network)}</Network>
          )}
          {walletConnected && (
            <RoyaBalance className="notranslate">
              {`${
                !!userRoyaBalance &&
                renderTokenAmountText(fromRoya(userRoyaBalance))
              } ROYA`}
            </RoyaBalance>
          )}

          {rendermRoyaBalance()}
          {walletConnected && (
            <EthBalance>
              <EthBalanceText className="notranslate">
                {!!ethBalance &&
                  `${renderTokenAmountText(ethBalance)} ${getMainTokenSymbol(
                    network
                  )}`}
              </EthBalanceText>

              <UserAddress>
                {userAddress[0]}
                {userAddress[1]}
                {userAddress[2]}
                {userAddress[3]}
                {userAddress[4]}
                {userAddress[5]}
                ...
                {userAddress[userAddress.length - 4]}
                {userAddress[userAddress.length - 3]}
                {userAddress[userAddress.length - 2]}
                {userAddress[userAddress.length - 1]}
              </UserAddress>
            </EthBalance>
          )}
          <PrimaryBorder marginRight="32px">
            <BorderPrimaryButton>
              <Link to={Paths.submitGame}>Submit your Game</Link>
            </BorderPrimaryButton>
          </PrimaryBorder>
          <PrimaryBorder>
            <ConnectBtn
              onClick={handleWalletConnect}
              connected={walletConnected}
            >
              <span
                data-text={walletConnected ? 'Disconnect' : 'Connect Wallet'}
              >
                {walletConnected ? 'Disconnect' : 'Connect Wallet'}
              </span>
            </ConnectBtn>
          </PrimaryBorder>
          {/* <MenuIconEl>
						<img src={IMenu.default} alt="Menu icon" />
					</MenuIconEl> */}

          {/*
            <UserIconContainer connected={walletConnected}>
            <img src={QuestionCircle.default} alt="user icon" />
          </UserIconContainer>

            */}
        </RightSideContent>
      </HeaderContainer>
      <Modal show={show} closeModal={closeModal}>
        <LoginModalContainer closeModal={closeModal} />
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
