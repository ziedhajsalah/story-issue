import {
  ADD_CLIENT_SUCCESS,
  EDIT_CLIENT_SUCCESS,
  DELETE_CLIENT_SUCCESS,
  FETCH_CLIENTS_SUCCESS,
} from '../actions';
import { findAndReplaceClient, findAndRemoveClient } from '../utils/helpers';

// type clientsStateType = clientType[];

// type actionType = {
//   type: string,
//   id?: number,
//   payload?: clientType
// };

export default function clients(state = [], action) {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.payload.clients;
    case ADD_CLIENT_SUCCESS:
      return [...state, action.payload.client];
    case EDIT_CLIENT_SUCCESS:
      return findAndReplaceClient(state, action.payload.client);
    case DELETE_CLIENT_SUCCESS:
      return findAndRemoveClient(state, action.payload.id);
    default:
      return state;
  }
}
