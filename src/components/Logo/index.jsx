
import {ImageContainer } from './styles'
import logo from '../../assets/logo-Rick-and-Morty.svg'

const Img = () => {
  return(
    <ImageContainer>
      <img src={logo}alt="logo rick and morty"/>
    </ImageContainer>
  )
}

export default Img