import Box from "@mui/material/Box";
import { Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMissingPets, useMissingPet } from "../../context/MissingPetContext";
import MissingPetsList from "../MissingPetsList";
import Autocomplete from "react-google-autocomplete";

const SearchMPT = () => {
  const {
    state: { missingPets, loading, error },
    dispatch,
  } = useMissingPet();

  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showFilteredResults, setShowFilteredResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getMissingPets(dispatch);
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setFilteredPets(
      missingPets.filter(
        (pet) =>
          (!selectedType || pet.type === selectedType) &&
          (!selectedLocation || pet.lastSeenLocation === selectedLocation) &&
          (!selectedStatus || pet.status === selectedStatus)
      )
    );
  }, [missingPets, selectedType, selectedLocation, selectedStatus]);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleAutocomplete = (place) => {
    setSelectedLocation(place.formatted_address);
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    navigate(`/missingpets/${id}`);
  };

  return (
    <>
      <Box className="responsive-box">
        <label>
          <strong>Pet Type</strong>
        </label>

        <Select
          sx={{ width: 200, margin: "20px 30px" }}
          placeholder="Please select your pet type"
          id="type"
          name="type"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <MenuItem value="dog">Dog</MenuItem>
          <MenuItem value="cat">Cat</MenuItem>
          <MenuItem value="bird">Bird</MenuItem>
          <MenuItem value="rabbit">Rabbit</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>

        <label>
          <strong>Missing Location </strong>
        </label>
        <TextField
          sx={{ width: 300, margin: "20px 30px" }}
          id="lastSeenLocation"
          name="lastSeenLocation"
          type="text"
          required
          placeholder="Where was your pet last seen?"
          variant="outlined"
          value={selectedLocation}
          onChange={handleLocationChange}
          InputProps={{
            inputComponent: Autocomplete,
            inputProps: {
              apiKey: "AIzaSyCBxFaO8j45Vcyo7eR1XOqPY93QtWdt328",
              onPlaceSelected: handleAutocomplete,
            },
          }}
        />
        <label>
          <strong>Status</strong>
        </label>
        <Select
          sx={{ width: 200, margin: "20px 30px" }}
          id="status"
          name="status"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <MenuItem value="missing">Missing</MenuItem>
          <MenuItem value="found">Found</MenuItem>
        </Select>

        <Button
          type="submit"
          variant="contained"
          onClick={() => setShowFilteredResults(true)}
        >
          Search
        </Button>
      </Box>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!showFilteredResults ? (
        <MissingPetsList />
      ) : showFilteredResults && filteredPets.length > 0 ? (
        <Grid container spacing={3}>
          {filteredPets.map((filteredPet) => (
            <Grid item xs={12} sm={6} md={3} key={filteredPet.id}>
              <Card sx={{ maxWidth: 345, margin: 3, marginLeft: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={`${import.meta.env.VITE_IMAGE_URL}/${
                    filteredPet ? filteredPet.photo : ""
                  }`}
                  title={filteredPet.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {filteredPet.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Missing Since: {filteredPet.lostDate}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Missing Location: {filteredPet.lastSeenLocation}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="mideum"
                    color="primary"
                    data-id={filteredPet.id}
                    onClick={handleClick}
                  >
                    Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="body1">
                No result found. Please try again.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to="/missingpets/search"
                size="medium"
                onClick={() => setShowFilteredResults(false)}
              >
                Go Back
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default SearchMPT;
