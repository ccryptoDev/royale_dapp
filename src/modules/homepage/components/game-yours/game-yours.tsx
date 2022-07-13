import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { MainTitle, BtnSubmitGame, ViewAll, RegisterBtn } from './style';

import { HeaderTitle, SubTitle, InputContainer, MainContainer } from '../style';

import { SearchIcon } from '../../../../images';
import { Loader, Modal } from '../../../../components';
import { userRegister } from '../../../../logic/actions';

import {
  FlexRowCenter,
  BorderFirst,
  BorderSecond,
  PrimaryBorder,
  BorderPrimaryButton
} from '../../../../utils';
import { WarningText } from '../../../../components/style';

const GameYours = () => {
	const [showModal, setShowModal] = useState(false);
  const { userAddress, walletConnected, network } = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch();

  const { userRegistered, errMessage, duplicatedMessage } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
	  setShowModal(true);
  }, [errMessage])

  const handleRegister = () => {
    if (walletConnected) {
      dispatch(userRegister(userAddress));
    }
  };

  return (
    <MainContainer>
      <MainTitle>
        <HeaderTitle>
          <span>The Game is Yours</span>
        </HeaderTitle>
        <SubTitle>
          Get the tickets of spaceships which are headed to the moon.
        </SubTitle>
      </MainTitle>
      <FlexRowCenter marginTop="60px">
        <BorderFirst width="674px">
          <BorderSecond>
            <InputContainer>
              <img src={SearchIcon.default} alt="search icon" />
              <input type="text" placeholder="Search for a pool" />
            </InputContainer>
          </BorderSecond>
        </BorderFirst>
      </FlexRowCenter>
      <BtnSubmitGame>
        <PrimaryBorder width="201px">
          <BorderPrimaryButton>Submit Your Game</BorderPrimaryButton>
        </PrimaryBorder>
        <RegisterBtn>
          <PrimaryBorder width="201px">
            <BorderPrimaryButton onClick={() => handleRegister()}>
              {/* {userRegistered == true ? 'Register' : <Loader />} */}
              Reigster
            </BorderPrimaryButton>
          </PrimaryBorder>
        </RegisterBtn>

        <ViewAll>View all pools</ViewAll>
      </BtnSubmitGame>
	  { (errMessage && errMessage.length > 0) &&
		<Modal show={showModal} closeModal={() => setShowModal(false)}>
			<WarningText>
				{errMessage}
			</WarningText>
		</Modal>
		}
    </MainContainer>
  );
};

export default GameYours;
