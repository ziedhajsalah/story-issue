import R from 'ramda';
import {
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_FAILURE,
  ADD_CLIENT_SUCCESS,
} from '../actions/clients';

export default function indicators(state = {}, action) {
  switch (action.type) {
    case ADD_CLIENT_REQUEST:
      return R.assocPath(['clients', 'submitting'], true, state);
    case ADD_CLIENT_FAILURE:
    case ADD_CLIENT_SUCCESS:
      return R.assocPath(['clients', 'submitting'], false, state);
    default:
      return state;
  }
}
