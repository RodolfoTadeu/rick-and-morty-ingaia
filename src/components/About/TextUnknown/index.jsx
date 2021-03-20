import LastSeen from '../LastSeen'

const TextUnknown = ({ character }) => {
  return (    
    <p className="aboutText">{`${character.name} is a ${character.gender} ${character.species}.
    It can’t be told if he is alive or dead.`} <LastSeen character={character} /> </p>     
  )
}

export default TextUnknown;



