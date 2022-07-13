import styled from 'styled-components';
// import { Theme } from "../../../../utils";

export const TeamConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

export const TemaMember = styled.div`
  width: 351px;
`;

export const BorderLightGray = styled.div``;

export const BorderLightBlue = styled.div``;

export const BorderDarkGray = styled.div`
  img {
    width: 100%;

    &:hover {
      transform: scale(1.1) translateY(-13%);
      transition: 300ms all;
    }
  }
`;

export const MemberDetail = styled.div`
  padding: 26px 10px 0 26px;
`;

export const Ceo = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #74e1ed;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.6;
`;

export const MemberSocialLinks = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-right: 14px;
    transition: all 300ms ease 0s;

    &:hover {
      transform: translateY(-10px);
    }
  }
`;
