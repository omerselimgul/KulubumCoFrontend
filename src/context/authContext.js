import jwtDecode from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = new Cookies().get('KulubumCo');
  const [user, setUser] = useState(null);

  const values = { ...user };

  useEffect(() => {
    if (token) {
      try {
        const res = jwtDecode(token);
        setUser(res);
      } catch (error) {
        setUser(null);
      }
    }
  }, [token]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  // !! Booleane cevirmek icin kullanılır.
  return { ...context, isAuth: Boolean(Object.keys(context).length) };
};

export { useAuth };

export default AuthProvider;
