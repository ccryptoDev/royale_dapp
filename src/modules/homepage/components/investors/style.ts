import styled from 'styled-components';
import { Theme } from '../../../../utils';

export const InvestorContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 100px;
    height: 100px;
  }

  & > div {
    &:nth-child(3) {
      img {
        width: 150px;
      }
    }
  }

  &:last-child {
    &:nth-child(2) {
      img {
        width: 150px;
      }
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconText = styled.div`
  margin-top: 12px;
  color: ${Theme.whiteText};
  text-align: center;
`;
