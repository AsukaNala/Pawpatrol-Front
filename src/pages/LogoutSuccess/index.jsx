import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LogoutSuccess = () => {
  return (
    <Box textAlign="center" sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h6">You are successfully logged out!</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LogoutSuccess;
