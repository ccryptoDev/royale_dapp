import { ChainContainer } from './style';

import { MainContainer, HeaderTitle } from '../style';

import { EtherIcon, PolygonIcon, BscIcon } from '../../../../images';

import {
  FlexColumnSpace,
  CircleBorder,
  CircleBlackBg
} from '../../../../utils';

const CrossChain = () => {
  return (
    <MainContainer width={'950px'} margin={'146px auto 121px'}>
      <HeaderTitle>
        <span>
          Cross-Chain
          <br />
          Compatiblility
        </span>
      </HeaderTitle>
      <ChainContainer>
        <FlexColumnSpace>
          <CircleBorder width="160px" height="160px">
            <CircleBlackBg>
              <CircleBorder padding="1px" width="100%" height="100%">
                <CircleBlackBg>
                  <img src={EtherIcon.default} alt="ether icon" />
                </CircleBlackBg>
              </CircleBorder>
            </CircleBlackBg>
          </CircleBorder>
          <p>Ethereum</p>
        </FlexColumnSpace>
        <FlexColumnSpace>
          <CircleBorder width="160px" height="160px">
            <CircleBlackBg>
              <CircleBorder padding="1px" width="100%" height="100%">
                <CircleBlackBg>
                  <img src={PolygonIcon.default} alt="ether icon" />
                </CircleBlackBg>
              </CircleBorder>
            </CircleBlackBg>
          </CircleBorder>
          <p>Polygon Network</p>
        </FlexColumnSpace>
        <FlexColumnSpace>
          <CircleBorder width="160px" height="160px">
            <CircleBlackBg>
              <CircleBorder padding="1px" width="100%" height="100%">
                <CircleBlackBg>
                  <img src={BscIcon.default} alt="ether icon" />
                </CircleBlackBg>
              </CircleBorder>
            </CircleBlackBg>
          </CircleBorder>
          <p>
            Binance Smart
            <br />
            Chain BSC
          </p>
        </FlexColumnSpace>
      </ChainContainer>
    </MainContainer>
  );
};

export default CrossChain;
