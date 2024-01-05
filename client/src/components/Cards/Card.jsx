export function Card({ character }) {
  return (
    <div
      onClick={() => document.getElementById("my_modal_1").showModal()}
      className="card w-56 bg-base-300 shadow-2xl m-4 hover:scale-104 hover:-translate-y-1 cursor-pointer"
    >
      <figure className="w-fit">
        <img src={character.image} alt={character.name} />
      </figure>

      <div className="flex justify-center mt-2 mb-1">
        <h2 className="card-title">{character.name}</h2>
      </div>

        {/* Agregar Detail */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{character.name}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      
    </div>
  );
}
