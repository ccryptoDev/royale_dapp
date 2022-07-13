import styled from 'styled-components';
import { Theme, SecondaryGradientButton } from '../../../../utils';

export const Table = styled.table`
  width: 100%;
  min-width: 490px;
  table-layout: fixed;
  background: #0a0f12;
  border-radius: ${Theme.compOutBorderRadius};
  color: ${Theme.whiteText};
  padding: 36px 65px 34px 77px;

  thead tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${Theme.inputTextBg};
  }

  th td {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1px;
  }

  th {
    padding-bottom: 25px;
  }

  td {
    border-top: 1px solid ${Theme.inputTextBg};
    padding: 28px 0;

    &:first-child {
      border-right: 1px solid ${Theme.inputTextBg};
    }
  }

  td + td {
    text-align: center;
  }
`;

export const CheckOutTier = styled(SecondaryGradientButton)`
  text-align: center;
  width: 200px;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0ch.01em;
`;
