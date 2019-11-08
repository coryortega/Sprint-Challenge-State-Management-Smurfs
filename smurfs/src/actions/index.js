import axios from 'axios';

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

export const smurfsLoading = () => ({ type: FETCH_SMURFS_LOADING });
export const smurfsLoadSuccess = data => ({
  type: FETCH_SMURFS_SUCCESS,
  payload: data
});
export const smurfsLoadFailure = error => ({
  type: FETCH_SMURFS_FAILED,
  payload: error
});

export function fetchSmurfs() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(smurfsLoading());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return axios.get('http://localhost:3333/smurfs')
    .then(function (response) {
    dispatch(smurfsLoadSuccess(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

  };
}


