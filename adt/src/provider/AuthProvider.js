// Importing required things from React
import React, { createContext, useContext, useState, useEffect } from "react";
// Importing navigation hooks from react-router-dom
import { useNavigate, useLocation } from "react-router-dom";

/**
 * This code creates an Authentication Context in React.
 * It helps you manage:
 *  a) Logged-in user data
 *  b) Login functionality
 *  c) Logout functionality
 *  d) Saving user data in sessionStorage
 *  e) Redirecting users after login
 */
/** --------------------------------
 *  Creating a Context
 *  --------------------------------
 *  Context is used to share data globally across components 
 */
const AuthContext = createContext(null);

/** ----------------------------------
 *  AuthProvider component
 *  ----------------------------------
 *  This component will wrap the whole app
 *  so all child components can access authentication data
 */
export const AuthProvider = ({ children }) => {
  // Hook used to navigate between pages
  const navigate = useNavigate();
  // Hook used to get current route/location details
  const location = useLocation();
  /**
   *  If a protected page redirected user to login,
   *  we store that path in location.state.path
   *  Otherwise default path will be dashboard
   */
  const redirectPath = location.state?.path || "/Customer/MyDashboard";
  /**
   * State to store logged-in user information
   * Initially empty object {}
   */
  const [user, setUser] = useState({});
  // useEffect runs when component loads for first time
  useEffect(() => {
    // Print stored user data from sessionStorage
    console.log("sessionStorage [userAuthDetails]", sessionStorage.getItem("userAuthDetails"));
    // Getting stored user details from browser sessionStorage
    const storedUserDetails = sessionStorage.getItem("userAuthDetails");
    // If user data exists in sessionStorage
    if (storedUserDetails !== null) {
      /**
       * Convert JSON string back into JavaScript object
       * and store it in React state
       */
      setUser(JSON.parse(storedUserDetails));
    }
  }, []);

  // This useEffect runs whenever "user" state changes
  useEffect(()=>{
    // Print latest user data
    console.log("user [userAuthDetails]", user);
  },[user]);

  // LOGIN FUNCTION
  const login = (userAuthDetails) => {
    // Save user data in React state
    setUser( userAuthDetails );
    /**
     * Save user data in browser sessionStorage
     * JSON.stringify converts object into string
     */
    sessionStorage.setItem("userAuthDetails", JSON.stringify(userAuthDetails));
    // Redirect user after login
    navigate(redirectPath, { replace: true });
  };

  // LOGOUT FUNCTION
  const logout = () => {
    // Clear user state
    setUser({});
    /**
     * NOTE:
     * sessionStorage is NOT cleared here
     * Usually we also remove stored data like this:
     * sessionStorage.removeItem("userAuthDetails");
     */
  };
  
  // Providing values globally
  return (
    <AuthContext.Provider 
      value={{ 
        user, // logged-in user data
        login, // login function
        logout // logout function
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
