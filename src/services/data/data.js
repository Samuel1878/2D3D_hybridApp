import { useEffect, useMemo, useState } from "react"
import DataContext from "./dataContext"
import fetchData from "../../hooks/fetchData";
import fetchHistory from "../../hooks/fetchHistory";

const Data = ({children}) => {
  const [live2D,setLive2D] = useState({});
  const [results2D, setResults2D] = useState({});
  const [history2D, setHistory2D] = useState([]);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(5)
    const [history3D, setHistory3D] = useState([]);
    const { response,results,threeD, loaded } = fetchData(["live","results","threed"]);
    const {history,loadedHis} = fetchHistory({page,limit});
   useEffect(()=>{
    loadedHis && setHistory2D(history);
    console.log(results)
   },[loadedHis])
    useEffect(() => {
      loaded &&
            setLive2D(response)
          setResults2D(results)
          setHistory3D(threeD?.["data"])
      
    }, [loaded]);
    return (
      <DataContext.Provider
        value={{
        loaded,
          live2D,
          results2D,
          history2D,
          history3D,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}
export default Data