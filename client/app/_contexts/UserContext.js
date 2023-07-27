import { createContext, useContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom hook to use the UserContext
export function useUserContext() {
  return useContext(UserContext);
}

// Context provider component
export function UserContextProvider({ children }) {
  const [session, setSession] = useState(null);

  // You can update the session data whenever needed
  // For example, after successful login or logout

  return (
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
}
