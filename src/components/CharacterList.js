import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { Link } from 'react-router-dom'
// import FormikSearchForm from './SearchForm'

const SecCon = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DivCon = styled.div`
  width: 30%;
  margin: 1rem;
`;

const HomeLink = styled.div`
  font-size: 3rem;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState({
    searchBar: ''
  })


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

 
  const addSearch = search => {
    const newSearch = {
      id: Date.now(),
      searchBar: search.searchBar 
    };
    setSearch({...search, newSearch});
  };

  const onSearch = e => {
    setSearch({...search, [e.target.name]: e.target.value})
    console.log(search)
}

  const handleSubmit = event => {
    event.prventDefault()
    addSearch(search)
    setSearch({searchBar: ''})
  }

  

  return (
    <SecCon className="character-list">
      {/* <FormikSearchForm character={character}/> */}
      <form onSubmit={event => handleSubmit(event)}>
       <input type="search" name="searchBar" placeholder="Search" onChange={onSearch} value={search.searchBar}/>
       <button onSubmit={() => handleSubmit()}>Submit!</button>
       {character.map(char => (
        <DivCon key={char.id}>
          <p>Name: {char.name}</p>
          <p>Species: {char.species}</p>
        </DivCon>
      ))}
     </form>
      
      <HomeLink>
        <Link to={`/`}>Home</Link>
      </HomeLink>
      
    </SecCon>
  );
}
