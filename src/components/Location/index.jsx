import TechnicalInformationDetails from '../TechnicalInformationDetails';
import {Title} from './styles'

const Location = ({ location }) => {
  return (
    <>
      <Title>Location</Title>
      <TechnicalInformationDetails detail={location} />
    </>
  )
}

export default Location;