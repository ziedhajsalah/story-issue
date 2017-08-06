import { push } from 'react-router-redux';
import {
  getAllClients,
  postClient,
  putClient,
  delClient,
} from '../api/clients';

export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE';

export const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE';

export const EDIT_CLIENT_REQUEST = 'EDIT_CLIENT_REQUEST';
export const EDIT_CLIENT_SUCCESS = 'EDIT_CLIENT_SUCCESS';
export const EDIT_CLIENT_FAILURE = 'EDIT_CLIENT_FAILURE';

export const DELETE_CLIENT_REQUEST = 'EDIT_CLIENT_REQUEST';
export const DELETE_CLIENT_SUCCESS = 'EDIT_CLIENT_SUCCESS';
export const DELETE_CLIENT_FAILURE = 'EDIT_CLIENT_FAILURE';

export const fetchClients = () => dispatch => {
  dispatch({ type: FETCH_CLIENTS_REQUEST });

  return getAllClients()
    .then(res => res.json())
    .then(clients =>
      dispatch({
        type: FETCH_CLIENTS_SUCCESS,
        payload: {
          clients,
        },
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_CLIENTS_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};

export const addClient = data => dispatch => {
  dispatch({ type: ADD_CLIENT_REQUEST });

  return postClient(data).then(
    client => {
      dispatch({
        type: ADD_CLIENT_SUCCESS,
        payload: {
          client,
        },
      });
      dispatch(push(`/clients/${client._id}`));
    },
    err =>
      dispatch({
        type: ADD_CLIENT_FAILURE,
        payload: {
          message: err.message,
        },
      }),
  );
};

export const editClient = (id, data) => dispatch => {
  dispatch({ type: EDIT_CLIENT_REQUEST });

  return putClient(id, data)
    .then(res => res.json())
    .then(client =>
      dispatch({
        type: EDIT_CLIENT_SUCCESS,
        payload: {
          client,
        },
      }),
    )
    .catch(err =>
      dispatch({
        type: EDIT_CLIENT_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};

export const deleteClient = id => dispatch => {
  dispatch({ type: DELETE_CLIENT_REQUEST });

  return delClient(id)
    .then(() =>
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        payload: { id },
      }),
    )
    .catch(err =>
      dispatch({
        type: DELETE_CLIENT_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};
