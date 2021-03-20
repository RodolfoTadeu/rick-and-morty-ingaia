import About from '../About'
import ImageBlur from '../ImageBlur';
import Origin from '../Origin';
import Location from '../Location';
import Modal from '../Modal';
import CharacterCardModal from '../CharacterCardModal';
import {Information} from './styles'

const CharacterModal = ({ character, onClose, open }) => {

  if (!Object.keys(character).length) {
      return null;
  }
  
  return (
    <Modal open={open} onClose={onClose}>
      <CharacterCardModal character={character}/>
      <ImageBlur character={character} />
      <Information>
        <About character={character}/>
        
        <Origin origin={character.origin} />
        <Location location={character.location} />
      </Information>
    </Modal>
  );
}

export default CharacterModal;
