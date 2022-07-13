import React from 'react';
import { TokenHolderLayout } from '../../layouts';
import {
  GameYours,
  StakingTiers,
  TiersComparison,
  RoadMap,
  RaritiesNFT,
  OpenseaMarket,
  Investors,
  Partners,
  CrossChain,
  MeetTeam
} from './components';
import { MainImgs, HomeWrapper } from './style';

import {
  TopRightImg,
  LeftMiddleImg,
  RightMiddleImg,
  Settler,
  Merchant,
  Knight,
  Archon,
  Monarch,
  IChecked,
  CardQueen,
  CardKing
} from '../../images';

const Homepage = () => {
  const items = [
    {
      img: Settler.default,
      title: 'Settler',
      subTitle: '100 ROYA tokens',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: Merchant.default,
      title: 'Merchant',
      subTitle: '1000 ROYA tokens',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: Knight.default,
      title: 'Knight',
      subTitle: '10,000 ROYA tokens',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: Archon.default,
      title: 'Archon',
      subTitle: '100,000 ROYA tokens',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: Monarch.default,
      title: 'Monarch',
      subTitle: '1000,000 ROYA tokens',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];
  const tableTiers = [
    {
      name: 'Settler',
      amount: '100',
      pool: '15',
      maxInvestment: '1',
      royaRoom: ''
    },
    {
      name: 'Merchant',
      amount: '1,000',
      pool: '30',
      maxInvestment: '2',
      royaRoom: ''
    },
    {
      name: 'Knight',
      amount: '10,000',
      pool: '50',
      maxInvestment: '3',
      royaRoom: ''
    },
    {
      name: 'Archon',
      amount: '100,000',
      pool: 'Guaranteed',
      maxInvestment: '4',
      royaRoom: ''
    },
    {
      name: 'Monarch',
      amount: '1,000,000',
      pool: 'Guaranteed',
      maxInvestment: '5',
      royaRoom: IChecked.default
    }
  ];
  const mapItems = [
    {
      date: '2021 Q1',
      desc1: 'Royale Web App 3.0 Launch'
    },
    {
      date: '2021 Q2',
      desc1: 'Polygon App Launch'
    },
    {
      date: '2021 Q3',
      desc1: 'BSC App Launch',
      desc2: 'Web App Upgrade',
      desc3: 'First Gaming Company Liquidity Provision',
      desc4: 'First Distribution of Gaming',
      desc5: 'mROYA to ROYA setup'
    },
    {
      date: '2021 Q4',
      desc1: 'BSC App Launch',
      desc2: 'Web App Upgrade'
    },
    {
      date: '2021 Q2',
      desc1: 'Polygon App Launch'
    },
    {
      date: '2021 Q2',
      desc1: 'Polygon App Launch'
    }
  ];
  const rarities = [
    {
      img: CardQueen.default,
      title: 'QUEEN OF QUEENS NFT',
      subTitle: '2,800 ROYA discount on a 10,000 ROYA Queen Staking Lot'
    },
    {
      img: CardKing.default,
      title: 'KING OF KINGS NFT',
      subTitle: '2,800 ROYA discount on a 10,000 ROYA Queen Staking Lot'
    },
    {
      img: CardQueen.default,
      // title: "ROYALE FLUSH NFT",
      subTitle:
        '100,000 ROYA discount on a 1,000,000 ROYA Royale Flush Staking lot'
    }
  ];
  return (
    <TokenHolderLayout pageTitle="Homepage">
      <HomeWrapper>
        {/* <MainImgs>
          <img src={TopRightImg.default} alt="top right img" />
          <img src={LeftMiddleImg.default} alt="left middle img" />
          <img src={RightMiddleImg.default} alt="right middle img" />
        </MainImgs> */}
        <GameYours />
        <StakingTiers items={items} />
        <TiersComparison tableTiers={tableTiers} />
        <RoadMap mapItems={mapItems} />
        <CrossChain />
        {/* <RaritiesNFT items={rarities} /> */}
        {/* <OpenseaMarket /> */}
        <Investors />
        <Partners />
        <MeetTeam />
      </HomeWrapper>
    </TokenHolderLayout>
  );
};

export default Homepage;
