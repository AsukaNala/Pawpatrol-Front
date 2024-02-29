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
import { getFoundPets, useFoundPet } from "../../context/FoundPetContext";
import FoundPetsList from "../FoundPetsList";

const SearchFPT = () => {
  const {
    state: { foundPets, loading, error },
    dispatch,
  } = useFoundPet();

  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showFilteredResults, setShowFilteredResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getFoundPets(dispatch);
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setFilteredPets(
      foundPets.filter(
        (pet) =>
          (!selectedType || pet.type === selectedType) &&
          (!selectedLocation || pet.foundLocation === selectedLocation) &&
          (!selectedStatus || pet.status === selectedStatus)
      )
    );
  }, [foundPets, selectedType, selectedLocation, selectedStatus]);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    navigate(`/foundpets/${id}`);
  };

  return (
    <>
      <Box className="responsive-box">
        <label>
          <strong>Pet Type</strong>
        </label>

        <Select
          sx={{ width: 200, margin: "20px 30px" }}
          placeholder="Please select type"
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
          <strong>Found Location </strong>
        </label>
        <TextField
          sx={{ width: 300, margin: "20px 30px" }}
          id="foundLocation"
          name="foundLocation"
          type="text"
          value={selectedLocation}
          onChange={handleLocationChange}
          required
          placeholder="Where did you find it?"
          variant="outlined"
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
          <MenuItem value="unclaimed">Unclaimed</MenuItem>
          <MenuItem value="claimed">Claimed</MenuItem>
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
        <FoundPetsList />
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
                  title={filteredPet.type}
                />
                <CardContent>
                  <Typography variant="body1" color="text.secondary">
                    Missing Since: {filteredPet.foundDate}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Missing Location: {filteredPet.foundLocation}
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
                to="/foundpets/search"
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

export default SearchFPT;
