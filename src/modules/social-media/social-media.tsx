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
import { mentionlyticsApi, getPoolAddrs } from '../../logic/actions';

import Card from './card';

const MainContent = () => {
  const [tabStatus, setTabStatus] = useState(2);
  const [hashTagStatus, setHashTagStatus] = useState(1);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleTagStatus = async (commtracks: string) => {
    if (commtracks === SocialCommtracks.kawaiicats) setHashTagStatus(3);
    if (commtracks === SocialCommtracks.testingXRoyale) setHashTagStatus(1);
    if (commtracks === SocialCommtracks.staratlas) setHashTagStatus(2);

    if (commtracks) dispatch(mentionlyticsApi(commtracks));
  };

  const { engagment, mentions, reach, successMsgType } = useSelector(
    (state: any) => state.socialMedia
  );

  const { userAddress, walletConnected, network } = useSelector(
    (state: any) => state.user
  );

  const { data, errMessage } = useSelector(
    (state: any) => state.getPoolContracts
  );

  console.log('data >>>>>>>>>', data);

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

  const timeVal = '19372';

  useEffect(() => {
    setShowModal(true);
  }, [errMessage]);

  useEffect(() => {
    handleTagStatus(SocialCommtracks.testingXRoyale);
  }, []);

  useEffect(() => {
    dispatch(getPoolAddrs(userAddress));
  }, [walletConnected]);

  const carousel = useRef();
  const settings = {
    infinite: true,
    autoplay: false,
    cssEase: 'linear',
    dots: true,
    slidesToShow: 3,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: (
      <img
        className="icon-slider"
        src={ArrowCircleLeft.default}
        width={40}
        height={40}
        alt="right arrow"
      />
    ),
    nextArrow: (
      <img
        className="icon-slider"
        src={ArrowCircleRight.default}
        width={40}
        height={40}
        alt="right arrow"
      />
    ),
    slidesToScroll: 1,
    lazyLoad: true
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2
    //     }
    //   }
    // ]
  };

  return (
    <TokenHolderLayout pageTitle={'Social Media'}>
      <MainWrapper>
        <MainImgs>
          <img src={TopRightImg.default} alt="top right img" />
          <img src={RightBottomImg.default} alt="right middle img" />
        </MainImgs>
        <MainTitle>
          <HeaderTitle>
            {/* Own The Game<br /> */}
            <span>Own The Game</span>
          </HeaderTitle>
          <SubTitle>
            {/* <span>NFT-based</span> */}
            Get the tickets of spaceships which are headed to the moon.
          </SubTitle>
        </MainTitle>
        <MainContainer>
          <Tabs>
            <Tab
              className={tabStatus === 1 ? 'active' : ''}
              onClick={() => setTabStatus(1)}
            >
              Voting
            </Tab>
            <Tab
              className={tabStatus === 2 ? 'active' : ''}
              onClick={() => setTabStatus(2)}
            >
              Social Media
            </Tab>
            <Tab
              className={tabStatus === 3 ? 'active' : ''}
              onClick={() => setTabStatus(3)}
            >
              IDO
            </Tab>
          </Tabs>
          {tabStatus === 2 && (
            <MainDetails>
              <HashTags>
                <HashTag
                  className={hashTagStatus === 1 ? 'active' : ''}
                  onClick={() =>
                    handleTagStatus(SocialCommtracks.testingXRoyale)
                  }
                >
                  #testingxroyale
                </HashTag>
                <HashTag
                  className={hashTagStatus === 2 ? 'active' : ''}
                  onClick={() => handleTagStatus(SocialCommtracks.staratlas)}
                >
                  #staratlas
                </HashTag>
                <HashTag
                  className={hashTagStatus === 3 ? 'active' : ''}
                  onClick={() => handleTagStatus(SocialCommtracks.kawaiicats)}
                >
                  #kawaiicats
                </HashTag>
              </HashTags>
              <BorderFirst width={'588px'}>
                <BorderSecond>
                  <MainBg>
                    <Container>
                      <ProgressBar
                        customLabel={
                          reach
                            ? reach.twitter +
                              ' (' +
                              ' ' +
                              reach.twitter / 1000 +
                              '%)'
                            : '0 (0%)'
                        }
                        completed={reach ? reach.twitter / 1000 : 0}
                      />
                      <ProgressDetail>
                        <Target>Target: 100K</Target>
                        <Remaining>
                          <span>Remaining:</span>{' '}
                          {successMsgType === true ? (
                            reach ? (
                              100000 - reach.twitter > 0 ? (
                                100000 - reach.twitter
                              ) : (
                                0
                              )
                            ) : (
                              '100,000'
                            )
                          ) : (
                            <Loader />
                          )}
                        </Remaining>
                      </ProgressDetail>
                    </Container>

                    <SocialDetail>
                      <img src={TwitterIcon.default} alt="twitter icon" />
                      <SocialBg></SocialBg>
                      <Followers>
                        {mentions ? mentions.social.total : 0}
                      </Followers>
                    </SocialDetail>

                    {/* <SocialTotal>
                      <Likes>
                        <img src={LikeIcon.default} alt="like icon" />
                        <span>3000</span>
                      </Likes>
                      <Comments>
                        <img src={CommentIcon.default} alt="commnet icon" />
                        <span>{likes}</span>
                      </Comments>
                    </SocialTotal> */}
                  </MainBg>
                </BorderSecond>
              </BorderFirst>
            </MainDetails>
          )}
          {tabStatus === 3 && (
            <IDOMainDetails>
              {/* @ts-ignore */}
              <Slider {...settings} ref={carousel}>
                {data ? (
                  data.map((item: any) => (
                    <Card key={item.address} item={item} />
                  ))
                ) : (
                  <Loader />
                )}
              </Slider>
            </IDOMainDetails>
          )}
        </MainContainer>
      </MainWrapper>
      {errMessage && errMessage.length > 0 && (
        <Modal show={showModal} closeModal={() => setShowModal(false)}>
          <WarningText>{errMessage}</WarningText>
        </Modal>
      )}
    </TokenHolderLayout>
  );
};

export default MainContent;
