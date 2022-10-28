import React, { createContext } from "react";
import { useRouter } from "next/router";

interface IauthState{
  token: string | null | undefined
}

type ContextProp = {
  authState: IauthState;
  setAuthState:(id: string)=> void;
  removeUserInfo:()=> void;
  isUserAuthenticated: () => boolean;
}

const AuthContext = createContext<ContextProp | null>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  let getToken;
  if (typeof window !== 'undefined') {
    getToken = localStorage.getItem("token")
  }
  const [authState, setAuthState] = React.useState({
   token: getToken,
  });

  const setUserAuthInfo = (token: string) => {
   if (typeof window !== 'undefined') {
      localStorage.setItem("token", token);
   }
   setAuthState({
    token,
   });
 };

 const removeUserInfo = () => {
  if (typeof window !== 'undefined') {
     localStorage.removeItem("token");
  }
  setAuthState({
   token:null,
  });
};


 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      removeUserInfo: () => removeUserInfo(),
      setAuthState: (userAuthInfo: string) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };