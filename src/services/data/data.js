import { useEffect, useState } from "react"
import DataContext from "./dataContext"
import { fetchData } from "../../hooks/fetchData";
const Data = ({children}) => {
  const [live2D,setLive2D] = useState({});
  const [results2D, setResults2D] = useState({});
  const [history2D, setHistory2D] = useState([]);
    const [history3D, setHistory3D] = useState([]);
    useEffect(()=>{
     setLive2D(fetchData("live"))
    setResults2D(fetchData("results"))
    },[])
    console.log(live2D,results2D)
    return (
      <DataContext.Provider
        value={{
          live2D,
          setLive2D,
          results2D,
          setResults2D,
          history2D,
          setHistory2D,
          history3D,
          setHistory3D,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}
export default Data