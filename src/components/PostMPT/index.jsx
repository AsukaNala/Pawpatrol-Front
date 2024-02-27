import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem } from "@mui/material";
import {
  useMissingPet,
  createMissingPet,
} from "../../context/MissingPetContext";
import { useState } from "react";

const PostMPT = () => {
  const {
    state: { missingPets, itemLoading, itemError },
    dispatch,
  } = useMissingPet();

  const [type, setType] = useState("");
  const [date, setDate] = useState(null);

  const handleOnchange = (e) => {
    console.log(e.target.value);
  };

  const handleTypeChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleDateChange = (e) => {
    console.log(e.$d);
    setDate(e);
  };
  const handlePostMPT = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const type = e.target.type.value;
    const colour = e.target.colour.value;
    const lastSeenLocation = e.target.lastSeenLocation.value;
    const comment = e.target.comment.value;
    const photo = e.target.photo.files[0];

    // const handleSubmit = async () => {
    //   const formattedDate = selectedDate.toISOString().split("T")[0];
    //   // フォーマットされた日付をサーバーに送信する処理を記述する
    // };

    const formData = new FormData();
    formData.append("name", name);

    formData.append("type", type);
    formData.append("colour", colour);
    formData.append("lostDate", date.toISOString().split("T")[0]);
    formData.append("lastSeenLocation", lastSeenLocation);
    formData.append("comment", comment);
    formData.append("photo", photo);

    await createMissingPet(dispatch, formData);
    console.log(missingPets);
  };

  return (
    <>
      {/* <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "center" }}
      > */}
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
              onChange={handleOnchange}
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
              <MenuItem value="rabbir">Rabbir</MenuItem>
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
              onChange={handleOnchange}
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
              {/* add map? */}
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
              onChange={handleOnchange}
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
              onChange={handleOnchange}
            />
          </Grid>
          <Grid item xs={12}>
            {/* probably other fields */}
            <label>
              <strong>Upload a photo </strong>
            </label>
            <TextField id="photo" name="photo" type="file" variant="outlined" />
          </Grid>
          <br />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Grid>
      {/* </Box> */}
    </>
  );
};

export default PostMPT;
