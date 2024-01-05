import { gql } from "@apollo/client";

export const GET_ALLCHARACTER = gql`
  {
    characters(filter: { name: "" }) {
      info {
        count
      }
      results {
        id
        name
        status
        gender
        species
        type
        location {
          name
        }
        origin {
          name
          dimension
        }
        image
      }
    }
  }
`;

export const GET_CHARACTER_BYID = (id) => qgl`{
  character(id:${id}) {
    info {
      count
    }
    results {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      image
    }
  }
}
`;
