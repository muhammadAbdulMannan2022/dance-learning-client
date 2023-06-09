import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: change the status and role
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userFdb, setUserFdb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const emailPasswordSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUserEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    signOut(auth).then(() => {
      console.log("sign out success");
    });
  };
  // const getCurrentUser = () => {
  //   setLoading(true);

  // };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (user) {
        setLoading(true);
        console.log(loading);
        fetch(`http://localhost:5000/user?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setUserFdb(data);
            setLoading(false);
          });
      }
      // setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  const AuthData = {
    isOpen1,
    setIsOpen1,
    user,
    userFdb,
    loading,
    setLoading,
    logOutUser,
    gitHubLogin,
    emailPasswordSignup,
    logInUserEmailPassword,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
