export const initialState = {
  missingPets: [],
  currentMissingPet: null,
  selectedMissingPet: null,
  loading: false,
  itemLoading: false,
  error: null,
  itemError: null,
};

export const missingPetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MPTs_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MPTs_SUCCESS":
      return {
        ...state,
        missingPets: action.payload,
        loading: false,
      };
    case "FETCH_MPTs_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FETCH_MPT_REQUEST":
      return {
        ...state,
        itemLoading: true,
        itemError: null,
      };
    case "FETCH_MPT_SUCCESS":
      return {
        ...state,
        currentMissingPet: action.payload,
        itemLoading: false,
      };
    case "FETCH_MPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "SELECT_MPT":
      return {
        ...state,
        selectedMissingPet: action.payload,
      };
    case "CREATE_MPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "CREATE_MPT_SUCCESS":
      return {
        ...state,
        missingpets: [...state.missingPets, action.payload],
        itemLoading: false,
      };
    case "CREATE_MPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "UPDATE_MPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "UPDATE_MPT_SUCCESS":
      return {
        ...state,
        missingPets: state.missingPets.map((missingPet) =>
          missingPet.id === action.payload.id ? action.payload : missingPet
        ),
        itemLoading: false,
      };
    case "UPDATE_MPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "DELETE_MPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "DELETE_MPT_SUCCESS":
      return {
        ...state,
        missingPets: state.missingPets.filter(
          (missingPet) => missingPet.id !== action.payload
        ),
        itemLoading: false,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    default:
      return state;
  }
};
