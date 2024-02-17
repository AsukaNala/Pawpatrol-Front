import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Loader from "../Loader";
// import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

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
        <TextField
          fullWidth
          required
          id="email"
          name="email"
          type="email"
          placeholder="Please enter your email address"
          margin="normal"
        />
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
        {/* {loading && <Loader />} */}
        {/* {error && <Alert severity="error" message={error} />} */}
      </FormControl>
    </Box>
  );
};

export default Login;
