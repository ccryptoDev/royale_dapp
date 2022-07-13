import { PartnerContainer, IconContainer, IconText } from './style';

import { MainContainer, HeaderTitle } from '../style';

import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
  Partner10,
  Partner11,
  Partner12,
  Partner13,
  Partner14,
  Partner15,
  Partner16,
  Partner17,
  Partner18
} from '../../../../images';

import { FlexColumnSpace } from '../../../../utils';

const Partners = () => {
  return (
    <MainContainer margin={'70px auto'} width={'1200px'}>
      <HeaderTitle>
        <span>Partners</span>
      </HeaderTitle>
      <FlexColumnSpace>
        <PartnerContainer>
          <IconContainer>
            <img src={Partner1.default} alt="investor 1" />
            <IconText>Polygon</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner2.default} alt="investor 2" />
            <IconText>Polkastarter</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner3.default} alt="investor 3" />
            <IconText>Mantra Dao</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner4.default} alt="investor 4" />
            <IconText>Defi 11</IconText>
          </IconContainer>
        </PartnerContainer>
        <PartnerContainer>
          <IconContainer>
            <img src={Partner5.default} alt="investor 5" />
            <IconText>Boson Protocol</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner6.default} alt="investor 6" />
            <IconText>KYLIN</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner7.default} alt="investor 7" />
            <IconText>Sheesha Finance</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner8.default} alt="investor 8" />
            <IconText>Peck Shield</IconText>
          </IconContainer>
        </PartnerContainer>
        <PartnerContainer>
          <IconContainer>
            <img src={Partner9.default} alt="investor 5" />
            <IconText>Dfyn</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner10.default} alt="investor 6" />
            <IconText>BRIDGE CAPITAL</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner11.default} alt="investor 7" />
            <IconText>PLAYCENT</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner12.default} alt="investor 8" />
            <IconText>Spider DAO</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner13.default} alt="investor 9" />
            <IconText>API3</IconText>
          </IconContainer>
        </PartnerContainer>
        <PartnerContainer>
          <IconContainer>
            <img src={Partner14.default} alt="investor 5" />
            <IconText>Dafi</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner15.default} alt="investor 6" />
            <IconText>Cyberfi</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner16.default} alt="investor 7" />
            <IconText>Magnus Capital</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner17.default} alt="investor 8" />
            <IconText>Bet Protocol</IconText>
          </IconContainer>
          <IconContainer>
            <img src={Partner18.default} alt="investor 9" />
            <IconText>MIMIR</IconText>
          </IconContainer>
        </PartnerContainer>
      </FlexColumnSpace>
    </MainContainer>
  );
};

export default Partners;
