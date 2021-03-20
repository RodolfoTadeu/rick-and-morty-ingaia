import TechnicalInformationDetails from '../TechnicalInformationDetails'
import {Title} from './styles'
import Unknown from './Unknown';

const Origin = ({ origin }) => {

  const hasOrigin = origin.name !== 'unknown'

  return (
    <>
      <Title>Origin</Title>
      {hasOrigin ? (<TechnicalInformationDetails detail={origin} />) : (<Unknown />)}
    </>
  )
}

export default Origin;