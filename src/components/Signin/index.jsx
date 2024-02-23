import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAuth, login } from "../../context/AuthContext";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";
import { signinReducer, initialState } from "../../reducers/signinReducer";
import { useReducer } from "react";
// import { signin } from "../../actions/signinActions";

const Signin = () => {
  const {
    authState: { loading, error, token, user },
    dispatch: authDispatch,
  } = useAuth();
  const [state, dispatch] = useReducer(signinReducer, initialState);

  const handleSignin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch({ type: "SIGNIN_REQUEST" });
    try {
      fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === 200) {
            dispatch({ type: "SIGNIN_SUCCESS", payload: data.data });
            login(authDispatch, email, password);
          } else {
            dispatch({ type: "SIGNIN_FAILURE", payload: data.message });
          }
        });
    } catch (error) {
      console.error("Error signing in", error);
      dispatch({
        type: "SIGNIN_FAILURE",
        payload: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <>
      <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={handleSignin}>
          <label>
            <strong>Name</strong>
          </label>
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            type="text"
            placeholder="Please enter your name"
            margin="normal"
          />
          <label>
            <strong>Email</strong>
          </label>
          <TextField
            fullWidth
            required
            id="email"
            name="email"
            type="email"
            placeholder="Please enter your email address"
            margin="normal"
          />
          <label>
            <strong>Password</strong>
          </label>
          <TextField
            fullWidth
            required
            id="password"
            name="password"
            type="password"
            placeholder="Please enter your password"
            margin="normal"
          />

          <Button type="submit" variant="contained">
            Signin
          </Button>
          {loading && <Loader />}
          {error && <Alert severity="error">{error}</Alert>}
        </form>
      </Box>
      {token && user && <Navigate to="/select" />}
    </>
  );
};
export default Signin;
