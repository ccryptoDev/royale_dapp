import styled from 'styled-components';
import { Theme } from '../../../../utils';

export const PartnerContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 150px;
    height: 100px;
  }

  &:first-child {
    div:first-child {
      img {
        width: 100px;
      }
    }
    div:nth-child(4) {
      img {
        width: 200px;
      }
    }
  }

  &:nth-child(2) {
    div:nth-child(2) {
      img {
        width: 100px;
      }
    }
    div:nth-child(3) {
      img {
        width: 200px;
      }
    }
    div:nth-child(4) {
      img {
        width: 200px;
      }
    }
  }

  &:nth-child(3) {
    div:nth-child(3) {
      img {
        width: 100px;
      }
    }
    div:nth-child(4) {
      img {
        width: 200px;
      }
    }
  }

  &:last-child {
    div:nth-child(2) {
      img {
        width: 100px;
      }
    }
    div:nth-child(3) {
      img {
        width: 100px;
      }
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconText = styled.div`
  margin-top: 12px;
  color: ${Theme.whiteText};
  text-align: center;
  text-transform: uppercase;
`;
