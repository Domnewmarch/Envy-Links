import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import '../styles/globals.css';

// Create a Context for Auth
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser
  };

  return <AuthContext.Provider value={value}>{loading ? <div>Loading...</div> : <Component {...pageProps} />}</AuthContext.Provider>;
}

export default MyApp;
