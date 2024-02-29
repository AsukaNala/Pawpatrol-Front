import { useEffect } from "react";
import { getFoundPets, useFoundPet } from "../../context/FoundPetContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

const FoundPetsList = () => {
  const {
    state: { foundPets, selectedFoundPets, loading, error },
    dispatch,
  } = useFoundPet();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getFoundPets(dispatch);
    }
    fetchData();
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    navigate(`/foundpets/${id}`);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Grid container spacing={3}>
        {foundPets.map((foundPet) => (
          <Grid item xs={12} sm={6} md={3} key={foundPet.id}>
            <Card sx={{ maxWidth: 345, margin: 3, marginLeft: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={`${import.meta.env.VITE_IMAGE_URL}/${
                  foundPet ? foundPet.photo : ""
                }`}
                title={foundPet.type}
              />
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  Missing Since: {foundPet.foundDate}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Missing Location: {foundPet.foundLocation}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Updated Date:{" "}
                  {new Date(foundPet.updatedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="mideum"
                  color="primary"
                  data-id={foundPet.id}
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
export default FoundPetsList;
