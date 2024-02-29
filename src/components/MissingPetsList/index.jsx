import { useEffect } from "react";
import { getMissingPets, useMissingPet } from "../../context/MissingPetContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MissingPetsList = () => {
  const {
    state: { missingPets, loading, error },
    dispatch,
  } = useMissingPet();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getMissingPets(dispatch);
    }
    fetchData();
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    navigate(`/missingpets/${id}`);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Grid container spacing={3}>
        {missingPets.map((missingPet) => (
          <Grid item xs={12} sm={6} md={3} key={missingPet.id}>
            <Card sx={{ maxWidth: 345, margin: 3, marginLeft: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={`${import.meta.env.VITE_IMAGE_URL}/${
                  missingPet ? missingPet.photo : ""
                }`}
                title={missingPet.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {missingPet.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Missing Since: {missingPet.lostDate}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Missing Location: {missingPet.lastSeenLocation}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Updated Date:{" "}
                  {new Date(missingPet.updatedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="mideum"
                  color="primary"
                  data-id={missingPet.id}
                  onClick={handleClick}
                >
                  Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default MissingPetsList;
