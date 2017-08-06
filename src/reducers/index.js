// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';
import indicators from './indicators';

const rootReducer = combineReducers({
  router,
  clients,
  indicators,
  form: formReducer,
});

export default rootReducer;
