import React, { useContext, useState} from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [userResult, setUserResult] = useState(0);
  return (
    <AppContext.Provider value={{  userResult, setUserResult }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
