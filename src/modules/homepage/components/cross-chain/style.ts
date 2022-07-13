import styled from 'styled-components';

export const ChainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 84px;

  p {
    padding-top: 40px;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  & > div {
    &:last-child {
      margin-top: 37px;
    }
  }
`;
