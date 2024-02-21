import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Loader from "../Loader";
// import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";

const Login = () => {
  //TO DO!  add state for email and password or reducer, and dispatch here

  const loginUser = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //TO DO!  add login logic here
  };

  return (
    <Box textAlign="center">
      <FormControl sx={{ width: "500px" }} onSubmit={loginUser}>
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
        <Link to="/select">
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Link>
        {/* {loading && <Loader />} */}
        {/* {error && <Alert severity="error" message={error} />} */}
        <p>If you don't have an account</p>
        <Link to="/signin">
          <Button variant="outlined">Sign Up</Button>
        </Link>
      </FormControl>
    </Box>
  );
};

export default Login;
