const getFoundPets = async (dispatch) => {
  dispatch({ type: "FETCH_FPTs_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/foundpets`);
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_FPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "No pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_FPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching found pets", error);
    dispatch({ type: "FETCH_FPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getFoundPet = async (dispatch, id) => {
  dispatch({ type: "FETCH_FPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/${id}`
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "FETCH_FPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "FETCH_FPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error fetching found pet", error);
    dispatch({
      type: "FETCH_FPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const createFoundPet = async (dispatch, foundPet, token) => {
  dispatch({ type: "CREATE_FPT_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/foundpets`, {
      method: "POST",
      body: foundPet,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "CREATE_FPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "CREATE_FPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error creating found pet", error);
    dispatch({
      type: "CREATE_FPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const updateFoundPet = async (dispatch, foundPet) => {
  dispatch({ type: "UPDATE_FPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/${id}`,
      {
        method: "PUT",

        body: foundPet,
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "UPDATE_FPT_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "UPDATE_FPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error updating found pet", error);
    dispatch({
      type: "UPDATE_FPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const deleteFoundPet = async (dispatch, id) => {
  dispatch({ type: "DELETE_FPT_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "DELETE_FPT_SUCCESS", payload: id });
    } else {
      dispatch({
        type: "DELETE_FPT_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    console.error("Error deleting found pet", error);
    dispatch({
      type: "DELETE_FPT_FAILURE",
      payload: "Something went wrong",
    });
  }
};

const getFoundPetByUserId = async (dispatch, userId) => {
  dispatch({ type: "FETCH_FPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/user/${userId}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_FPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "No pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_FPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching found pets", error);
    dispatch({ type: "FETCH_FPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getFoundPetsByType = async (dispatch, type) => {
  dispatch({ type: "FETCH_FPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/type/${type}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_FPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "No pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_FPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching found pets", error);
    dispatch({ type: "FETCH_FPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getFoundPetsByStatus = async (dispatch, status) => {
  dispatch({ type: "FETCH_FPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/status/${status}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_FPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "No pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_FPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching found pets", error);
    dispatch({ type: "FETCH_FPTs_FAILURE", payload: "Something went wrong" });
  }
};

const getFoundPetsByLastSeenLocation = async (dispatch, location) => {
  dispatch({ type: "FETCH_FPTs_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/foundpets/location/${location}`
    );
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_FPTs_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "No pets found",
        });
        break;
      case 500:
        dispatch({ type: "FETCH_FPTs_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_FPTs_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    console.error("Error fetching found pets", error);
    dispatch({ type: "FETCH_FPTs_FAILURE", payload: "Something went wrong" });
  }
};

export {
  getFoundPets,
  getFoundPet,
  createFoundPet,
  updateFoundPet,
  deleteFoundPet,
  getFoundPetByUserId,
  getFoundPetsByType,
  getFoundPetsByStatus,
  getFoundPetsByLastSeenLocation,
};
