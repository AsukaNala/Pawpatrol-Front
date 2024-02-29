import { useEffect } from "react";
import { useFoundPet, getFoundPet } from "../../context/FoundPetContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams, Link } from "react-router-dom";

const FPTDetail = () => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const id = urlParams.id;
  const {
    state: { currentFoundPet, itemLoading, itemError },
    dispatch,
  } = useFoundPet();

  useEffect(() => {
    async function fetchData() {
      await getFoundPet(dispatch, id);
    }
    fetchData();
  }, [dispatch, id]);

  return (
    <Box textAlign="center" sx={{ display: "flex", justifyContent: "center" }}>
      {itemLoading && <p>Loading...</p>}
      {itemError && <p>{itemError}</p>}
      {currentFoundPet && (
        <Card sx={{ maxWidth: 500, marginLeft: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={`${import.meta.env.VITE_IMAGE_URL}/${
              currentFoundPet ? currentFoundPet.photo : ""
            }`}
            title={currentFoundPet.type}
          />
          <CardContent>
            <Typography variant="body1" color="text.primary">
              Found on: {currentFoundPet.foundDate}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Found Location: {currentFoundPet.foundLocation}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Type: {currentFoundPet.type}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Colour: {currentFoundPet.colour}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Already claimed?: {currentFoundPet.status}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Message from Founder: {currentFoundPet.comment}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/foundpets/search`)}
          >
            Back
          </Button>
        </Card>
      )}
    </Box>
  );
};

export default FPTDetail;
