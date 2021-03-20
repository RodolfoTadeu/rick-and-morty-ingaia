import { ModalContainerOverlay, ModalContainer } from './styles'
import Button from '../Button';
import {CgClose} from 'react-icons/cg'


const Modal = ({ children, onClose, open }) => {
  return (
    <ModalContainerOverlay open={open} >
     
      <ModalContainer>
        <CgClose className='closeModal' onClick={onClose} size={32} />
        <Button className='modal' onClick={onClose} description='Close' />
        { children }
      </ModalContainer>
    </ModalContainerOverlay>
  )
}

export default Modal;