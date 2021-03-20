import { ButtonStyle } from './styles';

const Button = ({ description, ...props }) => {
  return (
    <ButtonStyle
      {...props}
      type="submit"
    >

      {description}
    </ButtonStyle>
  )
}

export default Button