export const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user, //or action.payload?
        loading: false,
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
