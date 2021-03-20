import { FiUsers } from 'react-icons/fi'
import { InformationWrapper } from './styles'

const TechnicalInformationDetails = ({ detail }) => {

  const residents = detail.residents?.length;

  return (
    <InformationWrapper>
      
      <span>{detail.type}</span>
      <h3>{detail.name}</h3>
      <p>{detail.dimension}</p>
      <div>
        <FiUsers size={12}/>
        <span>{residents} residents</span>
      </div>
    </InformationWrapper>
  )
}

export default TechnicalInformationDetails;