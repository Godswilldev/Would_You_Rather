import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./formActions";

const initialState = {
  posts: {
    title: "",
    message: "",
  },
  loading: false,
  error: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };

    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default formReducer;
