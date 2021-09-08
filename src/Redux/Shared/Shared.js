import { getInitialUsers } from "../Actions/Users";

export const handleInitialData = () => async (dispatch) => {
  dispatch(getInitialUsers());
};
