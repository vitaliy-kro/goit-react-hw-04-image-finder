import { Overlay, Modal } from './ModalWindow.styled';
import { IProps } from './ModalWindow.interface';
export const ModalWindow: React.FC<IProps> = ({
  imageSrc,
  imageAlt,
  onBackdropClick,
}) => {
  return (
    <Overlay onClick={onBackdropClick}>
      <Modal>
        <img src={imageSrc} alt={imageAlt} width="800" height="600" />
      </Modal>
    </Overlay>
  );
};
