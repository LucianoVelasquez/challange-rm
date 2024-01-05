import { useParams } from "react-router-dom";

export function Details(){
    
    const { id } = useParams();

    return(
        <>
        <h1>
            Welcome Details {id}
        </h1>
        </>
    );
}