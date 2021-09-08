import { _getUsers } from "../../utils/_Data";

export const GET_USERS = "GET_USERS";

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const getInitialUsers = () => async (dispatch) => {
  try {
    const users = await _getUsers();
    await dispatch(getUsers(users));
  } catch (error) {
    console.log(`Error from getInitialUsers ${error}`);
  }
};
