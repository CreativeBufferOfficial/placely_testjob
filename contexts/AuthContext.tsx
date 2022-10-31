import React, { createContext } from "react";
import Cookies from "js-cookie";

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
    getToken = Cookies.get('token');
  }
  const [authState, setAuthState] = React.useState({
   token: getToken,
  });

  const setUserAuthInfo = (token: string) => {
   if (typeof window !== 'undefined') {
    Cookies.set("token", token);
   }
   setAuthState({
    token,
   });
 };

 const removeUserInfo = () => {
  if (typeof window !== 'undefined') {
     Cookies.remove('token', { path: '' })
  }
  setAuthState({
   token: null,
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