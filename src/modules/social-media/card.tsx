import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';
import { TokenHolderLayout } from '../../layouts';
import moment from 'moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TopRightImg,
  RightBottomImg,
  TwitterIcon,
  InstagramIcon,
  TitokIcon,
  LikeIcon,
  CommentIcon,
  ArrowCircleLeft,
  ArrowCircleRight,
  ISteam,
  IBg
} from '../../images';

import {
  MainImgs,
  MainWrapper,
  MainTitle,
  SubTitle,
  MainContainer,
  BorderFirst,
  BorderSecond,
  MainBg,
  IDOMainBg,
  Container,
  Tabs,
  Tab,
  MainDetails,
  IDOMainDetails,
  HashTags,
  HashTag,
  ProgressDetail,
  Target,
  Remaining,
  SocialDetail,
  SocialBg,
  Followers,
  SocialTotal,
  Likes,
  Comments,
  IDO,
  IDOProgress,
  PrimaryBorder,
  Status,
  OrionText,
  AmountText,
  ColorText,
  CustomBorder,
  CountDownContainer,
  SocialBtns,
  LearnMoreBtn,
  InvestContainer,
  InvestText,
  InvestInput,
  InvestBtn,
  InvestInputContainer,
  InputBorder
} from './style';

import { WarningText } from '../../components/style';

import { userEmail, userPassword, SocialCommtracks } from '../../utils';
import { HeaderTitle } from '../homepage/components/style';
import { Loader, Modal } from '../../components';
import { mentionlyticsApi, getPoolAddrs, getSwap } from '../../logic/actions';

interface Props {
  item: itemProps;
}

interface itemProps {
  time: string;
  address: string;
}

const Card = ({ item }: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [amount, setAmount] = useState('0');
  const [remaining, setRemaining] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const { userAddress, walletConnected, network } = useSelector(
    (state: any) => state.user
  );

  const { getSwapData, swapErrMessage } = useSelector(
    (state: any) => state.getSwapData
  );

  const formatDays = days.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  const formatHours = hours.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  const formatMins = minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  const formatSecs = seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  const formatNextHarvest = `${formatDays}d : ${formatHours}h : ${formatMins}m : ${formatSecs}s`;

  useEffect(() => {
    setShowModal(true);
  }, [swapErrMessage]);

  useEffect(() => {
    const setTimeCounter = () => {
      console.log('time start');
      const countDown = moment().diff(parseInt(item.time) * 1000, 'seconds');
      const delta = Math.abs(countDown);
	  setRemaining(delta);
      if (delta > 0) {
        const d = Math.floor(delta / (3600 * 24))
          .toString()
          .padStart(2, '0');
        const h = Math.floor((delta % (3600 * 24)) / 3600)
          .toString()
          .padStart(2, '0');
        const m = Math.floor((delta % 3600) / 60)
          .toString()
          .padStart(2, '0');
        const s = Math.floor(delta % 60)
          .toString()
          .padStart(2, '0');
        const numDays = Number(d);
        const numHours = Number(h);
        const nuumMins = Number(m);
        const numSecs = Number(s);

        setDays(numDays);
        setHours(numHours);
        setMinutes(nuumMins);
        setSeconds(numSecs);
      }
    };
    if (item.time) {
      setTimeCounter();
    }
  }, [item.time]);

  useEffect(() => {
    let myInterval: any;
    if (item.time) {
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              if (days === 0) {
                console.log('finished');
                clearInterval(myInterval);
              } else {
                setDays(days - 1);
                setHours(24);
                setMinutes(59);
                setSeconds(59);
              }
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleSwap = (poolContract: string) => {
    console.log('amount', amount);
    if (walletConnected && amount && amount.length > 0) {
      dispatch(getSwap(userAddress, amount, poolContract));
    } else {
      setShowModal(true);
    }
  };

  return (
    <BorderFirst>
      <BorderSecond>
        <IDOMainBg>
          <IDO>
            <PrimaryBorder>
              <BorderFirst width={'100%'} height={'100%'} padding={'1px'}>
                <Status>{(remaining > 0) ? 'Live' : 'Completed'}</Status>
              </BorderFirst>
            </PrimaryBorder>
            <OrionText>OrionX Money</OrionText>
            <AmountText>
              <ColorText>
                {/* Own The Game<br /> */}
                <span>100.000</span>
                <span>&nbsp;/&nbsp;100.000</span>
              </ColorText>
            </AmountText>
            <IDOProgress>
              <ProgressBar height={'10px'} completed={100} />
            </IDOProgress>
			{ remaining > 0 &&
				<CustomBorder>
					<CountDownContainer>
					{formatNextHarvest}
					<div></div>
					</CountDownContainer>
				</CustomBorder>
			}
          </IDO>

          <SocialBtns>
            <img src={TwitterIcon.default} alt="twitter icon" />
            <img src={InstagramIcon.default} alt="instagram icon" />
            <span>
              <img src={IBg.default} alt="icon bg" />
              <img src={ISteam.default} alt="steam icon" />
            </span>
          </SocialBtns>

          <LearnMoreBtn>Learn More</LearnMoreBtn>

          <InvestContainer>
            <InvestText>Invest</InvestText>
            <InvestInputContainer>
              <InputBorder>
                <InvestInput>
                  <input
                    type="text"
                    placeholder="Enter the sum you want to invest in this project"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <InvestBtn onClick={() => handleSwap(item.address)}>
                    {swapErrMessage ? 'Invest' : <Loader />}
                  </InvestBtn>
                </InvestInput>
              </InputBorder>
            </InvestInputContainer>
          </InvestContainer>
        </IDOMainBg>
      </BorderSecond>
    </BorderFirst>
  );
};

export default Card;
