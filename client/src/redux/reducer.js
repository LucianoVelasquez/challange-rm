import {
  ACTION_GET_ALLCHARACTER,
  ACTION_GET_CHARACTERBYPAGE,
  ACTION_GET_CHARACTERBYNAME,
  ACTION_GET_ALLSPECIES,
  ACTION_GET_CHARACTERBYSPECIE,
  ACTION_FILTERBYGENDER,
  ACTION_FILTERBYSTATUS,
} from "./const";

const initialState = {
  characters: [],
  copiaCharacters: [],
  species: [],
  info: {},
  filter: {
    name: "",
    species: "",
    gender: "",
    status: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_GET_ALLCHARACTER:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: {
          name: "",
          species: "",
          gender: "",
          status: "",
        },
      };

    case ACTION_GET_CHARACTERBYPAGE:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: action.payload.filter,
      };

    case ACTION_GET_CHARACTERBYNAME:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: {
          ...state.filter,
          name: action.payload.name,
        },
      };

    case ACTION_GET_ALLSPECIES:
      return {
        ...state,
        species: action.payload,
      };

    case ACTION_GET_CHARACTERBYSPECIE:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: { ...state.filter, species: action.payload.species },
      };

    case ACTION_FILTERBYGENDER:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: {
          ...state.filter,
          species: action.payload.species,
          gender: action.payload.gender,
        },
      };

    case ACTION_FILTERBYSTATUS:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: {
          ...state.filter,
          species: action.payload.species,
          gender: action.payload.gender,
          status: action.payload.status,
        },
      };

    default:
      return { ...state };
  }
}
