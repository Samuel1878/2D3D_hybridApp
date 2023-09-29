import axios from "axios";
import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { InstanceReq } from "../libs/helper/axios_get";
import { _2d_HISTORY } from "./config";
import { error } from "jquery";

const FetchHistory = ({page,limit})=>{
    const [history,setHistory] = useState([]);
    const [loadedHis, setLoaded] = useState(false);
    useEffect(()=>{
        // const instanceFetcher = async()=>{
             axios
               .get( _2d_HISTORY, {
                 params: { page: page,limit:limit },
                 headers: { "Content-Type": "application/json" },
               })
               .then((e) => e.status === 200 && setHistory(e.data))
               .finally(()=>setLoaded(true))
               .catch((error) => console.log(error));
            
        
    },[page,limit])
    return {history,loadedHis}
}
export default FetchHistory