import { useContext, useEffect, useState } from "react";
import SocketContext from "./socketContext";
import { io } from "socket.io-client";
import AuthContext from "../auth/authContext";
import { SOCKET_URL } from "../../hooks/config";
import { DISCONNECT, FETCH_INFO, RECEIVE_INFO, UPDATED_INFO } from "../../libs/actions";

import GlobalContext from "../global/globalContext";

const SocketProvider = ({children})=>{
    const [socket, setSocket] = useState(null);
    const {userToken} = useContext(AuthContext);
    const [socketId, setSocketId] = useState(null);
    const { setLevel,
        setName,
        setMoney,
        setPhone,
        setIsLoading,
        setProfile,
        setPayments,
        setPin}= useContext(GlobalContext)
     useEffect(() => {
        cleanUp()
     }, []);
    useEffect(()=>{
        if(userToken){
          const Socket =  socket || connect();
          Socket && Socket.emit(FETCH_INFO,userToken)
        }else{
            cleanUp()
        }
        return ()=> cleanUp();
    },[userToken]);
    function cleanUp(){
        socket && socket.emit(DISCONNECT);
        socket && socket.close();
        setSocket(null);
        setSocketId(null)
    }
    function connect (){
        const socket = io(SOCKET_URL, {
           reconnectionDelayMax: 10000,
         });
         setSocket(socket);
         connectionCallBack(socket)
         return socket;
    }
    function connectionCallBack (socket){
        socket.on(RECEIVE_INFO,(data)=>{
            console.debug(data);
            if(data.code===201){
              setLevel(data.level);
                  setName(data.name);
                  setMoney(data.money);
                  setPhone(data.phone);
                  setProfile(data.image)
                  setPayments(data.payments);
                  setPin(data.pin);
                  setIsLoading(false);
            }
           
        })
        // socket.off(UPDATED_INFO).on(UPDATED_INFO, () => {
        //     //   const [data] = restoredata(userToken);
        //     //   console.debug(data)
        //     });
        
    }
    
    return (
        <SocketContext.Provider value={{socket,socketId,cleanUp}}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketProvider