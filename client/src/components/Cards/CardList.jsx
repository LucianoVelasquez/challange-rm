import { Card } from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { getAllCharacters,getAllSpecies } from "../../redux/actions"

export function CardsList() {

  const allCharacters = useSelector((state) => state.characters);
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCharacters())
    dispatch(getAllSpecies(filter))

  },[])

  return (
    <>
       <div className="min-h-screen h-auto flex flex-wrap content-center justify-center items-center  mb-2">
         {
        allCharacters.length > 0?
         allCharacters.map((character) => (
          <Card key={character.id} character={character}></Card>
        )):
          <h1>No existen personajes.</h1>
        } 
      </div> 
    </>
  );
}
