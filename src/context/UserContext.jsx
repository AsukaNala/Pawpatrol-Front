import { createContext, useContext, useReducer } from "react";
import { userReducer, initialState } from "../reducers/userReducer";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../actions/userActions";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const value = { state, dispatch };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export {
  UserProvider,
  useUser,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
