export function Detail({ character }) {
  return (
    <dialog id={`my-modal-${character.id}`} className="modal cursor-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>
        <div className="card-body text-center">
          <h1 className="card-title justify-center underline">
            {character.name}
          </h1>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Type:</strong> {character.type}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Dimension:</strong> {character.origin.dimension}
          </p>
          <div className="card-actions justify-end">
            <form method="dialog">
                <a className="tooltip mr-2" data-tip="Presiona ESC para salir.">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
              <button className="btn bg-base-300 mt-3">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}
