import { useEffect, useMemo, useState,memo } from "react"
import DataContext from "./dataContext"
import axios from "axios";
import fetchData, { fetch2dResult, fetch3D, fetchLive } from "../../hooks/fetchData";
import fetchHistory from "../../hooks/fetchHistory";
import { _2D_RESULT, _2d_URL, _Live } from "../../hooks/config";
const Data =({children}) => {
  const [live2D,setLive2D] = useState({});
  const [results2D, setResults2D] = useState({});
  const [history2D, setHistory2D] = useState([]);
  const [history3D, setHistory3D] = useState([]);
  const [resfLive, setResfLive] = useState(false);
  const [resfTwoD, setResfTwoD] = useState(false);

  //  //const {results, Loaded} = fetch2dResult();
  // //  let {history,loadedHis} = fetchHistory({page, limit})
  //  useEffect(()=>{
  //  setHistory2D(history);
  //  },[loadedHis,history])
 
    useEffect(() => {
      const fetch = () => {
        axios
          .get(_Live, {
            headers: { "Content-Type": "application/json" },
          })
          .then((e) => e.status === 200 && setLive2D(e.data))
          .catch((error) => console.log(error))
          
      };
      fetch();
    }, [resfLive]);
   useEffect(() => {
    const fetch = () =>{
      axios
       .get(_2D_RESULT, {
         headers: { "Content-Type": "application/json" },
       })
       .then((e) => e.status === 200 && setResults2D(e.data))
      //  .finally(()=>console.log(results2D))
       .catch((error) => console.debug(error))
    };
    fetch();
   }, [resfTwoD]);
   useEffect(() => {
     const fetch = () => {
       axios
         .get(_2d_URL, {
           headers: { "Content-Type": "application/json" },
         })
         .then((e) => e.status === 200 && setHistory3D(e.data))
         .catch((error) => console.log(error))
    
     };
     fetch();
   }, []);
    return (
      <DataContext.Provider
        value={{
          live2D,
          results2D,
          history2D,
          setHistory2D,
          history3D,
          setResfLive,
          resfLive,
          setResfTwoD,
          resfTwoD
        
        }}
      >
        {children}
      </DataContext.Provider>
    );
}
export default Data