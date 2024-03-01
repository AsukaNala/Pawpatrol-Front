import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem } from "@mui/material";
import {
  useMissingPet,
  createMissingPet,
} from "../../context/MissingPetContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

const PostMPT = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    state: { itemLoading, itemError },
    dispatch,
  } = useMissingPet();

  const [type, setType] = useState("");
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handlePostMPT = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const type = e.target.type.value;
    const colour = e.target.colour.value;
    const lastSeenLocation = e.target.lastSeenLocation.value;
    const comment = e.target.comment.value;
    const photo = e.target.photo.files[0];
    const status = e.target.status.value;

    const formData = new FormData();
    formData.append("name", name);

    formData.append("type", type);
    formData.append("colour", colour);
    formData.append("lostDate", date.toISOString().split("T")[0]);
    formData.append("lastSeenLocation", lastSeenLocation);
    formData.append("comment", comment);
    formData.append("photo", photo);
    formData.append("status", status);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    await createMissingPet(dispatch, formData, token);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <Grid container spacing={2} justifyContent="center">
          <form onSubmit={handlePostMPT}>
            <Grid item xs={12}>
              <label>
                <strong>Pet Name</strong>
              </label>
              <TextField
                id="name"
                name="name"
                type="text"
                required
                placeholder="Please enter your pet name"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Pet Type</strong>
              </label>

              <Select
                placeholder="Please select your pet type"
                id="type"
                name="type"
                fullWidth
                value={type}
                onChange={handleTypeChange}
              >
                <MenuItem value="dog">Dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="bird">Bird</MenuItem>
                <MenuItem value="rabbit">Rabbit</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Colour</strong>
              </label>
              <TextField
                id="colour"
                name="colour"
                type="text"
                required
                placeholder="Please enter your pet's colour"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Missing Since </strong>
              </label>
              <DatePicker
                id="lostDate"
                name="lostDate"
                type="date"
                required
                variant="outlined"
                value={date}
                inputFormat="yyyy-MM-dd"
                onChange={handleDateChange}
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Missing Location </strong>
              </label>
              <TextField
                id="lastSeenLocation"
                name="lastSeenLocation"
                type="text"
                required
                placeholder="Where was your pet last seen?"
                variant="outlined"
                fullWidth
                value={selectedLocation}
                onChange={handleLocationChange}
                InputProps={{
                  inputComponent: Autocomplete,
                  inputProps: {
                    apiKey: "AIzaSyCBxFaO8j45Vcyo7eR1XOqPY93QtWdt328",
                    onPlaceSelected: (place) => {
                      // console.log(place);
                      setSelectedLocation(place.formatted_address);
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Comment </strong>
              </label>
              <TextField
                id="comment"
                name="comment"
                type="text"
                multiline
                fullWidth
                rows={4}
                required
                placeholder="Please enter any additional information about your pet."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <label>
                <strong>Upload a photo </strong>
              </label>
              <TextField
                id="photo"
                name="photo"
                type="file"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Status</strong>
              </label>

              <Select
                placeholder="Change to found if your pet is found"
                id="status"
                name="status"
                fullWidth
                value={status}
                onChange={handleStatusChange}
              >
                <MenuItem value="missing">Missing</MenuItem>
                <MenuItem value="found">Found</MenuItem>
              </Select>
            </Grid>

            <Button type="submit" variant="contained">
              Submit
            </Button>
            {itemLoading && <Loader />}
            {itemError && <Alert severity="error">{itemError}</Alert>}
          </form>
        </Grid>
      ) : (
        <Box
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <br />
              <Typography variant="h5">
                Thank you for sharing your missing pet information!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to="/foundpets/search"
                size="medium"
              >
                Let's find your pet!
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PostMPT;
