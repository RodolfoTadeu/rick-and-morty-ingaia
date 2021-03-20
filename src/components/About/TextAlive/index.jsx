import LastSeen from '../LastSeen'
import {genders} from '../../../lib/genders'

const TextAlive = ({ character}) => {
  return (
    <p className="aboutText">{`${character.name} is a ${character.gender} ${character.species}.
    ${genders(character.gender)} is ${character.status} and well.`} <LastSeen character={character} /> </p>
  )
}

export default TextAlive;