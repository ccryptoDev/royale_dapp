import styled from 'styled-components';
import { Theme } from '../../../../utils';

export const TvlContainer = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TvlTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TvlHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${Theme.linkColor};

  @media screen and (max-width: 935px) {
    font-size: 14px;
  }
`;

export const TvlValue = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${Theme.linkColor};
  text-align: center;
  margin-top: 8px;

  @media screen and (max-width: 935px) {
    font-size: 30px;
  }

  @media (max-width: 700px) {
    font-size: 22px;
  }
`;

export const SubHeader = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${Theme.textColorPrimary};
  margin-top: 8px;
`;

export const GlobalInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 90%;
    height: 90%;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalInfoBoxItem = styled.div`
  width: 152px;
  height: 120px;
  padding: 34px 22px;
  background-color: ${Theme.inputTextBg};
  margin-right: 24px;
  border-radius: ${Theme.componentBorderRadius};

  &:last-child {
    margin-right: 0 !important;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin-top: 12px;
    margin-right: 0;
  }
`;

export const InfoBoxTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${Theme.textColorPrimary};
`;

export const GlobalInfoBoxVal = styled.div`
  margin-top: 8px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${Theme.linkColor};
`;
