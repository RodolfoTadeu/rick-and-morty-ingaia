import { Overlay } from './styles'
import loading from '../../assets/loading.svg'

const Loading = () => {
  return (
    <Overlay>
      <div>
        <img src={loading} alt="" />
        <span>Loading...</span>
      </div>
    </Overlay>
  )
}

export default Loading;