import React, { useState } from 'react';
import { BorderSecond, TierProps } from '../../../utils';
import {
  TierContainer,
  TierTop,
  BlackBg,
  GrayBg,
  BtnDiscount,
  DiscountDetail,
  MarketPlace,
  TierDetail,
  TieDetailTop,
  Title,
  Description,
  TierDetailBottom,
  BottomDescription,
  BottomLists,
  TierBottom,
  Discounted,
  NonDiscounted,
  BtnContainer,
  BtnEle
} from './style';

import { Tier1, IDropDown, ComingSoon } from '../../../images';

interface TiersInfoPorps {
  tierInfo: TierProps;
  handleStake: Function;
  handleUnstake: Function;
}

const Tier = (props: TiersInfoPorps) => {
  const [tierDetail, setTierDetail] = useState(false);
  return (
    <TierContainer>
      <TierTop>
        <BorderSecond margin="0">
          <BlackBg>
            <BorderSecond padding="1px" margin="0" width="100%">
              <GrayBg>
                <img
                  className={
                    (props.tierInfo.name === 'Settler' ? 'inactive' : '') ||
                    (props.tierInfo.name === 'Merchant' ? 'inactive' : '')
                  }
                  src={props.tierInfo.img}
                  alt="tier 1"
                />
                {props.tierInfo.name === 'Settler' && (
                  <img
                    className="coming-soon"
                    src={ComingSoon.default}
                    alt="coming soon"
                  />
                )}
                {props.tierInfo.name === 'Merchant' && (
                  <img
                    className="coming-soon"
                    src={ComingSoon.default}
                    alt="coming soon"
                  />
                )}
                {/* <BtnDiscount>
									NFT Discount
								</BtnDiscount>
								{tierDetail &&
									<DiscountDetail>
										20% Discount<br />on&nbsp;
										<MarketPlace>
											Marketplace
										</MarketPlace>
									</DiscountDetail>
								} */}
              </GrayBg>
            </BorderSecond>
            <TierDetail>
              <TieDetailTop>
                <Title onClick={() => setTierDetail(!tierDetail)}>
                  <span>{props.tierInfo.name}</span>
                  <img
                    className={tierDetail ? 'active' : ''}
                    src={IDropDown.default}
                    alt="dropdown"
                  />
                </Title>
                <Description>
                  {props.tierInfo.amount} <span>ROYA</span>
                </Description>
              </TieDetailTop>
              {tierDetail && (
                <TierDetailBottom>
                  <BottomDescription>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard
                  </BottomDescription>
                  <BottomLists>
                    <p>* Privilige no 1</p>
                    <p>* Privilige no 2</p>
                    <p>* Privilige no 3</p>
                    <p>* Privilige no 4</p>
                  </BottomLists>
                </TierDetailBottom>
              )}
            </TierDetail>
          </BlackBg>
        </BorderSecond>
      </TierTop>
      <TierBottom>
        <BorderSecond>
          <BlackBg>
            <Discounted>
              <p>Discounted</p>
              <p>0.00</p>
            </Discounted>
          </BlackBg>
        </BorderSecond>
        <NonDiscounted>
          <p>Non-Discounted</p>
          <p>0.00</p>
        </NonDiscounted>
        <BorderSecond margin={'25px 0 0 0'}>
          <BlackBg padding={'21px 24px'}>
            <BtnContainer>
              <p>0.00</p>
              <BtnEle onClick={() => props.handleStake(props.tierInfo.name)}>
                Stake
              </BtnEle>
              <BtnEle onClick={() => props.handleUnstake(props.tierInfo.name)}>
                Unstake
              </BtnEle>
            </BtnContainer>
          </BlackBg>
        </BorderSecond>
      </TierBottom>
    </TierContainer>
  );
};

export default Tier;
