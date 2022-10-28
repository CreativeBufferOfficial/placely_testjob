import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Home from '../../pages';
import SignUp from '../templates/SignUp';

const withAuth = (Component:any) => {
    const Auth = () => {
      const router = useRouter()
      const authContext = useContext(AuthContext);
      if (!authContext?.isUserAuthenticated()) {
        return <Home />;
      }
      return (
        <Component/>
      );
    };

    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;