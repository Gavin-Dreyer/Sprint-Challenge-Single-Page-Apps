import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const SecCon = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DivCon = styled.div`
  width: 30%;
  margin: 1rem;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

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

  return (
    <SecCon className="character-list">
      {character.map(char => (
        <DivCon key={char.id}>
          <p>Name: {char.name}</p>
          <p>Species: {char.species}</p>
        </DivCon>
      ))}
    </SecCon>
  );
}
