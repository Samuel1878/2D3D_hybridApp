import { useContext, useEffect, useState } from "react"
import BetContext from "./betContext"
import SocketContext from "../socket/socketContext";

const BetProvider =({children})=>{
    const [betDigits2D, setBetDigits2D] = useState([]);
    const [betDigits3D, setBetDigits3D] = useState([]);
    const {socket}= useContext(SocketContext)
    console.log(betDigits2D);

    useEffect(()=>{
        socket && socket.emit("BET_OPEN",{date:"af200923",limit:10000})
    },[socket])
    return(
        <BetContext.Provider
            value={{betDigits2D,setBetDigits2D,betDigits3D,setBetDigits3D}}>
            {children}
        </BetContext.Provider>
    )
}
export default BetProvider