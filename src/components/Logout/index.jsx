import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { logout, useAuth } from "../../context/AuthContext";

const Logout = () => {
  const {
    authState: { isAuthenticated },
    dispatch,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(dispatch);
    navigate("/logout");
  };

  const handleLogin = () => {
    navigate("/");
  };

  const LogoutDisplay = () => {
    return (
      <>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  };

  const LoginDisplay = () => {
    return (
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    );
  };

  return isAuthenticated ? <LogoutDisplay /> : <LoginDisplay />;
};
export default Logout;
