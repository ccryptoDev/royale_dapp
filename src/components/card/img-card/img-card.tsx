import { ArrowRightWhite } from '../../../images';
import { ArrowRight } from './style';

import { CardContainer, CardTitle, SubTitle, CardDescription } from '../style';

import { Theme, ItemProps } from '../../../utils';

interface ImgCardTypeProps {
  item: ItemProps;
  type?: string;
}

const ImgCard = ({ item, type }: ImgCardTypeProps) => {
  return (
    <>
      <CardContainer
        type={type}
        bgColor={type === 'rarity' && Theme.cardBg}
        border={type === 'rarity' && '5px solid black'}
        borderRadius={type === 'rarity' && '12px'}
      >
        <img
          src={item.img}
          alt="tier primary"
          // @ts-ignore
          width={type === 'staking' && '140px'}
          // @ts-ignore
          height={type === 'staking' && '201px'}
        />
        <CardTitle
          textAlign="center"
          letterSpacing="0.1px"
          fontSize={type === 'rarity' && '24px'}
          lineHeight={type === 'rarity' && '32px'}
          marginTop={type === 'rarity' && '36px'}
        >
          {item.title}
        </CardTitle>
        <SubTitle
          letterSpacing="0.1px"
          fontSize={type === 'rarity' && '24px'}
          lineHeight={type === 'rarity' && '32px'}
          marginTop={type === 'rarity' && '24px'}
          bgColor={
            type === 'staking' &&
            'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 51.64deg, #FFFFFF 79.77deg, #000000 141.65deg, #FFFFFF 194.15deg, #000000 254.15deg, #FFFFFF 286.03deg, #000000 331.03deg, #FFFFFF 360deg), conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 51.64deg, #FFFFFF 79.77deg, #000000 141.65deg, #FFFFFF 194.15deg, #000000 254.15deg, #FFFFFF 286.03deg, #000000 331.03deg, #FFFFFF 360deg), radial-gradient(95% 95% at 36.4% 1.4%, #FFAF9B 0%, #FFE978 20.64%, rgba(255, 186, 255, 0.850701) 42.07%, #FFD5B7 62.26%, #FFFEE2 80.49%, #79A2F2 100%)'
          }
          textFillColor={type === 'staking' && 'transparent'}
        >
          {item.subTitle}
        </SubTitle>
        <CardDescription letterSpacing="0.1px">
          {item.description}
        </CardDescription>
      </CardContainer>
      {type === 'staking' && (
        <ArrowRight>
          <img
            className="arrow-right"
            src={ArrowRightWhite.default}
            alt="white arrow right"
          />
        </ArrowRight>
      )}
    </>
  );
};

export default ImgCard;
