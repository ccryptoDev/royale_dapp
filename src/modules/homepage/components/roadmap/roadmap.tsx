import {} from './style';

import { HeaderTitle, MainContainer } from '../style';

import { CardContainer, CardTitle, CardDescription } from '../../style';

import {} from '../../../../images';

import {
  BorderFirst,
  BorderSecond,
  RoadmapsProps,
  RoadmapProps,
  FlexRowSpace
} from '../../../../utils';

const RoadMap = ({ mapItems }: RoadmapsProps) => {
  return (
    <MainContainer width="100%" margin="333px 0">
      <HeaderTitle>
        <span>Roadmap</span>
      </HeaderTitle>
      <FlexRowSpace>
        {mapItems.map((mapItem: RoadmapProps, index: number) => (
          <BorderFirst key={index} width="214px">
            <BorderSecond width="100%">
              <CardContainer
                bgColor="black"
                borderRadius="12px"
                padding="10px 12px"
              >
                <CardTitle width={'100%'} height={'100%'}>
                  {mapItem.date}
                </CardTitle>
                <CardDescription
                  fontSize={'16px'}
                  lineHeight={'24px'}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  height={mapItem.desc5 ? '100%' : '80%'}
                >
                  {mapItem.desc1 && <p>{mapItem.desc1}</p>}
                  {mapItem.desc2 && <p>{mapItem.desc2}</p>}
                  {mapItem.desc3 && <p>{mapItem.desc3}</p>}
                  {mapItem.desc4 && <p>{mapItem.desc4}</p>}
                  {mapItem.desc5 && <p>{mapItem.desc5}</p>}
                </CardDescription>
              </CardContainer>
            </BorderSecond>
          </BorderFirst>
        ))}
      </FlexRowSpace>
    </MainContainer>
  );
};

export default RoadMap;
