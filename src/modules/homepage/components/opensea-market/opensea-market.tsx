import { OpenseaContainer, BuyButton } from './style';

import { FlexColumn } from '../../../../utils';

import { MainContainer, HeaderTitle } from '../style';

import { OpenSeaIcon, RarityNft } from '../../../../images';

const OpenseaMarket = () => {
  return (
    <MainContainer width="1570px" margin="178px auto">
      <OpenseaContainer>
        <FlexColumn>
          <img src={OpenSeaIcon.default} alt="ship icon" />
          <HeaderTitle textAlign="left">
            <span>Royale Rarities NFTs</span>
          </HeaderTitle>
          <p>are now available on OpenSea</p>
          {/* <BuyButton>Buy now!</BuyButton> */}
        </FlexColumn>
        <img src={RarityNft.default} alt="rarity nft img" />
      </OpenseaContainer>
    </MainContainer>
  );
};

export default OpenseaMarket;
