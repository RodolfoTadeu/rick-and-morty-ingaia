import { Li } from './styles';
import { limitName } from '../../lib/limit-text';
import {status} from '../../lib/status';

const CharacterCard = ({ character, onClick }) => {

  const classes = status[character.status] 

  return (
    <Li className={classes} onClick={() => { onClick(character) }}>
      <img src={character.image} alt={character.name} />
      <div>
        <strong>{limitName(character.name)}</strong>
        <p>{character.species}</p>
      </div>
    </Li>
  );
};

export default CharacterCard;
