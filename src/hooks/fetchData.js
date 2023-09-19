import axios from "axios"
import { _2d_URL } from "./config";
import { useContext } from "react";
import DataContext from "../services/data/dataContext";


export const fetchData = (param) => {(
   axios.get(_2d_URL, {
      params: { param: param },
      headers: { "Content-Type": "application/json" },
    }).then(e=> {
      const response = e.data;

      return response}).catch((error)=>console.log(error))
)}