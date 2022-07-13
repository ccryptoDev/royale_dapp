import { Table, CheckOutTier } from './style';

import { HeaderTitle, MainContainer } from '../style';

import {} from '../../../../images';

import {
  BorderSecond,
  TableTiersProps,
  TableTierProps,
  FlexRowCenter
} from '../../../../utils';

const TiersComparison = ({ tableTiers }: TableTiersProps) => {
  return (
    <MainContainer maxWidth="1209px" margin="90px auto">
      <HeaderTitle>
        <span>tiers comparison</span>
      </HeaderTitle>
      <BorderSecond marginTop="48px !important">
        <Table>
          <thead>
            <th></th>
            <th>Amount in ROYA</th>
            <th>% of IDO Pool</th>
            <th>
              Maximum
              <br />
              Investment(% of
              <br /> total IDO raise)
            </th>
            <th>ROYA Room</th>
          </thead>
          <tbody>
            {tableTiers.map((tableTier: TableTierProps, index) => (
              <tr key={index}>
                <td>{tableTier.name}</td>
                <td>{tableTier.amount}</td>
                <td>{tableTier.pool}</td>
                <td>{tableTier.maxInvestment}</td>
                <td>
                  {tableTier.royaRoom && (
                    <img src={tableTier.royaRoom} alt="checked icon" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </BorderSecond>
      <FlexRowCenter marginTop={'63px'}>
        <CheckOutTier>Check out Tiers</CheckOutTier>
      </FlexRowCenter>
    </MainContainer>
  );
};

export default TiersComparison;
