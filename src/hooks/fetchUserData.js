// import { useContext, useEffect, useState } from "react";
// import GlobalContext from "../services/global/globalContext";
// import axios from "axios"
// import { USER_DATA } from "./config";

// const restoreUserData = (userToken)=>{
//     const [userData,setUserData] = useState([]);
//     const [loadedD, setLoadedD] = useState(false);

//      useEffect(()=>{
//           userToken && axios
//                .get(USER_DATA, {
//                  params: { token: userToken },
//                  headers: { "Content-Type": "application/json" },
//                })
//                .then((res) => {
//                  if (res.data.code === 201||200) {
//                     setUserData(res.data);
//                     console.log(res.data.code);
//                     return
//                  } else { 
//                    console.debug(res.data?.message);
//                  }
//                })
//                .finally(()=>setLoadedD(true))
//                .catch((err) => console.warn(err));
//      },[userToken]);
//      return [userData,loadedD]

// }
// export default restoreUserData;
  