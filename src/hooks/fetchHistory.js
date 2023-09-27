import axios from "axios";
import { useEffect, useState } from "react"
import { InstanceReq } from "../libs/helper/axios_get";
import { _2d_HISTORY } from "./config";
import { error } from "jquery";

const fetchHistory = async({page,limit})=>{
    const [history,setHistory] = useState([]);
    const [loadedHis, setLoaded] = useState(false);
    useEffect(()=>{
        // const instanceFetcher = async()=>{
            const option = {
              method: "GET",
              url: _2d_HISTORY,
              params: {
                page: page,
                limit: limit,
              },
              headers: {
                "Content-Type": "application/json",
              },
            };
             InstanceReq(option).then((e)=>setHistory(e.data)).finally(()=>setLoaded(true))
            
        
    },[])
    return {history,loadedHis}
}
export default fetchHistory