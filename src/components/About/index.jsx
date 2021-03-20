import { Wrapper } from './styles';
import Alive from './TextAlive';
import Dead from './TextDead';
import Unknown from './TextUnknown'
 
const About = ({ character }) => {

  const Components = {
    Alive,
    Dead,
    unknown: Unknown
  }

  const Component = Components[character.status]

  return (
    <Wrapper>
      <div>
        <h2 data-testid="about">About</h2>
          <Component character={character}/>
      </div>
    </Wrapper>
  )
}

export default About;

