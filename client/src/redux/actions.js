import {
  ACTION_GET_ALLCHARACTER,
  ACTION_GET_CHARACTERBYPAGE,
  ACTION_GET_CHARACTERBYNAME,
  ACTION_GET_ALLSPECIES,
  ACTION_GET_CHARACTERBYSPECIE,
  ACTION_FILTERBYGENDER,
  ACTION_FILTERBYSTATUS,
} from "./const";

import {
  GET_ALLCHARACTER,
  GET_CHARACTER_BYPAGE,
  GET_CHARACTER_BYNAME,
  GET_CHARACTER_BYPSPECIE,
  GET_CHARACTER_BYPGENDER,
  GET_CHARACTER_BYSTATUS,
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
        payload: { results, info, filter },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const getCharactersByName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYNAME(name)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_GET_CHARACTERBYNAME,
        payload: { results, info, name },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const getAllSpecies = (value) => {
  return async function (dispatch) {
    let species = [];

    try {
      for (let i = 1; i < 43; i++) {
        const res = await axios.post("https://rickandmortyapi.com/graphql", {
          query: print(GET_CHARACTER_BYPAGE(i, value)),
        });

        const { results } = res.data.data.characters;

        results.map((character) => {
          if (!species.includes(character.species)) {
            species.push(character.species);
          }
        });
      }

      dispatch({ type: ACTION_GET_ALLSPECIES, payload: species });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const getCharactersBySpecie = (name, value) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYPSPECIE(name, value)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_GET_CHARACTERBYSPECIE,
        payload: { results, info, species: value },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const filterByGenero = (name, species, gender) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYPGENDER(name, species, gender)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_FILTERBYGENDER,
        payload: { results, info, species, gender },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};

export const filterByStatus = (name, species, gender, status) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("https://rickandmortyapi.com/graphql", {
        query: print(GET_CHARACTER_BYSTATUS(name, species, gender, status)),
      });

      const { results } = res.data.data.characters;
      const { info } = res.data.data.characters;

      dispatch({
        type: ACTION_FILTERBYSTATUS,
        payload: { results, info, species, gender, status },
      });
    } catch (error) {
      console.error("Error al hacer la consulta:", error);
    }
  };
};
