const signin = async (dispatch, name, email, password) => {
  dispatch({ type: "SIGNIN_REQUEST" });
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.result === 200) {
      dispatch({ type: "SIGNIN_SUCCESS", payload: data.data });
    } else {
      dispatch({ type: "SIGNIN_FAILURE", payload: data.message });
    }
  } catch (error) {
    console.error("Error signing in", error);
    dispatch({
      type: "SIGNIN_FAILURE",
      payload: "Something went wrong. Please try again later.",
    });
  }
};
