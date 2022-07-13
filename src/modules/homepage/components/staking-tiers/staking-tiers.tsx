import { ImgCard } from '../../../../components/card';

import {} from './style';

import { HeaderTitle, MainContainer } from '../style';

import {} from '../../../../images';

import { ItemsProps, ItemProps, FlexRowCenter } from '../../../../utils';

const StakingTiers = ({ items }: ItemsProps) => {
  return (
    <MainContainer margin={'90px auto'} maxWidth={'1206px'}>
      <HeaderTitle>
        <span>Staking Tiers</span>
      </HeaderTitle>
      <FlexRowCenter marginTop={'63px'}>
        {items.map((item: ItemProps, index: number) => (
          <ImgCard key={index} item={item} type={'staking'} />
        ))}
      </FlexRowCenter>
    </MainContainer>
  );
};

export default StakingTiers;
