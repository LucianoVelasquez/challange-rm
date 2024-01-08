import { Detail } from "../ModalDetails/Details";

export function Card({ character }) {


  const handleClick = (e) =>{

    const value = e.target.id;
    
   document.getElementById(`my-modal-${value}`).showModal()
 
  }
  
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="card w-56 bg-base-300 shadow-2xl m-4 hover:scale-104 hover:-translate-y-1 cursor-pointer"
      id={character.id}
    >
      <figure className="w-fit" >
        <img id={character.id} src={character.image} alt={character.name} />
      </figure>

      <div className="flex justify-center mt-2 mb-1" id={character.id}>
        <h2 id={character.id} className="card-title">{character.name}</h2>
      </div>

      <Detail character={character}></Detail>     

    </div>
  );
}
