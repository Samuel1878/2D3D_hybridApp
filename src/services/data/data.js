import { useEffect, useMemo, useState,memo } from "react"
import DataContext from "./dataContext"
import fetchData from "../../hooks/fetchData";
import fetchHistory from "../../hooks/fetchHistory";
const Data =({children}) => {
  const [live2D,setLive2D] = useState({});
  const [results2D, setResults2D] = useState({});
  const [history2D, setHistory2D] = useState([]);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(5);
    const [history3D, setHistory3D] = useState([]);
    const { response,
        results,
        threeD, 
        loaded } = fetchData(["live", "results", "threed"]);
   let {history,loadedHis} = fetchHistory({page, limit})
   useEffect(()=>{
   loadedHis && setHistory2D(history);
   console.debug(history) 
   },[loadedHis,history.length])
    useEffect(() => {
      loaded &&
            setLive2D(response)
          setResults2D(results)
          setHistory3D(threeD?.["data"])
      
    }, [loaded]);
    return (
      <DataContext.Provider
        value={{
          live2D,
          results2D,
          history2D,
          history3D,
          setLimit,
          setPage,
          page,
          limit,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}
export default Data