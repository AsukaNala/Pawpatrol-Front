import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAuth, login } from "../../context/AuthContext";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Login = () => {
  const {
    authState: { isAuthenticated, loading, error, user },
    dispatch,
  } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(dispatch, email, password);
  };

  return (
    <>
      {!isAuthenticated ? (
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
            <Button component={Link} to="/signin" variant="outlined">
              Sign Up
            </Button>
          </form>
        </Box>
      ) : (
        <Box
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h4" component="div">
                {`Welcome ${user.name}!`}
              </Typography>
              <br />
              <Typography variant="body1">
                You are successfully logged in
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to="/select"
                size="medium"
              >
                Let's get started!
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Login;
