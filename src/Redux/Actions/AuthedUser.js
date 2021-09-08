export const AUTHED_USER = "AUTHED_USER";
export const REMOVE_USER = "REMOVE_USER";

export const authedUser = (authedUser) => ({
  type: AUTHED_USER,
  payload: authedUser,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
