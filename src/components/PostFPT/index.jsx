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
import { useFoundPet, createFoundPet } from "../../context/FoundPetContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const PostFPT = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    state: { itemLoading, itemError },
    dispatch,
  } = useFoundPet();

  const [type, setType] = useState("");
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handlePostFPT = async (e) => {
    e.preventDefault();

    const type = e.target.type.value;
    const colour = e.target.colour.value;
    const foundLocation = e.target.foundLocation.value;
    const comment = e.target.comment.value;
    const photo = e.target.photo.files[0];
    const status = e.target.status.value;

    const formData = new FormData();

    formData.append("type", type);
    formData.append("colour", colour);
    formData.append("foundDate", date.toISOString().split("T")[0]);
    formData.append("foundLocation", foundLocation);
    formData.append("comment", comment);
    formData.append("photo", photo);
    formData.append("status", status);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    await createFoundPet(dispatch, formData, token);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <Grid container spacing={2} justifyContent="center">
          <form onSubmit={handlePostFPT}>
            <Grid item xs={12}>
              <label>
                <strong>Pet Type</strong>
              </label>

              <Select
                placeholder="Please select type"
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
                placeholder="Please enter  colour"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <label>
                <strong>Found on </strong>
              </label>
              <DatePicker
                id="foundDate"
                name="foundDate"
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
                {/* add map? */}
                <strong>Found Location </strong>
              </label>
              <TextField
                id="foundLocation"
                name="foundLocation"
                type="text"
                required
                placeholder="Where did you find it?"
                variant="outlined"
                fullWidth
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
                placeholder="Please enter any additional information."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              {/* probably other fields */}
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
                placeholder="Change to found if the pet is reunited with the owner."
                id="status"
                name="status"
                fullWidth
                value={status}
                onChange={handleStatusChange}
              >
                <MenuItem value="unclaimed">Unclaimed</MenuItem>
                <MenuItem value="claimed">Claimed</MenuItem>
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
                Thank you for sharing the information!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to="/missingpets/search"
                size="medium"
              >
                Let's help it find the owner!
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PostFPT;
