//  get All users
const getUsers = async (dispatch, token) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    const data = await response.json();
    switch (data.result) {
      case 200:
        console.log(data);
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: data.data });
        break;
      case 404:
        dispatch({ type: "FETCH_USERS_FAILURE", payload: "No users found" });
        break;
      case 500:
        dispatch({ type: "FETCH_USERS_FAILURE", payload: data.message });
        break;
      default:
        dispatch({
          type: "FETCH_USERS_FAILURE",
          payload: "Something went wrong",
        });
        break;
    }
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: "Something went wrong" });
  }
};

//get user by id ....doesn't need token?
const getUser = async (dispatch, id) => {
  dispatch({ type: "FETCH_USER_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`);
    const data = await response.json();
    if (data.result === 200) {
      console.log(data);
      dispatch({ type: "FETCH_USER_SUCCESS", payload: data.data });
    } else {
      disptch({
        type: "FETCH_USER_FAILURE",
        payload: "Something went wrong",
      });
    }
  } catch (error) {
    console.error("Error fetching user", error);
    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: "Something went wrong",
    });
  }
};

//create user
const createUser = async (dispatch, user) => {
  disptch({ type: "CREATE_USER_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.result === 200) {
      dispatch({ type: "CREATE_USER_SUCCESS", payload: data.data });
    } else {
      dispatch({
        type: "CREATE_USER_FAILURE",
        payload: "Something went wrong",
      });
    }
  } catch (error) {
    console.error("Error creating user", error);
    dispatch({ type: "CREATE_USER_FAILURE", payload: "Something went wrong" });
  }
};

//update user ...doesn't need token?
const updateUser = async (dispatch, user) => {
  dispatch({ type: "UPDATE_USER_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: data.data }); //?? or payload: user
    } else {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: "Something went wrong",
      });
    }
  } catch (error) {
    console.error("Error updating user", error);
    dispatch({ type: "UPDATE_USER_FAILURE", payload: "Something went wrong" });
  }
};

const deleteUser = async (dispatch, id) => {
  const deleteUser = confirm("Are you sure you want to delete this user?");
  if (!deleteUser) {
    return false;
  }

  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.result === 200) {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: Number(id) });
    }
  } catch (error) {
    console.error("Error deleting user", error);
    dispatch({ type: "DELETE_USER_FAILURE", payload: "Something went wrong" });
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
