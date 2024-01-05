import { Card } from "./Card";
import { useQuery } from "@apollo/client";
import { GET_ALLCHARACTER } from "../../graphql/characters";

export function CardsList() {
  const { loading, error, data } = useQuery(GET_ALLCHARACTER);

  if (loading) return <p>loading</p>;
  if (error) return <p>Error</p>;

  const { results } = data.characters;

  return (
    <div className="min-h-screen h-auto flex flex-wrap content-center justify-center items-center mt-16 mb-16">

      {results.map((character) => (
        <Card character={character}></Card>
      ))}

      
    </div>
  );
}
