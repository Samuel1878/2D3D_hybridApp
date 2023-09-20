import axios from "axios";
import { useEffect, useState } from "react"
import { InstanceReq } from "../libs/helper/axios_get";
import { _2d_HISTORY } from "./config";

const fetchHistory = ({page,limit})=>{
    const [history,setHistory] = useState(null);
    const [loadedHis, setLoaded] = useState(false);
    useEffect(()=>{
        let option = {
          method: "GET",
          url: _2d_HISTORY,
          params:{
            page:page,
            limit:limit
          }
          ,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = InstanceReq(option);
        setHistory(response);
        setLoaded(true);
    },[])
    return {history,loadedHis}
}
export default fetchHistory