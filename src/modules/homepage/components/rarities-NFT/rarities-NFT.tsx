import { ImgCard } from '../../../../components/card';

import { HeaderTitle, SubTitle, MainContainer } from '../style';

import {} from '../../../../images';

import {
  ItemsProps,
  FlexRowCenter,
  BorderFirst,
  BorderSecond
} from '../../../../utils';

const RaritiesNFT = ({ items }: ItemsProps) => {
  return (
    <MainContainer width="100%" margin="auto">
      <HeaderTitle>
        <span>Royale Rarities NFTS</span>
      </HeaderTitle>
      <SubTitle>
        The Royale Rarity Collection enables discounts to Staking Lots on
        <br />
        the Royale App.
      </SubTitle>
      <FlexRowCenter marginTop="55px">
        {items.map((item, index) => (
          <BorderFirst className="card-rarity" key={index}>
            <BorderSecond>
              <ImgCard item={item} key={index} type={'rarity'} />
            </BorderSecond>
          </BorderFirst>
        ))}
      </FlexRowCenter>
    </MainContainer>
  );
};

export default RaritiesNFT;
