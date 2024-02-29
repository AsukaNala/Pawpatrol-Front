import { useEffect } from "react";
import { useMissingPet, getMissingPet } from "../../context/MissingPetContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams, Link } from "react-router-dom";

const MPTDetail = () => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const id = urlParams.id;
  const {
    state: { currentMissingPet, itemLoading, itemError },
    dispatch,
  } = useMissingPet();

  useEffect(() => {
    async function fetchData() {
      await getMissingPet(dispatch, id);
    }
    fetchData();
  }, [dispatch, id]);

  return (
    <Box textAlign="center" sx={{ display: "flex", justifyContent: "center" }}>
      {itemLoading && <p>Loading...</p>}
      {itemError && <p>{itemError}</p>}
      {currentMissingPet && (
        <Card sx={{ maxWidth: 500, marginLeft: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={`${import.meta.env.VITE_IMAGE_URL}/${
              currentMissingPet ? currentMissingPet.photo : ""
            }`}
            title={currentMissingPet.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              {currentMissingPet.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Missing Since: {currentMissingPet.lostDate}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Missing Location: {currentMissingPet.lastSeenLocation}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Type: {currentMissingPet.type}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Colour: {currentMissingPet.colour}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Still Missing?: {currentMissingPet.status}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Message from Owner: {currentMissingPet.comment}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/missingpets/search`)}
          >
            Back
          </Button>
        </Card>
      )}
    </Box>
  );
};

export default MPTDetail;
