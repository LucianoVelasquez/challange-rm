import {
  ACTION_GET_ALLCHARACTER,
  ACTION_GET_CHARACTERBYPAGE,
  ACTION_GET_CHARACTERBYNAME,
} from "./const";

const initialState = {
  characters: [],
  info: {},
  filter: {
    name: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_GET_ALLCHARACTER:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: { name: "" },
      };

    case ACTION_GET_CHARACTERBYPAGE:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
      };

    case ACTION_GET_CHARACTERBYNAME:
      console.log(action.payload.filter);
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        filter: action.payload.filter,
      };

    default:
      return { ...state };
  }
}
