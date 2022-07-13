import {
  ModalWrapper,
  ModalBorder,
  ModalContainer,
  CrossIconContainer,
  Header
} from './style';

import { CloseIcon } from '../../images';

import { SuccessModalProps } from '../../utils';

const SuccessModal = ({ show, closeModal }: SuccessModalProps) => {
  return (
    <>
      <ModalWrapper show={show}>
        <ModalBorder>
          <ModalContainer>
            <CrossIconContainer onClick={closeModal}>
              <img src={CloseIcon.default} alt="close" />
            </CrossIconContainer>
            <Header>
              {' '}
              You submitted your game! <br /> A representative from Royale will
              contact you within 48 hours
            </Header>
          </ModalContainer>
        </ModalBorder>
      </ModalWrapper>
    </>
  );
};

export default SuccessModal;
