import axios from "axios";
export const UPDATE_FORM = "UPDATE_FORM";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    title: posts.title,
    message: posts.message,
  },
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const updatePosts = (posts) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const { data } = await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: posts.title,
        message: posts.message,
        userId: 1,
      },
    });
    await dispatch(fetchPostsSuccess(data));
  } catch ({ message }) {
    dispatch(fetchPostsFailure(message));
  }
};
