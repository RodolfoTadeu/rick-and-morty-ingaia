import LastSeen from '../LastSeen'
import {genders} from '../../../lib/genders'

const TextDead = ({ character}) => {

  return (
    
    <p className="aboutText">{`${character.name} was a ${character.gender} ${character.type} ${character.species}.
    ${genders(character.gender)} is ${character.status}.`} <LastSeen character={character} /> </p>
     
  )
}

export default TextDead;


