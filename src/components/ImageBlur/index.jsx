import { Overlay, Img } from './styles'

const ImageBlur = ({ character }) => {
  return (
    <>
      <Img src={character.image} alt={character.name} />       
      <Overlay />
    </>
  )
}

export default ImageBlur