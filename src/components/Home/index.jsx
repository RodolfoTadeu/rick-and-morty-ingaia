import { useState } from 'react';
import { gql } from '@apollo/client';
import client from '../../services/api';
import SearchForm from '../SearchForm'
import CharacterList from '../CharacterList';
import Pagination from '../Pagination';
import Loading from '../Loading';
import { Container } from './styles';
import Img from '../Logo';

const CHARACTERS_SEARCH = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name 
          type
          dimension
          residents {
            name
          }
        }
        location {
          name 
          type
          dimension
          residents {
            name
          }
        }
        episode {
          air_date
        }
        image
        created
      }
  }
  }
`;

const Home = () => {

  const [info, setInfo] = useState({
    currentPage: 1,
    totalItems: 0,
    pages: 0
  });

  const [characters, setCharacters] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [loading, setLoading] = useState(false);

  async function searchCharacter(name, page = 1) {
    const response = await client.query({
      query: CHARACTERS_SEARCH,
      variables: { page, filter: { name } }
    })

    return response.data.characters;
  }

  async function onSearch(name) {

    setLoading(true)

    const data = await searchCharacter(name);

    setLoading(false)
    setSearchedValue(name)
    setInfo(state => ({
      ...state,
      currentPage: 1,
      totalItems: data.info.count,
      pages: data.info.pages,
    }))

    setCharacters(data.results)
  }

  async function onPageChange(page) {
    
    setLoading(true)

    const data = await searchCharacter(searchedValue, page);

    setLoading(false)

    setInfo(state => ({
      ...state,
      currentPage: page
    }))
    setCharacters(data.results)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Container>
        <Img />
        <SearchForm value={searchedValue} onSearch={(value) => { onSearch(value) }} />
       
      </Container>
      <CharacterList characters={characters} />
      <Pagination
        limitPerPage={20}
        totalItems={info.totalItems}
        currentPage={info.currentPage}
        maxLinks={5}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Home;
