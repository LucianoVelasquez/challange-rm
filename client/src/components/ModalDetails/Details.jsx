export function Detail({ character }) {
  return (
    <dialog id={`my-modal-${character.id}`} className="modal cursor-auto">
  
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={character.image}
            alt={character.name}
          />
        </figure>
        <div className="card-body text-center">
          
          <h1 className="card-title justify-center underline">{character.name}</h1>
          <p><strong>Status:</strong> {character.gender}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Type:</strong> {character.type}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Dimension:</strong> {character.origin.dimension}</p>
          <div className="card-actions justify-end">
            <form method="dialog">
                <button className="btn bg-base-300 mt-3">Close</button>
            </form>
          </div>

        </div>
      </div>
      
    </dialog>
  );
}
