import { Overlay, Modal } from './ModalWindow.styled';
export const ModalWindow = ({ imageSrc, ImageAlt, onBackdropClick }) => {
  return (
    <Overlay onClick={onBackdropClick}>
      <Modal>
        <img src={imageSrc} alt={ImageAlt} width="800" height="600" />
      </Modal>
    </Overlay>
  );
};
