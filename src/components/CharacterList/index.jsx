import { useState } from 'react'
import { CharacterListWrapper, CharacterListContainer } from './styles'
import CharacterCard from '../CharacterCard';
import CharacterModal from '../CharacterModal';

const CharacterList = ({ characters }) => {

  const [character, setCharacter] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function handleCharacter(character) {
    setCharacter(character)
    setIsModalOpen(true)
  }

  function handleClose() {
    setCharacter({})
    setIsModalOpen(false)
  }

  return (
    <>
    <CharacterModal open={isModalOpen} character={character} onClose={handleClose}/>
    <CharacterListWrapper>
      <CharacterListContainer>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} onClick={handleCharacter} />
        ))}
      </CharacterListContainer>
    </CharacterListWrapper>
    </>
  )
}

export default CharacterList