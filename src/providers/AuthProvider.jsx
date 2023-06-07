import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const AuthData = {
    isOpen1,
    setIsOpen1,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
