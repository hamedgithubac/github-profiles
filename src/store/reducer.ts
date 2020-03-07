import {
  FETCH_USER_STARTED,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
} from './actions';
const initialState = {
  loading: false,
  userInfo: {},
  repos: [],
  error: null,
};
const githubUserInfo = (state: any = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        userInfo: []
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: {...action.payload.userInfo},
        repos: [...action.payload.repos]
      };
    default:
      return state;
  }
};

export default githubUserInfo;
