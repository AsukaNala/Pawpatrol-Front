import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SelectPage = () => {
  return (
    <div>
      <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack direction="column" spacing={8}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h3">My pet is missing!</Typography>
            <Link to="/missingpets/post">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Post your pet
              </Button>
            </Link>
          </Stack>
          <Stack direction="column" alignItems="center">
            <Typography variant="h3">I found someone's pet!</Typography>
            <Link to="/foundpets/post">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
              >
                Post the pet you found
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default SelectPage;
