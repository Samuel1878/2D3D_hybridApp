import * as SecureStore from "expo-secure-store";
import { useEffect, useMemo, useReducer } from "react";
import AuthContext from "./authContext";
 const initialValue = {
   isLoading: true,
   isSignout: false,
   userToken: null,
 };

export default function AuthProvider({children}) {
    const [state,dispatch] = useReducer((prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },initialValue);
   
    useEffect(()=>{
        const restoreToken = async()=>{
            let userToken;
            try{
                userToken = await SecureStore.getItemAsync("userToken");
            }catch(e){
                //Restoring failed
                console.error("Restoring token failed:" + e.message)
            }
            dispatch({type:"RESTORE_TOKEN", token:userToken});
        };
        restoreToken();
    },[]);
    const authContext = useMemo(()=>({
        signIn:async(userToken)=>{
            dispatch({type:"SIGN_IN", token:userToken});
            await SecureStore.setItemAsync("userToken", userToken);
        },
        signOut:()=>{
            dispatch({type:"SIGN_OUT"});
            SecureStore.deleteItemAsync("userToken");
        },
        userToken:state.userToken
    }));
    return(
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}