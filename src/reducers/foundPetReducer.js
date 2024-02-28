export const initialState = {
  foundPets: [],
  currentFoundPet: null,
  selectedFoundPet: null,
  loading: false,
  itemLoading: false,
  error: null,
  itemError: null,
};

export const foundPetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FPTs_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_FPTs_SUCCESS":
      return {
        ...state,
        foundPets: action.payload,
        loading: false,
      };
    case "FETCH_FPTs_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FETCH_FPT_REQUEST":
      return {
        ...state,
        itemLoading: true,
        itemError: null,
      };
    case "FETCH_FPT_SUCCESS":
      return {
        ...state,
        currentFoundPet: action.payload,
        itemLoading: false,
      };
    case "FETCH_FPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "SELECT_FPT":
      return {
        ...state,
        selectedFoundPet: action.payload,
      };
    case "CREATE_FPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "CREATE_FPT_SUCCESS":
      return {
        ...state,
        foundpets: [...state.foundPets, action.payload],
        itemLoading: false,
      };
    case "CREATE_FPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "UPDATE_FPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "UPDATE_FPT_SUCCESS":
      return {
        ...state,
        foundPets: state.foundPets.map((foundPet) =>
          foundPet.id === action.payload.id ? action.payload : foundPet
        ),
        itemLoading: false,
      };
    case "UPDATE_FPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    case "DELETE_FPT_REQUEST":
      return {
        ...state,
        itemError: null,
        itemLoading: true,
      };
    case "DELETE_FPT_SUCCESS":
      return {
        ...state,
        foundPets: state.foundPets.filter(
          (foundPet) => foundPet.id !== action.payload
        ),
        itemLoading: false,
      };
    case "DELETE_FPT_FAILURE":
      return {
        ...state,
        itemError: action.payload,
        itemLoading: false,
      };
    default:
      return state;
  }
};
