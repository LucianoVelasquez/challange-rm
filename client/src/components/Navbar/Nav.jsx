import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersByName,getAllCharacters } from "../../redux/actions";
import { ThemeController } from "../ThemeController/ThemeController";

export function Nav(){

  const [textFind,setTextFind] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setTextFind(e.target.value);
  }

  const handleClick = () =>{

    if(textFind.toLowerCase() == "todos"){
      dispatch(getAllCharacters());
    }else{
      dispatch(getCharactersByName(textFind.toString()));
    }
    
    setTextFind("");
  }

  return (
    <div className="navbar bg-base-300 absolute top-0 h-12">

      <div className="navbar-start">
      </div>

      <div className="navbar-center">

        <input onChange={(e) => handleChange(e)} value={textFind} type="text" placeholder="Buscar personaje..." className="input input-bordered w-full max-w-xs h-9" />
        <button onClick={()=> handleClick()} className="btn  btn-sm ml-2 btn-primary h-8" >Buscar</button>

      </div>
      
      <div className="navbar-end z-30">
        <ThemeController></ThemeController>
      </div>
    </div>
  );
};
