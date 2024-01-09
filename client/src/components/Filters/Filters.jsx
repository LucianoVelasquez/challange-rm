import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters,getCharactersBySpecie,filterByGenero,filterByStatus } from "../../redux/actions";

export function Filters() {
  const dispatch = useDispatch();
  const { species } = useSelector((state) => state);
  const { filter } = useSelector((state) => state);
  const { characters } = useSelector((state) => state);


  const handleClickSpecie = (e) => {
    const value = e.target.value == "Todos"? "" : e.target.value;

    dispatch(getCharactersBySpecie(filter.name,value))
  };

  const handleClickGender = (e) =>{
    const value = e.target.value == "Todos"? "" : e.target.value;

    dispatch(filterByGenero(filter.name,filter.species,value));
  }

  const handleClickStatus = (e) =>{
    const value = e.target.value == "Todos"? "" : e.target.value;

    dispatch(filterByStatus(filter.name,filter.species,filter.gender,value));
  }

  return (
    <div className="grid place-content-center">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-300 mt-24 w-auto  "
      >
        <input type="checkbox" className="peer" />

        
        <div className="collapse-title text-xl font-medium text-center">
          Agregar Filtros
        </div>

        {
          filter.name.length > 3 && characters.length > 0 ? <div className="mb-4 text-xl font-medium text-center">
          <h1>Personaje buscado: {filter.name}</h1>
        </div> : " "
        }
        
        

        <div className="collapse-content flex justify-center gap-5 items-center">
          <button
            onClick={() => dispatch(getAllCharacters())}
            className="btn btn-outline btn-secondary btn-sm mt-11"
          >
            Reset
          </button>

          {/* Filtro por Specie */}
          {species.length > 0 ? (
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Species:</span>
              </div>
              <select
                onChange={(e) => handleClickSpecie(e)}
                className="select select-bordered w-full max-w-xs"
                value={filter.species}
              >
                <option disabled selected>
                Species
                </option>
                <option id="Todos">
                  Todos
                </option>
                {species.map((specie) => (
                  <option id={specie}>{specie}</option>
                ))}
              </select>
            </label>
          ) : (
            <span className="loading loading-spinner loading-lg h-7"></span>
          )}

          {/* Filter genero */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Genero:</span>
            </div>
            <select value={filter.gender} onChange={(e)=> handleClickGender(e)} className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Genero
              </option>
              <option id="Todos">Todos</option>
              <option id="Female">Female</option>
              <option id="Male" >Male</option>
              <option id="Genderless">Genderless</option>
              <option id="unknown">unknown</option>
            </select>
          </label>

            {/* Filter Status */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Status:</span>
            </div>
            <select value={filter.status} onChange={(e) => handleClickStatus(e) } className="select select-bordered w-full max-w-xs">
              <option disabled selected>
              Status
              </option>
              <option id="Todos">Todos</option>
              <option id="Alive">Alive</option>
              <option id="Dead">Dead</option>
              <option id="unknown">unknown</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
