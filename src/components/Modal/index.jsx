import { ModalContainerOverlay, ModalContainer } from './styles'
import Button from '../Button';
import {CgClose} from 'react-icons/cg'


const Modal = ({ children, onClose, open }) => {
  return (
    <ModalContainerOverlay open={open} >
     
      <ModalContainer>
        <CgClose className='closeModalIcon' onClick={onClose} size={30} />
        <Button className='closeModal' onClick={onClose} description='Close' />
        { children }
      </ModalContainer>
    </ModalContainerOverlay>
  )
}

export default Modal;