import { Container } from './styles';
import { limitName } from '../../lib/limit-text' 

const CharacterCardModal = ({ character}) => {
  return (
    <Container >     
      <img src={character.image} alt={character.name} />
      <div>
        <strong>{limitName(character.name)}</strong>
        <p>{character.species}</p>
      </div>
    </Container>
  );
};

export default CharacterCardModal;
