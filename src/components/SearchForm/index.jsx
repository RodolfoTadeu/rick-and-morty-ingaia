import { useState } from 'react';
import { Form } from './styles'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SearchForm = ({ value, onSearch }) => {

  const [inputValue, setInputValue] = useState(value);

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(inputValue);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder="Search characters"
        />
        <Button description='Search' />
      </Form>
    </>
  )
}

export default SearchForm;