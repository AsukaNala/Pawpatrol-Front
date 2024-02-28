import { createContext, useContext, useReducer } from "react";
import { foundPetReducer, initialState } from "../reducers/foundPetReducer";
import {
  getFoundPets,
  getFoundPet,
  createFoundPet,
  updateFoundPet,
  deleteFoundPet,
  getFoundPetByUserId,
  getFoundPetsByType,
  getFoundPetsByStatus,
  getFoundPetsByLastSeenLocation,
} from "../actions/foundPetActions";

const FoundPetContext = createContext();

const FoundPetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foundPetReducer, initialState);
  return (
    <FoundPetContext.Provider value={{ state, dispatch }}>
      {children}
    </FoundPetContext.Provider>
  );
};

const useFoundPet = () => {
  const context = useContext(FoundPetContext);
  if (context === undefined) {
    throw new Error("useFoundPet must be used within a FoundPetProvider");
  }
  return context;
};

export {
  FoundPetProvider,
  useFoundPet,
  getFoundPets,
  getFoundPet,
  createFoundPet,
  updateFoundPet,
  deleteFoundPet,
  getFoundPetByUserId,
  getFoundPetsByType,
  getFoundPetsByStatus,
  getFoundPetsByLastSeenLocation,
};
