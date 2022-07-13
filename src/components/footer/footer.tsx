import {
  FooterContainer,
  FooterTitle,
  IconContainer,
  Icon,
  LinkText
} from './style';
import {
  TwitterIcon,
  TelegramIcon,
  MediumIcon,
  CoingeckoIcon,
  IBg,
  ICoinMarketCap
} from '../../images';
import { SocialLinks } from '../../utils';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Follow us on:</FooterTitle>
      <IconContainer>
        <Icon>
          <a
            href={SocialLinks.telegramAnnouncement}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon.default} alt="telegram" />

            <LinkText>ann</LinkText>
          </a>
        </Icon>
        <Icon>
          <a
            href={SocialLinks.telegramOfficial}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon.default} alt="telegram" />

            <LinkText>official</LinkText>
          </a>
        </Icon>
        <Icon>
          <a
            href={SocialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MediumIcon.default} alt="medium" />

            <LinkText>medium</LinkText>
          </a>
        </Icon>
        <Icon>
          <a
            href={SocialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon.default} alt="twitter" />

            <LinkText>twitter</LinkText>
          </a>
        </Icon>
        <Icon>
          <a
            href={SocialLinks.coinGecko}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CoingeckoIcon.default} alt="coingecko icon" />

            <LinkText>CoinGecko</LinkText>
          </a>
        </Icon>
        <Icon>
          <a
            href={SocialLinks.coinMarketCap}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IBg.default} alt="coinmarketcap icon" />
            <img src={ICoinMarketCap.default} alt="coinmarketcap icon" />

            <LinkText>CoinMarketCap</LinkText>
          </a>
        </Icon>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
