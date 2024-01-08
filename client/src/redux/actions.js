import {
  ACTION_GET_ALLCHARACTER,
  ACTION_GET_CHARACTERBYPAGE,
  ACTION_GET_CHARACTERBYNAME,
} from "./const";

import {
  GET_ALLCHARACTER,
  GET_CHARACTER_BYPAGE,
  GET_CHARACTER_BYNAME,
} from "../graphql/characters";

import { print } from "graphql/language/printer";
import axios from "axios";

export const getAllCharacters = () => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_ALLCHARACTER()),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({ type: ACTION_GET_ALLCHARACTER, payload: { results, info } });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const getCharactersByPage = (value, filter) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYPAGE(value, filter)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_GET_CHARACTERBYPAGE,
        payload: { results, info },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const getCharactersByName = (value) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYNAME(value)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_GET_CHARACTERBYNAME,
        payload: { results, info, filter: { name: value } },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};
