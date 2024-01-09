import { gql } from "@apollo/client";

export const GET_ALLCHARACTER = () => gql`
  {
    characters(filter: { name: "" }) {
      info {
        count
        pages
        next
        prev
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

export const GET_CHARACTER_BYPAGE = (
  value,
  { name, species, gender, status }
) => gql`
  {
    characters(filter: { name: "${name}", species: "${species}", gender: "${gender}", status: "${status}"},page:${value}) {
      info {
        count
        pages
        next
        prev
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

export const GET_CHARACTER_BYNAME = (value) => gql`
  {
    characters(filter: { name: "${value}" }) {
      info {
        count
        pages
        next
        prev
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

export const GET_CHARACTER_BYID = (id) => gql`{
  character(id:${id}) {
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
`;

export const GET_CHARACTER_BYPSPECIE = (name, value) => gql`
  {
    characters(filter: {name: "${name}", species: "${value}",}) {
      info {
        count
        pages
        next
        prev
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

export const GET_CHARACTER_BYPGENDER = (name, species, gender) => gql`
  {
    characters(filter: {name: "${name}",species: "${species}", gender: "${gender}"}) {
      info {
        count
        pages
        next
        prev
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
export const GET_CHARACTER_BYSTATUS = (name, species, gender, status) => gql`
  {
    characters(filter: {name: "${name}",species: "${species}", gender: "${gender}",status: "${status}"}) {
      info {
        count
        pages
        next
        prev
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
