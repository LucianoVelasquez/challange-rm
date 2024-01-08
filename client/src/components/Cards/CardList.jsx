import { Card } from "./Card";
import { Pagination } from "../Pagination/Pagination";
import { getAllCharacters } from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export function CardsList() {

  const allCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCharacters())
  },[])

  console.log(allCharacters);
  return (
    <>
       <div className="min-h-screen h-auto flex flex-wrap content-center justify-center items-center mt-16 mb-16">
         {
        allCharacters.length > 0?
         allCharacters.map((character) => (
          <Card key={character.id} character={character}></Card>
        )):
          <h1>No existen personajes.</h1>
        } 
      </div> 

      <Pagination></Pagination>

    </>
  );
}
