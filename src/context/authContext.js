import { createContext, useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const cookies = new Cookies();

  const values = {};
  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  // !! Booleane cevirmek icin kullanılır.
  return { ...context, isAuth: Boolean(Object.keys(context).length) };
};

export { useAuth };

export default AuthProvider;
