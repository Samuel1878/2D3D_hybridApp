import axios from "axios"
import { _2d_URL } from "./config";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import DataContext from "../services/data/dataContext";


const fetchData =([live, result,threed]) => {
  const [response, setResponse] = useState(null);
  const [threeD, setThreeD] = useState(null)
  const [results, setResults] = useState(null)
  const [loaded, setLoaded] = useState(false);
   useEffect(()=>{ 
    axios
      .get(_2d_URL, {
        params: { param: live },
        headers: { "Content-Type": "application/json" },
      })
      .then((e) => e.status === 200 && setResponse(e.data))
      .catch((error) => console.log(error))
       axios
         .get(_2d_URL, {
           params: { param: result },
           headers: { "Content-Type": "application/json" },
         })
         .then((e) => e.status === 200 && setResults(e.data))
         .catch((error) => console.log(error))
         axios
           .get(_2d_URL, {
             params: { param: threed },
             headers: { "Content-Type": "application/json" },
           })
           .then((e) => e.status === 200 && setThreeD(e.data))
           .catch((error) => console.log(error))
           .finally(
             () =>
               setLoaded(true) 
           );


   },[])
  return {response,results,threeD,loaded}
}
export default fetchData;