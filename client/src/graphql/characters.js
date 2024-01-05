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
