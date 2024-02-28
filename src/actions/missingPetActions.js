const getMissingPets = async (dispatch) => {
  dispatch({ type: "FETCH_MPTs_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/missingpets`);
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_MPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "No missing pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_MPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching missing pets", error);
    dispatch({ type: "FETCH_MPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getMissingPet = async (dispatch, id) => {
  dispatch({ type: "FETCH_MPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/${id}`
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "FETCH_MPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "FETCH_MPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error fetching missing pet", error);
    dispatch({
      type: "FETCH_MPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const createMissingPet = async (dispatch, missingPet, token) => {
  dispatch({ type: "CREATE_MPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets`,
      {
        method: "POST",
        body: missingPet,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "CREATE_MPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "CREATE_MPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error creating missing pet", error);
    dispatch({
      type: "CREATE_MPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const updateMissingPet = async (dispatch, missingPet) => {
  dispatch({ type: "UPDATE_MPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/${id}`,
      {
        method: "PUT",

        body: missingPet,
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "UPDATE_MPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "UPDATE_MPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error updating missing pet", error);
    dispatch({
      type: "UPDATE_MPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const deleteMissingPet = async (dispatch, id) => {
  dispatch({ type: "DELETE_MPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "DELETE_MPT_SUCCESS", payload: id });
    } else {
      dispatch({
        type: "DELETE_MPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error deleting missing pet", error);
    dispatch({
      type: "DELETE_MPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const getMissingPetByUserId = async (dispatch, userId) => {
  dispatch({ type: "FETCH_MPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/user/${userId}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_MPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "No missing pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_MPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching missing pets", error);
    dispatch({ type: "FETCH_MPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getMissingPetsByType = async (dispatch, type) => {
  dispatch({ type: "FETCH_MPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/type/${type}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_MPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "No missing pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_MPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching missing pets", error);
    dispatch({ type: "FETCH_MPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getMissingPetsByStatus = async (dispatch, status) => {
  dispatch({ type: "FETCH_MPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/status/${status}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_MPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "No missing pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_MPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching missing pets", error);
    dispatch({ type: "FETCH_MPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getMissingPetsByLastSeenLocation = async (dispatch, location) => {
  dispatch({ type: "FETCH_MPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/missingpets/location/${location}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_MPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "No missing pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_MPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_MPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching missing pets", error);
    dispatch({ type: "FETCH_MPTs_FAILURE", payload: "Something went wrong" });
  }
};

export {
  getMissingPets,
  getMissingPet,
  createMissingPet,
  updateMissingPet,
  deleteMissingPet,
  getMissingPetByUserId,
  getMissingPetsByType,
  getMissingPetsByStatus,
  getMissingPetsByLastSeenLocation,
};
