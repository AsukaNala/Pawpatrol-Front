import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAuth, login } from "../../context/AuthContext";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <form>
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

          {/* {loading && <Loader />} */}
          {/* {error && <Alert severity="error" message={error} />} */}
        </form>
      </Box>
    </>
  );
};

export default Signin;
