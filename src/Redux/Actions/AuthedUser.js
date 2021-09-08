export const AUTHED_USER = "AUTHED_USER";

export const authedUser = (authedUser) => ({
  type: AUTHED_USER,
  payload: authedUser,
});
