import { useContext, useEffect, useState } from "react"
import BetContext from "./betContext"
import SocketContext from "../socket/socketContext";
import { UPDATED_INFO } from "../../libs/actions";
import restoreUserData from "../../hooks/fetchUserData";
import AuthContext from "../auth/authContext";

const BetProvider =({children})=>{
    const [betDigits2D, setBetDigits2D] = useState([]);
    const [betDigits3D, setBetDigits3D] = useState([]);
    const {socket}= useContext(SocketContext);
      const { userToken } = useContext(AuthContext);
    return(
        <BetContext.Provider
            value={{betDigits2D,setBetDigits2D,betDigits3D,setBetDigits3D}}>
            {children}
        </BetContext.Provider>
    )
}
export default BetProvider