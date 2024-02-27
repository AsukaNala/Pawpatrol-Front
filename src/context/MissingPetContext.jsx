import { createContext, useContext, useReducer } from "react";
import { missingPetReducer, initialState } from "../reducers/missingPetReducer";
import {
  getMissingPets,
  getMissingPet,
  createMissingPet,
  updateMissingPet,
  deleteMissingPet,
  getMissingPetByUserId,
  getMissingPetsByLastSeenLocation,
  getMissingPetsByStatus,
  getMissingPetsByType,
} from "../actions/missingPetActions";

const MissingPetContext = createContext();

const MissingPetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(missingPetReducer, initialState);
  return (
    <MissingPetContext.Provider value={{ state, dispatch }}>
      {children}
    </MissingPetContext.Provider>
  );
};

const useMissingPet = () => {
  const context = useContext(MissingPetContext);
  if (context === undefined) {
    throw new Error("useMissingPet must be used within a MissingPetProvider");
  }
  return context;
};

export {
  MissingPetProvider,
  useMissingPet,
  getMissingPets,
  getMissingPet,
  createMissingPet,
  updateMissingPet,
  deleteMissingPet,
  getMissingPetByUserId,
  getMissingPetsByLastSeenLocation,
  getMissingPetsByStatus,
  getMissingPetsByType,
};
