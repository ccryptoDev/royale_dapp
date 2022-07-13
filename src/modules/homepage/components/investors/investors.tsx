import { InvestorContainer, IconContainer, IconText } from './style';

import { MainContainer, HeaderTitle } from '../style';

import {
  IMagnus,
  ITwinApex,
  IAlpabit,
  IMarshland,
  IAU21,
  ITGroup,
  IVendetta,
  IKyros
} from '../../../../images';

import { FlexColumnSpace } from '../../../../utils';

const Investors = () => {
  return (
    <MainContainer margin={'70px auto'} width={'1200px'}>
      <HeaderTitle>
        <span>Investors</span>
      </HeaderTitle>
      <FlexColumnSpace>
        <InvestorContainer>
          {/* <IconContainer>
						<img src={Investor1.default} alt="investor 1" />
						<IconText>
							MIMIR
						</IconText>
					</IconContainer> */}
          <IconContainer>
            <img src={IMagnus.default} alt="investor 2" />
            <IconText>Magnus Capital</IconText>
          </IconContainer>
          <IconContainer>
            <img src={ITwinApex.default} alt="investor 3" />
            <IconText>TWIN APEX CAPITAL</IconText>
          </IconContainer>
          <IconContainer>
            <img src={IAlpabit.default} alt="investor 4" />
            <IconText>ALPHABIT</IconText>
          </IconContainer>
          <IconContainer>
            <img src={IMarshland.default} alt="investor 5" />
            <IconText>MARSHLAND CAPITAL</IconText>
          </IconContainer>
        </InvestorContainer>
        <InvestorContainer>
          <IconContainer>
            <img src={IAU21.default} alt="investor 6" />
            <IconText>AU21 CAPITAL</IconText>
          </IconContainer>
          <IconContainer>
            <img src={ITGroup.default} alt="investor 7" />
            <IconText>TG GROUP</IconText>
          </IconContainer>
          <IconContainer>
            <img src={IVendetta.default} alt="investor 8" />
            <IconText>VENDETTA CAPITAL</IconText>
          </IconContainer>
          <IconContainer>
            <img src={IKyros.default} alt="investor 9" />
            <IconText>KYROS VENTURES</IconText>
          </IconContainer>
        </InvestorContainer>
      </FlexColumnSpace>
    </MainContainer>
  );
};

export default Investors;
