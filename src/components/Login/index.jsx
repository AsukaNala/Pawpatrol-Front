import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAuth, login } from "../../context/AuthContext";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";

const Login = () => {
  const {
    state: { loading, error, token, user },
    dispatch,
  } = useAuth().value;

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(dispatch, email, password);
  };

  return (
    <>
      <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={handleLogin}>
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
            Login
          </Button>

          {loading && <Loader />}
          {error && <Alert severity="error">{error}</Alert>}
          <p>If you don't have an account</p>
          <Link to="/signin">
            <Button variant="outlined">Signin</Button>
          </Link>
        </form>
      </Box>
      {token && user && <Navigate to="/select" />}
    </>
  );
};

export default Login;
