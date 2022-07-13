import React, { useState } from 'react';
import axios from 'axios';
import { TokenHolderLayout } from '../../layouts';
import { TopRightImg, LeftMiddleImg, RightMiddleImg } from '../../images';

import { baseURL } from '../../utils/constants';

import {
  MainImgs,
  MainWrapper,
  MainTitle,
  HeaderTitle,
  SubTitle,
  MainContainer,
  BorderFirst,
  BorderSecond,
  MainBg,
  InputSection,
  InputContainer,
  InputLabel,
  BottomContainer,
  BottomTitle,
  BottomBtn
} from './style';

import { SuccessModal } from '../../components';

const MainContent = () => {
  const [show, setShow] = useState(false);
  const [gameName, setGameName] = useState('');
  const [gameDes, setGameDes] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [amount, setAmount] = useState('');
  const [itemInfo, setItemInfo] = useState('');
  const [gameDemo, setGameDemo] = useState('');
  const [uri, setUri] = useState('');
  const [deckLink, setDeckLink] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [twiiterLink, setTwitterLink] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorDes, setErrorDes] = useState(false);

  const handleSubmit = async () => {
    if (contactEmail == '') setErrorEmail(true);
    if (gameName == '') setErrorName(true);
    if (contactEmail == '') setErrorDes(true);
    try {
      const response = await axios.post(baseURL + '/send-email', {
        name: gameName,
        description: gameDes,
        projectStatus: projectStatus,
        amount: amount,
        itemInfo: itemInfo,
        gameDemo: gameDemo,
        uri: uri,
        deckLink: deckLink,
        contactEmail: contactEmail,
        telegramLink: telegramLink,
        twitterLink: twiiterLink
      });
      const { success } = response?.data;
      if (success == 'true') {
        setShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <TokenHolderLayout pageTitle={'RPT staking'}>
      <MainWrapper>
        <MainImgs>
          <img src={TopRightImg.default} alt="top right img" />
          <img src={LeftMiddleImg.default} alt="left middle img" />
          <img src={RightMiddleImg.default} alt="right middle img" />
        </MainImgs>
        <MainTitle>
          <HeaderTitle>
            Submit your game
            <br />
            {/* and <span>get the funds!</span> */}
          </HeaderTitle>
          {/* <SubTitle>
					<span>NFT-based</span> crowdfunding platform & marketplace
				</SubTitle> */}
        </MainTitle>
        <MainContainer>
          <BorderFirst>
            <BorderSecond>
              <MainBg>
                <InputSection>
                  <InputContainer>
                    <InputLabel>Game Name</InputLabel>
                    <input
                      onChange={(e) => setGameName(e.target.value)}
                      type="text"
                      placeholder="Enter the name of your game project"
                    />
                    {errorName && <span>Please type name</span>}
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Game Description</InputLabel>
                    <input
                      onChange={(e) => setGameDes(e.target.value)}
                      type="text"
                      placeholder="Tell us about your game in a few senteces: genre, idea, concept."
                    />
                    {errorDes && <span>Please type description</span>}
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>
                      Is your project complete? If not, please provide
                      additional detail.
                    </InputLabel>
                    <input
                      onChange={(e) => setProjectStatus(e.target.value)}
                      type="text"
                      placeholder="Descirbe the stage your project is at."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Amount you are looking to raise</InputLabel>
                    <input
                      onChange={(e) => setAmount(e.target.value)}
                      type="text"
                      placeholder="Enter the amount you need to deliver your game (e.g. “$50k”)."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>
                      Tell us more about the assets in this game
                    </InputLabel>
                    <textarea
                      onChange={(e) => setItemInfo(e.target.value)}
                      placeholder='Briefly describe your assets. E.g. " X units of spaceships". '
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Game Demo</InputLabel>
                    <input
                      onChange={(e) => setGameDemo(e.target.value)}
                      type="text"
                      placeholder="Add a game demo video, or a link to screenshots or artworks."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Website URL</InputLabel>
                    <input
                      onChange={(e) => setUri(e.target.value)}
                      type="text"
                      placeholder="Your website address."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>
                      Please provide all information relevant to this game(url,
                      google-drop, Dropbox)
                    </InputLabel>
                    <input
                      onChange={(e) => setDeckLink(e.target.value)}
                      type="text"
                      placeholder="Google drive / Dropbox link."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Contact email</InputLabel>
                    <input
                      onChange={(e) => setContactEmail(e.target.value)}
                      type="text"
                      placeholder="We will contact you by your email."
                    />
                    {errorEmail && <span>Please type email</span>}
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Telegram handle</InputLabel>
                    <input
                      onChange={(e) => setTelegramLink(e.target.value)}
                      type="text"
                      placeholder="we may contact you on Telegram."
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Twitter handle</InputLabel>
                    <input
                      onChange={(e) => setTwitterLink(e.target.value)}
                      type="text"
                      placeholder="we may contact you on Twitter."
                    />
                  </InputContainer>
                </InputSection>
                <BottomContainer>
                  {/* <BottomTitle>
									We will review your submissions within 48 hours. If your game potentially fits our platform, we will contact you through your provided email address or on Telegram to arrange a call.
								</BottomTitle> */}
                  <BottomBtn onClick={handleSubmit}>
                    <span data-text="Submit your game">
                      <span>Submit your game</span>
                    </span>
                  </BottomBtn>
                </BottomContainer>
              </MainBg>
            </BorderSecond>
          </BorderFirst>
        </MainContainer>
        <SuccessModal show={show} closeModal={closeModal} />
      </MainWrapper>
    </TokenHolderLayout>
  );
};

export default MainContent;
