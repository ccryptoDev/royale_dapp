import {
  TeamConatiner,
  TemaMember,
  BorderLightGray,
  BorderLightBlue,
  BorderDarkGray,
  MemberDetail,
  Ceo,
  Name,
  Description,
  MemberSocialLinks
} from './style';

import { MainContainer, HeaderTitle } from '../style';

import {
  PersonMarvin,
  PersonGio,
  PersonDan,
  PersonAileen,
  PersonMatt,
  PersonPiao,
  PersonSofia,
  PersonOlga,
  LinkedinIcon,
  TwitterIcon
} from '../../../../images';

import {} from '../../../../utils';

const MeetTeam = () => {
  return (
    <MainContainer margin={'121px auto'} width={'1464px'}>
      <HeaderTitle>
        <span>Meet Our Team:</span>
      </HeaderTitle>
      <TeamConatiner>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonGio.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Gio</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonDan.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Dan</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonSofia.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Sofia</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonMatt.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Matt</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
      </TeamConatiner>
      <TeamConatiner>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonMarvin.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Marvin</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonOlga.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Olga</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonPiao.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Piao</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
        <TemaMember>
          <BorderLightGray>
            <BorderLightBlue>
              <BorderDarkGray>
                <img src={PersonAileen.default} alt="person 1" />
              </BorderDarkGray>
            </BorderLightBlue>
          </BorderLightGray>
          <MemberDetail>
            <Ceo>CEO</Ceo>
            <Name>Aileen</Name>
            <Description>
              Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
              vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo id,
              tincidunt non ligula. Nullam tempus est in vehicula aliquam.
            </Description>
            <MemberSocialLinks>
              <img src={LinkedinIcon.default} alt="linkedin icon" />
              <img src={TwitterIcon.default} alt="twitter icon" />
            </MemberSocialLinks>
          </MemberDetail>
        </TemaMember>
      </TeamConatiner>
    </MainContainer>
  );
};

export default MeetTeam;
