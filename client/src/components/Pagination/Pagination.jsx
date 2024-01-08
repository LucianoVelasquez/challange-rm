import { useDispatch, useSelector } from 'react-redux';
import { getCharactersByPage } from '../../redux/actions';

export function Pagination() {

  const { info } = useSelector((state) => state);
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (e) =>{

    if(e.target.id == "next"){
      dispatch(getCharactersByPage(info.next,filter))
    }else{
      dispatch(getCharactersByPage(info.prev,filter))
    }
    console.log(info);
  }

  

  return (
    <>
      <div className="flex justify-center mb-5">
        <div className="join">

          {
            info.prev?<button id="prev" onClick={(e) => handleClick(e)} className="join-item btn">«</button> : ""
          }
          

          <button className="join-item btn">{(info.next? info.next-1 : info.pages)}</button> 
          
          {
            info.next? <button id="next" onClick={(e) => handleClick(e)} className="join-item btn"> 
            »
          </button> : ""

          }
        </div>
      </div>
    </>
  );
}
